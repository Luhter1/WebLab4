import { reactive, toValue  } from 'vue'

export const store = reactive({
  token: null,
  auth: false,

  set(token){
    this.token = toValue(token);
    this.auth = true;
  },

  get(){
    if(this.auth) return this.token
    else return null
  },

  remove(){
    this.token = null;
    this.auth = false;
  },

  is_auth(){
    return this.auth;
  }
})
