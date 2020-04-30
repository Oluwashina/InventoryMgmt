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
    userdetails: [],
    logindata: [],
    inactive: [],
    count: '',
    assets: [],
    bell: [],
    bellcountuser: [],
    viewassets: [],
    assetsassigned: [],
    viewrequest: [],
    assigned: [],
    viewassignedassets: [],
    countasset: '',
    countrequest: [],
    totalrequest: [],
    countassigned: [],
    category: [],
    categorybyid: [],
    select: [],
    selectedUser: '',
    messages: 3,
    notifications: [],
    usernotifications: []
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
    bellcount(state, data){
      state.bell = data.count
    },
    bellcountuser(state, data){
      state.bellcountuser = data.count
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
    userdetails(state, data){
      state.userdetails = data.data
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
    assetsassigned(state, data){
      state.assetsassigned = data.lot
    },
    viewrequest(state, data){
      state.viewrequest = data.requests
    },
    assigned(state, data){
      state.assigned = data
    },
    viewassignedassets(state, data){
      state.viewassignedassets = data.data
    },
    countasset(state, data){
      state.countasset = data.data
    },
    countrequest(state, data){
      state.countrequest = data.data
    },
    totalrequest(state,data){
      state.totalrequest = data.data
    },
    countassigned(state, data){
      state.countassigned = data.data
    },
    category(state, data){
      state.category = data.categories
    },
    categorybyid(state, data){
      state.categorybyid = data.categories
    },
    selected(state, payload){
      state.select = payload
    },
    selectedUser(state, payload){
      state.selectedUser = payload
    },
    notification(state, data){
      state.notifications = data.notifications
    },
    usernotifications(state, data){
      state.usernotifications = data.notifications
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
    UserDetails: ({commit}, id)=>{
      return new Promise((resolve,reject)=>{
        axios.get("/Users/"+id)
        .then(({data, status})=>{
          if(status === 200){
            resolve(data);
            commit("userdetails", data)
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
    BellCount: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/notification/count?to=storeKeeper&is_Read=0")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('bellcount', data);
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    BellCountUser: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.get("/notification/count?to="+payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('bellcountuser', data);
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
      var bodyFormData = new FormData();
      bodyFormData.set('staff_id', payload.staffId);
      bodyFormData.set('username', payload.userName);
      bodyFormData.set('firstname', payload.firstName);
      bodyFormData.set('lastname', payload.lastName);
      bodyFormData.set('email',  payload.email);
      bodyFormData.set('phonenumber', payload.phoneNumber);
      bodyFormData.append('Image', payload.image);
      bodyFormData.set('roles', JSON.stringify(payload.roles));
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url: '/Users',
          data: bodyFormData,
          config: { }
              })
          .then((data) => {
            resolve(data)
              })
              .catch((error)=>{
                reject(error)
              });
      })
    },
    UpdateImage: ({commit},payload)=>{
      var bodyFormData = new FormData();
      bodyFormData.set('staffId', payload.staffId);
      bodyFormData.append('Image', payload.image);
      return new Promise((resolve, reject)=>{
        axios({
          method: 'put',
          url: '/Users/Image',
          data: bodyFormData,
          config: { }
              })
          .then((data) => {
            resolve(data)
              })
         .catch((error)=>{
                reject(error)
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
    EditAsset: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.put("/Assets", payload)
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
    EditCategory: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.put("/category", payload)
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
    BatchAsset: ({commit},payload)=>{
      var bodyFormData = new FormData();
      bodyFormData.append('csvDoc', payload.csvDoc);
      return new Promise((resolve, reject)=>{
        axios({
          method: 'post',
          url: '/Assets',
          data: bodyFormData,
          config: { }
              })
          .then((data) => {
            resolve(data)
              })
              .catch((error)=>{
                reject(error)
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
    ViewAssignedAssets: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/lot/?is_Assigned=1")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('viewassignedassets', data)
          }
        })
        .catch((error)=>{
          reject(error);
        });
      })
    },
    ViewAssetsAssignedById: ({commit},id)=>{
      return new Promise((resolve, reject)=>{
        axios.get("/Assets/"+id+"?is_Assigned=1")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data);
            commit('assetsassigned', data)
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
        })
      })
    },
    AssignAsset: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.post("/Assign",payload)
        .then(({status, data})=>{
            resolve(data);
        })
        .catch((error)=>{
          reject(error);
        })
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
    countAssigned: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/assignedAssetCount")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
            commit('countassigned', data)
          }
        })
        .catch((error)=>{
          reject(error)
        });
      })
    },
    countRequest: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.get("/request/staff/"+payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
            commit('countrequest', data)
          }
        })
        .catch((error)=>{
          reject(error)
        });
      })
    },
    TotalRequestCount: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get("/requestCount")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
            commit('totalrequest', data)
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
    CategoryById: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.get("/category/"+payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
            commit('categorybyid', data)
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
    selectedUser: ({commit}, payload)=>{
        commit('selectedUser', payload)
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
    },
    Notifications: ({commit})=>{
      return new Promise((resolve,reject)=>{
        axios.get("/notification/?to=storeKeeper")
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
            commit("notification", data)
          }
        })
        .catch((error)=>{
          reject(error)
        })
      });
    },
    UserNotifications: ({commit}, payload)=>{
      return new Promise((resolve,reject)=>{
        axios.get("/notification/?to="+payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
            commit("usernotifications", data)
          }
        })
        .catch((error)=>{
          reject(error)
        })
      });
    },
    ViewRequest: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.get("/request/"+payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
            commit('viewrequest', data)
          }
        })
        .catch((error)=>{
          reject(error)
        })
      })
    },
    UpdateAssetStatus: ({commit}, payload)=>{
      return new Promise((resolve, reject)=>{
        axios.put("/Asset/status",payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
          }
        })
        .catch((error)=>{
          reject(error)
        })
      })
    },
    Deassign: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.post("unAssign",payload)
        .then(({status, data})=>{
          if(status === 200){
            resolve(data)
          }
        })
        .catch((error)=>{
          reject(error)
        })
      })
    },
    DownloadAssets: ({commit})=>{
      return new Promise((resolve, reject)=>{
        axios.get('Assets?typeMedia=CSV')
        .then(({status, data})=>{
            resolve(data)
        })
        .catch((error)=>{
          reject(error)
        })
      })
    },
    MarkAsRead: ({commit},payload)=>{
      return new Promise((resolve, reject)=>{
        axios.put('/notification',payload)
        .then(({status, data})=>{
            resolve(data)
        })
        .catch((error)=>{
          reject(error)
        })
      })
    }
  }
})
