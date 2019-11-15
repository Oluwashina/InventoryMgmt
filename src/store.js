import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || '',
    users: [],
    allusers: [],
    username: [],
    usersbyid: [],
    logindata: [],
    inactive: [],
    count: '',
    assets: [],
    viewassets: [],
    assigned: [],
    countasset: '',
    category: [],
    select: [],
    messages: 5
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
    LoginDetails(state, data){
      state.logindata = data
    },
    Users(state, data){
      state.users = data.data
    },
    username(state, data){
      state.username = data.data
    },
    usersbyid(state, data){
      state.usersbyid = data.data
    },
    inactive(state, data){
      state.allusers = data.data
    },
    active(state, data){
      state.allusers = data.data
    },
    user(state, data){
      state.allusers = data.data
    },
    allusers(state, data){
      state.allusers = data.data
    },
    storekeeper(state, data){
      state.allusers = data.data
    },
    admin(state, data){
      state.allusers = data.data
    },
    count(state, data){
      state.count = data.data
    },
    assets(state, data){
      state.assets = data.items
    },
    viewassets(state, data){
      state.viewassets = data.lot
    },
    assigned(state, data){
      state.assigned = data.item
    },
    countasset(state, data){
      state.countasset = data.data
    },
    category(state, data){
      state.category = data.categories
    },
    selected(state, payload){
      state.select = payload
    },
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
            commit('LoginDetails', data)
            resolve(data);
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    UserName: ({commit},id)=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Users/"+id)
        .then(({data, status})=>{
          if(status === 200){
            resolve(data)
            commit('username', data)
          }
        })
        .catch((error)=>{
          reject(error)
        });
      })
    },
    UserById: ({commit},id)=>{
      return new Promise((resolve,reject)=>{
        axios.get("/Users/"+id)
        .then(({data, status})=>{
          if(status === 200){
            resolve(data);
            commit("usersbyid",data)
          }
        })
        .catch((error)=>{
          reject(error)
        })
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
        axios.get("/Users?limit=3")
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
    ViewAll: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Users")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('allusers', data);
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
    ToggleUser: ({commit}, id)=>{
      return new Promise((resolve, reject)=>{
        axios.put("/status/"+id)
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
        axios.put("/Users", payload)
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
    ViewAssets: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Assets")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit("assets", data)
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    ViewAssetsById: ({commit}, id)=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Assets/"+id)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('viewassets', data)
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    AssignedAssets:({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Staff/Asset/"+payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('assigned', data)
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    countAssets: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/count/Assets")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
            commit('countasset', data)
          }
        })
        .catch((error)=>{
          reject(error)
        });
      })
    },
    Category: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/category")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
            commit('category', data)
          }
        })
        .catch((error)=>{
          reject(error);
        })
      });
    },
    selected: ({commit}, payload)=>{
      commit('selected',payload)
    },
    MakeRequest: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.post("/request",payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
          }
        })
        .catch((error)=>{
          reject(error);
        })
      });
    }
  }
})
