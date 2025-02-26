<script setup>
    import {onMounted, ref, watch, toValue } from 'vue'
    import { useFetch } from '../func/fetch'
    import { token_storage } from '../func/token'
    import { is_valid } from '../func/validate'
    import { drawGraph, clearCanvas, drawPoint } from '../func/canvas'

    let canvas, ctx, Pcanvas, Pctx, Xcanvas, Ycanvas, XPcanvas, YPcanvas;

    const x = ref(0);
    const y = ref(0);
    const r = ref(1);

    const userPoints = ref(null);
    const showTable = ref(false);
    const msg409 = ref("");

    function CheckPoint(X, Y, R){

        let val = is_valid(X, Y, R);

        if(val){
            alert(val);
            return null;
        }
        
        const requestContent = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token_storage.get_access_token()}`,
            },
            body: JSON.stringify({
                x: toValue(X),
                y: toValue(Y),
                r: toValue(R),
            })
        };

        (async () => {
            let data = await useFetch(
            "checkHit", 
            requestContent, 
            msg409
            );

            if(msg409.value){
                alert(msg409.value);
                msg409.value = "";
            }

            drawPoint(Pctx, XPcanvas, YPcanvas, data.x, data.y, data.status)
            getUserPoints();
        })();
    }

    function handleClick(e) {

        const rect = canvas.getBoundingClientRect();
        const xClick = e.clientX - rect.left;
        const yClick = e.clientY - rect.top;

        const canvasCenterX = canvas.width / 2;
        const canvasCenterY = canvas.height / 2;

        const scale = canvasCenterX / 5;

        const xValue = (xClick - canvasCenterX) / scale;
        const yValue = -(yClick - canvasCenterY) / scale;

        CheckPoint(xValue, yValue, r);
    }

    function getUserPoints(){

        const requestContent = {
            method: "GET",
            headers:{
                "Authorization": `Bearer ${token_storage.get_access_token()}`
            }
        };

        (async () => {
            let data = await useFetch(
            "points", 
            requestContent, 
            msg409
            );

            updateTable(data.points);
        })();

    }

    function updateTable(points){
        if(points.length > 0) showTable.value = true;
        userPoints.value = points;
    }

    onMounted(()=>{
        canvas = document.getElementById('canvas');
        ctx = canvas.getContext('2d');

        Pcanvas = document.getElementById('pointsCanvas');
        Pctx = Pcanvas.getContext('2d');

        Xcanvas = canvas.width;
        Ycanvas = canvas.height;

        XPcanvas = Pcanvas.width;
        YPcanvas = Pcanvas.height;

        clearCanvas(Pctx, XPcanvas, YPcanvas);
        drawGraph(ctx, Xcanvas, Ycanvas, r);

        getUserPoints();

        watch(r, ()=>{
            r.value = parseInt(toValue(r));
            clearCanvas(Pctx, XPcanvas, YPcanvas);
            drawGraph(ctx, Xcanvas, Ycanvas, r);
        })
    })

</script>

<template>
    <main class="text-center mt-3">
        <div class ="row-container container greatCanvas">
            <div class="canvasContainer">
                <canvas @click="handleClick" width="400" height="400" id="canvas"></canvas>
                <canvas width="400" height="400" id="pointsCanvas"  ></canvas>
            </div>
        </div>
        
        <div class="row-container container mt-3">
            <div class="row justify-content-center">
            <div class="col-md-9 col-lg-7 col-xl-6 col-ul-5">
                <div class="content p-3" id="content">
                <div class="px-3 py-2">
                    <div class="row"> 
                    <div class="col-12">
                        <h2 class="mb-3 text-center">Переменные</h2>

                        <form class="form" id="form" @submit.prevent="CheckPoint(x, y, r)">

                        <div class="form-group">
                            <label for="xVar">X</label>
                            <select v-model="x" class="form-control form-control-lg" id="xVar" required>
                                <option value="-4">-4</option>
                                <option value="-3">-3</option>
                                <option value="-2">-2</option>
                                <option value="-1">-1</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                        <div class="form-group mt-3 ">
                            <label for="yVar">Y</label>
                            <input type="number" id="yVar" class="form-control form-control-lg" v-model="y" required>
                        </div>
                        
                        <div class="form-group mt-3 ">
                            <label for="rVar">R</label>
                            <select v-model="r" class="form-control form-control-lg" id="rVar" required>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>

                        <div class="form-group text-center mt-3">
                            <div class="row justify-content-center">
                                <button class="btn btn-lg btn-block btn-primary" value="Войти">Проверить</button>
                            </div>
                        </div>

                        </form>

                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>
    </main>


    <footer class="">
        <div v-show="showTable" class="tableContainer " id="tableContainer">
            <table class="" id="table" styleClass="tableCorner" v-show="showTable">
                <thead>
                    <tr>
                        <th scope="col">X</th>
                        <th scope="col">Y</th>
                        <th scope="col">R</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="point in userPoints">
                        <td>{{ point.x.toFixed(2) }}</td>
                        <td>{{ point.y.toFixed(2) }}</td>
                        <td>{{ point.r }}</td>
                        <td :style="{ color: point.status ? 'green' : 'red' }">{{ point.status ? "попал" : "промах" }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </footer>

</template>

<style>

.canvasContainer {
    width: 400px;
    height: 400px;
    display: grid;
    place-content: center;
    place-items: center;
    grid-template-rows: 25% 50%;
    font-size: 20px;
    position: relative;
}

canvas {
    border: black solid;
}

#canvas{
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    z-index: 0;
    position: absolute;
}

#pointsCanvas{
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    left:0;
    pointer-events: none;
}

.greatCanvas{
    display: flex;
    align-items: center;
    place-content: center;
}

@media (min-width: 992px) {
    main.text-center {
        display: flex;
        justify-content: space-between;
    }

    .row-container {
        width: 100%; /* или любая другая ширина */
    }
}

footer{
    display: flex;
    justify-content: center;
}

table {
  margin: 0 auto;
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

thead {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

.tableContainer {
    justify-content: center;
    margin-top: 2%;
    width: fit-content;
    height: fit-content;
    max-height: 300px;
    overflow-y: scroll;
    border: solid;
}

.tableContainer::-webkit-scrollbar {
    width: 10px;
    background-color: #f9f9fd;
}

.tableContainer::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #18aaaa;
}

.tableContainer::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f9f9fd;
}
</style>