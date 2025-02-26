import { reactive, toValue  } from 'vue'


export const token_storage = reactive({

  set_access_token(token){
    localStorage.setItem("MY_access_token", toValue(token));
  },

  set_refresh_token(token){
    localStorage.setItem("MY_refresh_token", toValue(token));
  },

  get_access_token(){
    return localStorage.getItem("MY_access_token");
  },

  get_refresh_token(){
    return localStorage.getItem("MY_refresh_token");
  },

  remove_access_token(){
    localStorage.removeItem("MY_access_token");
  },

  remove_refresh_token(){
    localStorage.removeItem("MY_refresh_token");
  },

  is_auth(){
    return this.get_refresh_token() !== null;
  }
})
