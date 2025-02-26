<script setup>
  import {ref} from 'vue'
  import { useFetch } from '../func/fetch'
  import { token_storage } from '../func/token'

  const login = ref("");
  const pwd = ref("");

  const msg409 = ref("Имя пользователя уже занято")
  const show = ref(false)

  function handleSubmit() {

    const requestContent = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: login.value,
          password: pwd.value,
        }),
    };


    (async () => {
      let answ = await useFetch(
        "api/register", 
        requestContent, 
        msg409
      );

      if(answ !== null){
         token_storage.set_access_token(answ.access_token);
         token_storage.set_refresh_token(answ.refresh_token);
         window.location.hash = '#/';
      }

      show.value = true;
    })();

  }

</script>

<template>
  <div v-show="show" class="page-error text-center mx-auto mt-3">
    <h4 v-show='!token_storage.is_auth()' class="error-404">{{ msg409 }}</h4>
  </div>
  
  <div class="container mt-3">
    <div class="row justify-content-center">
      <div class="col-md-9 col-lg-7 col-xl-6 col-ul-5">
        <main class="content p-3" id="content">
          <div class="px-3 py-2">
            <div class="row">
              <div class="col-12">
                <h2 class="mb-3 text-center">Регистрация</h2>

                <form @submit.prevent="handleSubmit()">

                  <div class="form-group">
                    <label for="username">Логин</label>
                    <input v-model="login" class="form-control form-control-lg" id="username" placeholder="login" pattern=".{3,}" required>
                  </div>

                  <div class="form-group mt-3 ">
                    <label for="username">Пароль</label>
                    <input v-model="pwd" class="form-control form-control-lg" id="password" placeholder="password" pattern=".{3,}" required>
                  </div>
                  
                  <div class="form-group text-center mt-3">
                    <div class="row justify-content-center">
                      <div class="col-12 col-sm-5 col-md-4 col-lg-4 col-xl-5 col-ul-4">
                        <button class="btn btn-lg btn-block btn-primary" value="Войти">Sign up</button>
                      </div>
                    </div>
                  </div>

                </form>

              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>

</template>

<style>

</style>