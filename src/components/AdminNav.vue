<template>
  <nav>
   <v-app-bar clipped app color="#1976D2">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Kayar</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
       <v-text-field
        flat
        solo-inverted
        hide-details
        label="Search"
        append-icon="search"
        color="#ffffff" 
        class="hidden-sm-and-down">
      </v-text-field>
      <v-btn icon class="white--text">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
       <v-btn icon class="white--text" router-link to="/">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
     <v-navigation-drawer app clipped-left v-model="drawer" color="#D7E9FB">

       <v-flex class="mt-5">
       <v-btn text color="#1976D2" class="switchSize">Switch Role:</v-btn>
          <!-- dropdown -->
    <v-menu offset-y >
      <template v-slot:activator="{ on }">
        <v-btn color="rgba(46, 42, 35, 0.3)"
          v-on="on">
          Admin
        </v-btn>
      </template>
       <v-list>
        <v-list-item v-for="(item, index) in Login" :key="index" @click="Toggle(item)">
          <v-list-item-title>{{ item}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
       </v-flex>
           <v-layout column align-center>
              <v-flex class="mt-10">
                  <v-avatar size="80" class="avatarC" v-for="user in Images" :key="user.id">
                      <!-- <v-icon large color="#1976D2">mdi-account</v-icon> -->
                      <v-img class="" size="20px" :src="getImgUrl(user.Image)" alt="/account.png" lazy-src="/account.png"></v-img>
                  </v-avatar>
              </v-flex>
          </v-layout>
          <v-list-item>
              <v-list-item-content>
                  <v-list-item-title class="title text-center profileName" v-for="user in Username" :key="user.id">
                     {{user.FirstName}} {{user.LastName}}
                  </v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-btn color="#1976D2" class="white--text ml-6 mt-4" router-link to="/create">Create User
              <v-icon right>mdi-plus</v-icon>
            </v-btn>
          </v-list-item>
          <v-list dense nav class="mt-6">
            <v-list-item router-link to="/admin">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-apps</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  DASHBOARD
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
            <v-list-item  v-on:click="viewusers()">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  USERS
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
             <v-list-item router-link to="/viewassets">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-dresser</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  VIEW ASSETS
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
              <v-list-item router-link to="/updateadminprofile">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-account-edit</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  UPDATE PROFILE
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
          </v-list>
          <v-list class="mt-12 ml-6">
            <v-btn color="#1976D2" text class="ml-6 mb-4" router-link to="/">Sign Out
              <v-icon right>mdi-logout</v-icon>
            </v-btn>
          </v-list>
      </v-navigation-drawer>
    </nav> 
</template>

<script>
import router from '@/router'
export default {
  data(){
     return{
           right: null,
           drawer: true,
           messages: 2,
           dropdown: [
                {
                    title : 'StoreKeeper',
                    icon : 'mdi-plus-circle-outline',
                    route : '/storekeeper'
                },
                {
                    title : 'User',
                    icon : 'mdi-map-marker',
                    route: '/users'
                },
            ],
        }
  },
  computed:{
    Login(){
      return this.$store.state.logindata.roleId
    },
    Username(){
      return this.$store.state.username
    },
    Images(){
      return this.$store.state.usersbyid
    }
  },
  methods:{
    viewusers(){
      // const token = this.$store.getters.loggedIn
      // console.log(token)
      this.$store.dispatch('View')
      .then((success)=>{
        console.log(success);
        this.$router.push('/viewusers')
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    Toggle(item){
      if(item == 'Storekeeper'){
        this.$router.push('/storekeeper')
      }
      else if(item == "Admin"){
        this.$router.push('/admin')
      }
      else{
        this.$router.push('/users')
      }
    },
     getImgUrl(pic) {
            let weblink = "http://192.168.1.107:3000/images/users/";
            return weblink+pic;
    },
  },
  created(){
    this.$store.dispatch("UserName",this.$store.state.logindata.Staff_Id)
    .then((success)=>{
      console.log(success)
    })
    .catch((error)=>{
      console.log(error)
    })
    this.$store.dispatch("UserById",this.$store.state.username[0].Staff_Id)
    .then((success)=>{
      console.log(success)
    })
    .catch((error)=>{
      console.log(error);
    }) 
  }
}
</script>

<style scoped>
.switchSize{
    text-transform: capitalize;
}
.profileName{
  text-transform: uppercase;
  color: #5F5D5D;
  font-size: 35px;
  line-height: 43px;
}
.avatarC{
  border: 3px solid #1976D2;
}
.listColor{
  color: #1976D2;
}

</style>
