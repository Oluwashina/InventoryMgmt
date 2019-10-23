<template>
  <nav>
   <v-app-bar clipped app color="#013919">
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
     <v-navigation-drawer app clipped-left v-model="drawer" color="#E1FFEE">

       <v-flex class="mt-5">
       <v-btn text color="#013919" class="switchSize">Switch Role:</v-btn>
          <!-- dropdown -->
    <v-menu offset-y >
      <template v-slot:activator="{ on }">
        <v-btn 
          v-on="on">
          Admin
        </v-btn>
      </template>
       <v-list>
        <v-list-item v-for="(item, index) in dropdown" :key="index" router :to="item.route" >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
       </v-flex>
           <v-layout column align-center>
              <v-flex class="mt-6">
                  <v-avatar size="80" class="avatarC">
                      <v-icon large color="#013919">mdi-account</v-icon>
                  </v-avatar>
              </v-flex>
          </v-layout>
          <v-list-item>
              <v-list-item-content>
                  <v-list-item-title class="title text-center profileName">
                     Olayioye A.
                  </v-list-item-title>
              </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-btn color="#013919" class="white--text ml-6 mt-4" router-link to="/create">Create User
              <v-icon right>mdi-plus</v-icon>
            </v-btn>
          </v-list-item>
          <v-list dense nav class="mt-6">
            <v-list-item router-link to="/admin">
              <v-list-item-icon>
                <v-icon color="#013919">mdi-apps</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  DASHBOARD
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
          </v-list>
            <v-list dense nav class="">
            <v-list-item  v-on:click="viewusers()">
              <v-list-item-icon>
                <v-icon color="#013919">mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  USERS
                </v-list-item-title>
              </v-item-content>
            </v-list-item>
          </v-list>
           <v-list dense nav class="">
            <v-list-item router-link to="/viewassets">
              <v-list-item-icon>
                <v-icon color="#013919">mdi-dresser</v-icon>
              </v-list-item-icon>
              <v-item-content>
                <v-list-item-title class="listColor">
                  VIEW ASSETS
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
           dropdown: [
                {
                    title : 'Store Keeper',
                    icon : 'mdi-plus-circle-outline',
                    route : '/storekeeper'
                },
                {
                    title : 'User',
                    icon : 'mdi-map-marker',
                    route : '/users'
                },
            ],
            items:[
              {
                title: 'DASHBOARD',
                icon: 'mdi-apps',
                route: '/admin'
              },
              {
                title: 'USERS',
                icon: 'mdi-account-multiple',
                route: '/users'
              },
            ]
        }
  },
  methods:{
    viewusers(){
      // const token = this.$store.getters.loggedIn
      // console.log(token)
      this.$store.dispatch('View')
      .then((success)=>{
        console.log(success);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },
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
  border: 3px solid #013919;
}
.listColor{
  color: #013919;
}

</style>
