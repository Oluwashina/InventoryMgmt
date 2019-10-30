import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || '',
    users: [],
    inactive: [],
    count: ''
  },
  getters:{
    loggedIn(state){
      return state.token != null
    }
  },
  mutations: {
    Login(state,token){
      state.token = token
    },
    Users(state, data){
      state.users = data.data
    },
    inactive(state, data){
      state.users = data.data
    },
    active(state, data){
      state.users = data.data
    },
    user(state, data){
      state.users = data.data
    },
    storekeeper(state, data){
      state.users = data.data
    },
    admin(state, data){
      state.users = data.data
    },
    count(state, data){
      state.count = data.data
    }
   
  },
  actions: {
    Login: ({commit}, payload) => {
      return new Promise((resolve, reject)=>{
        axios.post("/login",payload)
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
        axios.post("/User", payload)
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
    View:({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Users?limit=10")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('Users', data);
          }
        })
        .catch((error)=>{
          reject(error);
        })
      })
    },
    InactiveUsers: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Users?isActive=0")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('inactive', data);
          }
        })
        .catch((error)=>{
          reject(error);
        })
      })
    },
    ActiveUsers: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Users?isActive=1")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('active', data);
          }
        })
        .catch((error)=>{
          reject(error);
        })
      })
    },
    Users: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Users?role=User")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('user', data);
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    Storekeeper: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Users?role=Storekeeper")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('storekeeper', data);
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    admin: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Users?role=Admin")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('admin', data);
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    CountUsers:({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/count/Users")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('count',data);
          }
        })
        .catch((error)=>{
          reject(error);
        })
      })

    },
    Reset:({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.put("/forgotPassword",payload)
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
        axios.put("/passwordChange", payload)
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
        axios.put("/Users/5", payload)
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
    CreateAsset: ({commit}, payload)=>{
     return new Promise((resolve, reject)=>{
       axios.post("/Assets", payload)
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
}
})
