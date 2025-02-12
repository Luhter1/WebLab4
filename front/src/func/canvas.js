import { toValue } from 'vue'

export function clearCanvas(ctx, width, height) {
    ctx.clearRect(0, 0, width, height);
}

function drawGrid(ctx, width, height) {
    const gridSpacing = width / 10;

    ctx.strokeStyle = '#a0e0ef';
    ctx.beginPath();

    for (let x = 0; x <= width; x += gridSpacing) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
    }
    for (let y = 0; y <= height; y += gridSpacing) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
    }

    ctx.stroke();
}

function drawAxes(ctx, width, height) {
    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
}

function drawShapes(ctx, width, height, r) {
    const scale = (width / 2) * (toValue(r) / 5);
    ctx.fillStyle = '#5f9ea0';

    // Четверть круга
    ctx.beginPath();
    ctx.moveTo(width / 2, height / 2);
    ctx.arc(width / 2, height / 2, scale / 2, 0.5 * Math.PI, Math.PI);
    ctx.fill();
    ctx.stroke();

    // Прямоугольник
    ctx.beginPath();
    ctx.rect(width / 2, height / 2 - scale, scale, scale);
    ctx.fill();
    ctx.stroke();

    // Треугольник
    ctx.beginPath();
    ctx.moveTo(width / 2 + scale/2, height / 2);
    ctx.lineTo(width / 2, height / 2);
    ctx.lineTo(width / 2, height / 2 + scale/2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
}

function drawLabels(ctx, width, height, r) {
    const scale = (width / 2) * (toValue(r) / 5);
    ctx.font = '16px Arial';
    ctx.fillStyle = '#000000';

    ctx.fillText('R', width / 2 + scale, height / 2 + 15);

    ctx.fillText('R', width / 2 - 15, height / 2 - scale);

}

export function drawGraph(ctx, width, height, r) {
    if (toValue(r) === null) return;

    clearCanvas(ctx, width, height);
    drawGrid(ctx, width, height);
    drawAxes(ctx, width, height);
    drawShapes(ctx, width, height, r);
    drawLabels(ctx, width, height, r);
}

export function drawPoint(Pctx, Pwidth, Pheight, xValue, yValue, status) {

    const plotX = toValue(xValue) * 40;
    const plotY = -toValue(yValue) * 40;

    Pctx.beginPath();

    Pctx.translate(Pwidth / 2, Pheight / 2);
    Pctx.arc(plotX, plotY, 5, 0, 2 * Math.PI);
    Pctx.fillStyle = status ? 'green' : 'red';
    Pctx.fill();
    Pctx.resetTransform();
    Pctx.closePath();
}