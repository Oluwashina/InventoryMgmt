<template>
<div class="admin">
   <AdminNav/>
   <v-container>
   <h2 class="subheading my-3 user-color">DASHBOARD</h2>

    <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">

        <v-card class="elevation-10"  color="white">

    <v-row class="mx-auto">
          <v-col
            cols="12"
            sm="4"
            md="4">

   <v-card  max-width="350"
    class="elevation-8 my-2">
    <v-list-item three-line class="card-color">
      <v-list-item-content>
        <v-icon   class="white--text icon-size">mdi-account-multiple</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <h1 class="white--text" v-for="users in count" :key="users.title">{{users.NumberOfUsers}}</h1>
        <p class="white--text">Registered Users</p>
      </v-list-item-content>

      
    </v-list-item>
<v-divider></v-divider>
    <v-card-actions>
      <v-btn text color="#1976D2" v-on:click="viewusers()">View Details
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
 </v-col>

        <v-col
            cols="12"
            sm="4" 
            md="4">
              <v-card max-width="350"
    class="elevation-8 my-2">
    <v-list-item three-line class="asset-color">
      <v-list-item-content>
        <v-icon class="white--text icon-size">mdi-dresser</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <h1 class="white--text" v-for="assets in AssetsCount" :key="assets.id">{{assets.NumberOfAssets}}</h1>
        <p class="white--text">Total Assets</p>
      </v-list-item-content>

      
    </v-list-item>
<v-divider></v-divider>
    <v-card-actions>
      <v-btn text color="#FFB44C" router-link to="/viewassets">View Details
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
        </v-col>


    </v-row>

    <v-row class="mx-auto">
          <v-col
            cols="12"
            sm="12"
            md="4">
             <v-card
    class="elevation-8"
    max-width="350"
    color=""
  >
    <v-card-text>
      <p class="added-user my-4">
      Recently Added User
      </p>
    </v-card-text>

    <v-list-item-content class="ml-7 mt-n5" v-for="user in Users" v-bind:key="user.title">
      <li class="name-color mb-6">{{user.FirstName}} {{user.LastName}}</li>
    </v-list-item-content>

  </v-card>
          </v-col>

          <v-col
            cols="12"
            sm="12"
            md="4" >
             <v-card
    class="elevation-8"
    max-width="350"
    color=""
  >
   <v-card-text>
      <p class="added-user my-4">
      Statistics
      </p>
    </v-card-text>
  </v-card>
          </v-col>
    </v-row>

        </v-card>
          </v-col>
    </v-row>


   </v-container>
</div>
   
</template>


<script>
import AdminNav from '../components/AdminNav';
export default {
    components: {
        AdminNav,
  },
  data(){
    return{
      assets: 12,
    }
  },
  created(){
    this.$store.dispatch('View')
      .then((success)=>{
        console.log(success);
      })
      .catch((error)=>{
        console.log(error);
    });
    this.$store.dispatch('CountUsers')
    .then((success)=>{
      console.log(success);
    })
    .catch((error)=>{
      console.log(error);
    })
    this.$store.dispatch('countAssets')
    .then((success)=>{
      console.log(success)
    })
    .catch((error)=>{
      console.log(error);
    })
  },
  computed:{
     Users(){
        return this.$store.state.users
          },
      count(){
        return this.$store.state.count
      },
      AssetsCount(){
        return this.$store.state.countasset
      }
      },
  methods:{
     viewusers(){
      this.$store.dispatch('ViewAll')
      .then((success)=>{
        console.log(success);
        this.$router.push('/viewusers')
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }
}
</script>


<style scoped>
.card-color{
  background-color:  #1976D2;
}
.asset-color{
  background-color: #FFB44C;
}
.branch-color{
  background-color: #FF8765;
}
.added-user{
  color:  #1976D2;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  text-align: center
}
.name-color{
  color: #5F5D5D;
}
.user-color{
     color:#5F5D5D;
}
.icon-size{
  font-size: 60px;
}
.admin{
  background-color: #CAD8E6;
  background-size: cover;
  height: 100%;
}

</style>