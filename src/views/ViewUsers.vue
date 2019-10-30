<template>
<div class="dashboard">
    <AdminNav/> 
    <v-container class="my-2">
      <h2 class="subheading my-5 user-color">Users</h2>
    <v-row>
          <v-col
            cols="12"
            sm="6"
            md="8">
        <h4 v-for="total in count" :key="total.id">Total: {{total.NumberOfUsers}}</h4>

    </v-col>
     <v-col
            cols="12"
            sm="6"
            md="4">
        
            <!-- dropdown -->
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn 
          v-on="on"
          class="filterText"
        >
          Filter By:
        </v-btn>
      </template>
       <v-list>
        <v-list-item v-on:click="AllUsers()">
          <v-list-item-title>All</v-list-item-title>
        </v-list-item>

         <v-list-item v-on:click="Active()">
          <v-list-item-title>Active Users</v-list-item-title>
        </v-list-item>

        <v-list-item v-on:click="Inactive()">
          <v-list-item-title>Inactive Users</v-list-item-title>
        </v-list-item>
      
        <v-list-item v-on:click="User()">
          <v-list-item-title>User</v-list-item-title>
        </v-list-item>
     
        <v-list-item v-on:click="Storekeeper()">
          <v-list-item-title>Storekeeper</v-list-item-title>
        </v-list-item>
   
        <v-list-item v-on:click="Admin()">
          <v-list-item-title>Admin</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     </v-col>
</v-row>

<div>
<v-card class="pa-3 mt-2" v-for="project in Users" v-bind:key="project.title">
        <v-layout row wrap class="pa-3">
          <v-flex xs12 md6>
            <div class="caption grey--text">
              Username</div>
              <div>{{project.UserName}}</div>
          </v-flex>
          <v-flex xs6 sm6 md4>
            <div class="caption grey--text">Names</div>
            <div>{{project.FirstName}} {{project.LastName}}</div>
          </v-flex>
          <v-flex xs6 sm6 md2>
            <div class="caption grey--text">Phone Number</div>
            <div>{{project.PhoneNumber}}</div>
          </v-flex>
        </v-layout>
      </v-card>
  </div>

  <div class="text-center mt-5">
    <v-pagination
      v-model="page"
      :length="6">
      </v-pagination>
  </div>
      

    </v-container>

</div>

</template>

<script>
import AdminNav from '../components/AdminNav'
export default {
     components: {
        AdminNav
     },
    data(){
      return{
            total: 10,
            switch1: true,
             page: 1,     
            }
        },
        computed:{
          Users(){
            return this.$store.state.users
          },
          inactive(){
            return this.$store.state.inactive
          },
          count(){
            return this.$store.state.count
          }
        },
        methods:{
          Inactive(){
          this.$store.dispatch('InactiveUsers')
            .then((success)=>{
            console.log(success);
            // this.$router.push('/viewusers/inactive')
           })
          .catch((error)=>{
          console.log(error);
      })
    },
    AllUsers(){
      this.$store.dispatch('View')
       .then((success)=>{
            console.log(success);
           })
          .catch((error)=>{
          console.log(error);
      })
    },
    User(){
      this.$store.dispatch('Users')
      .then((success)=>{
        console.log(success)
      })
      .catch((error)=>{
        console.log(error);
      });
    },
    Storekeeper(){
      this.$store.dispatch('Storekeeper')
      .then((success)=>{
        console.log(success)
      })
      .catch((error)=>{
        console.log(error);
      });
    },
    Admin(){
      this.$store.dispatch('admin')
      .then((success)=>{
        console.log(success)
      })
      .catch((error)=>{
        console.log(error);
      });
    },
    Active(){
      this.$store.dispatch('ActiveUsers')
      .then((success)=>{
        console.log(success)
      })
      .catch((error)=>{
        console.log(error);
      });
    },

  }
    
}
</script>

<style scoped>
.filterText{
    color: #5F5D5D;
}
.user-color{
     color:#013919;
}

</style>