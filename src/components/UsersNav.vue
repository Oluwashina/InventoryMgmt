<template>
  <nav>
   <v-app-bar clipped app color="#1976D2">
      <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span class="white--text">Kayar</span>
      </v-toolbar-title>
      <div class="flex-grow-1"></div>
      <v-btn icon class="white--text mr-3">
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <!-- <v-btn icon class="white--text">
        <v-icon>mdi-bell</v-icon>
      </v-btn> -->
    <v-badge color="red" overlap left class="mr-3">
      <template v-slot:badge>
        <span>{{messages}}</span>
      </template>
      <v-icon class="white--text">mdi-bell</v-icon>
    </v-badge>
       <v-btn icon class="white--text" router-link to="/">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
     <v-navigation-drawer app clipped-left v-model="drawer" color="#CAD8E6">

       <v-flex class="mt-5">
       <v-btn text color="#1976D2" class="switchSize">Switch Role:</v-btn>
          <!-- dropdown -->
    <v-menu offset-y >
      <template v-slot:activator="{ on }">
        <v-btn color="rgba(46, 42, 35, 0.3)"
          v-on="on">
          User
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
              <v-flex class="mt-8">
                  <v-avatar size="80" class="avatarC">
                      <v-icon large color="#1976D2">mdi-account</v-icon>
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
            <v-btn color="#1976D2" class="white--text ml-6 mt-4" router-link to="/makerequest">Make Request
              <v-icon right>mdi-plus</v-icon>
            </v-btn>
          </v-list-item>
          <v-list dense nav class="mt-6">
            <v-list-item router-link to="/users">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-apps</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  DASHBOARD
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
            <v-list-item router-link to="/assignedasset">
              <v-list-item-icon>
                <v-icon color="#1976D2">mdi-dresser</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  ASSIGNED ASSETS
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
            <v-list-item router-link to="/updateprofile">
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
            <span>Theme</span>
                    <v-switch
                      v-model="$vuetify.theme.dark"
                      primary
                      label="Dark"
                    ></v-switch>
          </v-list>
      </v-navigation-drawer>
    </nav> 
</template>

<script>
export default {
  data(){
     return{
           right: null,
           drawer: true,
           messages: 1,
           dropdown: [
                {
                    title : 'Store Keeper',
                    icon : 'mdi-plus-circle-outline',
                    route : '/storekeeper'
                },
                {
                    title : 'Admin',
                    icon : 'mdi-map-marker',
                    route : '/admin'
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
    }
  },
  methods:{
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
    badge(){
      alert("hello")
    }
  },
  created(){
    this.$store.dispatch("UserName",this.$store.state.logindata.Staff_Id)
    .then((success)=>{
      console.log(success)
    })
    .catch((error)=>{
      console.log(error)
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
.icon-size{
  font-size: 25px;
}

</style>
