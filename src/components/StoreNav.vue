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
      <v-btn icon class="white--text">
        <v-icon>mdi-bell</v-icon>
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
          StoreKeeper
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
              <v-flex class="mt-6">
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
            <v-btn color="#1976D2" class="white--text ml-6 mt-4" router-link to="/newasset">Add New Asset
              <v-icon right>mdi-plus</v-icon>
            </v-btn>
          </v-list-item>
          <v-list dense nav class="mt-6">
              <v-list-item v-for="item in items" :key="item.title" link router :to="item.route">
                  <v-list-item-icon>
                      <v-icon color="#1976D2">{{item.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                      <v-list-item-title class="listColor">{{item.title}}</v-list-item-title>
                  </v-list-item-content>
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
            items:[
              {
                title: 'DASHBOARD',
                icon: 'mdi-view-dashboard',
                route: '/storekeeper'
              },
              {
                title: 'VIEW ASSETS',
                icon: 'mdi-cart-outline',
                route: '/assets'
              },
              {
                title: 'TRANSIT FORM',
                icon: 'mdi-receipt',
                route: '/transit'
              },
              {
                title: 'ASSIGN ASSET',
                icon: 'mdi-account-check',
                route: '/assignasset'
              },
              {
                title: 'GENERATE REPORT',
                icon: 'mdi-clipboard-text',
                route: '/'
              },
              {
                title: 'UPDATE PROFILE',
                icon: 'mdi-account-edit',
                route: '/updatestoreprofile'
              }
            ]
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
    font-size: 11px;
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
