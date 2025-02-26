<script setup>
import { ref, computed } from 'vue'

import { token_storage } from './func/token'
import { logout_token } from './func/fetch'

import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Points from './components/Points.vue'
import ErrorPage from './components/ErrorPage.vue'


const routes = {
  '/': Points,
  '/login': Login,
  '/register': Register,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {

  // проверка на регистрацию
  if(!token_storage.is_auth()){
    if(currentPath.value.slice(1) === '/register'){
       return Register;
    }

    window.location.hash = '#/login';
    return Login;
  }  

  if(currentPath.value.slice(1) === '/logout'){
    logout_token();
    token_storage.remove_refresh_token();
    token_storage.remove_access_token();
    window.location.hash = '#/login';
    return Login;
  }

  if(currentPath.value.slice(1) === '/register' || currentPath.value.slice(1) === '/login'){
    window.location.hash = '#/';
    return Points;
  }  

  return routes[currentPath.value.slice(1) || '/'] || ErrorPage
})
</script>


<template>
  <header>
      <div class="container">
        <div class="header-btn">
          <a href="#/" class="btn">Главная</a>
        </div>

        <div class="inf">
          <ul>
            <li><h5 class="name">Капарулин Тимофей Иванович</h5></li>
            <li><h5 class="group">P3208</h5></li>
            <li><h5 class="id">7896</h5></li>
          </ul>
        </div>

        <div class="header-btn" v-if='token_storage.is_auth()'>
          <a href="#/logout" class="btn">Exit</a>
        </div>
        <div class="header-btn" v-else>
          <a href="#/register" class="btn">Sign up</a>
          <a href="#/login" class="btn">Login</a>
        </div>

      </div>
      <div class="toggle">
            <a href="#/" class="btn">Главная</a>
            <a v-if='token_storage.is_auth()' href="#/logout" class="btn">Exit</a>
            <a v-if='!token_storage.is_auth()' href="#/register" class="btn">Sign up</a>
            <a v-if='!token_storage.is_auth()' href="#/login" class="btn">Login</a>
      </div>
  </header>

  <component :is="currentView" />
</template>


<style scoped>

  header {
    margin-top: 0.5%;
  }

  header .container {
    display: flex;
    align-items: center; /* Выравнивает элементы по вертикали по центру */
    padding: 10px 20px; /* Добавьте отступы по желанию */
  }

  .inf ul {
    list-style: none; /* Убирает маркеры списка */
    padding: 0;
    margin: 0;
    display: flex; 

  }

  .inf li {
    font-size: xx-small;
    margin-right: 20px; /* Добавляет отступ между элементами меню */
  }

  .header-btn a {
    margin-right: 20px; /* Добавляет отступ между элементами меню */
  }

  .btn {
    grid-row: 3;
    grid-column: 3;
    padding: 10px 20px;
    background-color: #ff5c57;
    color: #fff;
    text-decoration: none;
    border-radius: 20px;
    font-size: 1rem;
    font-weight: bold;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
    transition: background-color 0.3s ease;
    text-align: center;
 }


  @media (min-width: 992px) {
    header .container {
      justify-content: space-between;
    }

    .toggle{
      display: none;
    }
  }

  @media (max-width: 992px) {
    header .container {
      justify-content: center;
    }

    .header-btn {
      display: none;
    }

    .toggle{
      display: flex; 
      justify-content: center;
    }

    .btn{
      margin: 0 5% 0 5%
    }

  }

</style>
