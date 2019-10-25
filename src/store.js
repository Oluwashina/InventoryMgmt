import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || ''
  },
  getters:{
    loggedIn(state){
      return state.token
    }
  },
  mutations: {
    Login(state,token){
      state.token = token
    }
   
  },
  actions: {
    Login: ({commit}, payload) => {
      return new Promise((resolve, reject)=>{
        axios.post("http://192.168.1.133:3000/login",payload)
        .then(({data, status})=>{
          if(status === 200){
            const token = data.token
            localStorage.setItem("token", token)
            axios.defaults.headers.common['Authorization'] = token
            commit('Login', token)
            resolve(data);
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    Register: ({commit},payload) =>{
      return new Promise((resolve, reject)=>{
        axios.post("http://192.168.1.133:3000/User", payload)
        .then(({data, status})=>{
          if(status === 201){
            resolve(data);
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    View:({context})=>{
      return new Promise((resolve, reject)=>{
        axios.get("http://192.168.1.133:3000/Users?limit=10")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
          }
        })
        .catch((error)=>{
          reject(error);
        })
      })
    },
    Reset:({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.put("http://192.168.1.133:3000/forgotPassword",payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
          }
        })
        .catch((error)=>{
          reject(error);
        })
      })
    },
    ChangePassword:({commit}, payload)=>{
      return new Promise((resolve, reject)=>{
        axios.put("http://192.168.1.133:3000/passwordChange", payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    Update:({commit}, payload)=>{
      return new Promise((resolve, reject)=>{
        axios.put("http://192.168.1.133:3000/Users/5", payload)
        .then(({status, data})=>{
          if(status === 201){
            resolve(data);
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
}
})
