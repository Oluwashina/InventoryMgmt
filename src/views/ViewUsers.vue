<template>
<div class="dashboard">
    <AdminNav/> 
    <v-container>
      <h2 class="subheading my-5 user-color">USERS</h2>

       <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>Users status successfully updated ..</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
    <v-row>
          <v-col
            cols="12"
            sm="6"
            xs="6"
            md="8">
        <h3 v-for="total in count" :key="total.id" class="user-color">Total: {{Users.length}}</h3>

    </v-col>
     <v-col
            cols="12"
            sm="6"
            xs="6"
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
<v-card class="pa-3 mt-2 elevation-0" v-for="project in Users" v-bind:key="project.title" >
        <v-layout row wrap class="pa-3">
          <v-flex xs12 md2>
            <div class="caption user-color">
              Username</div>
              <div class="my-6">{{project.UserName}}</div>
          </v-flex>
          <v-flex xs6 sm6 md4>
              <div class="caption user-color">Names</div>
        <div class="my-6">{{project.FirstName}} {{project.LastName}}</div>
          </v-flex>
          <v-flex xs6 sm6 md2>
            <div class="caption user-color">Phone Number</div>
            <div class="my-6">{{project.PhoneNumber}}</div>
          </v-flex>
            <v-flex xs6 sm6 md2>
            <div class="caption user-color">Status</div>
            <v-switch v-model="project.isActive" :label="'Active'" @change="changeState(project.Staff_Id)"></v-switch>
          </v-flex>
           <v-flex xs6 sm6 md2>
            <v-btn small text class="my-9" color="#1976D2" @click="viewMore(project.Staff_Id)">View details</v-btn>
          </v-flex>
        </v-layout>
      </v-card>
  </div>
<!-- 
  <div class="text-center mt-5">
    <v-pagination
      v-model="page"
      :length="6">
      </v-pagination>
  </div> -->
      

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
            switch1: 1,
             page: 1, 
             snackbar: false    
            }
        },
        computed:{
          Users(){
            return this.$store.state.allusers
          },
          inactive(){
            return this.$store.state.inactive
          },
          count(){
            return this.$store.state.count
          }
        },
        methods:{
          changeState(id){
              this.$store.dispatch("ToggleUser",id)
              .then((success)=>{
                console.log(success);
                this.snackbar = true;
              })
              .catch((error)=>{
                console.log(error);
              })
          },
          viewMore(id){
            this.$store.dispatch("UserDetails",id)
            .then((success)=>{
              console.log(success)
               this.$router.push(`/viewusers/${id}`)
            })
            .catch((error)=>{
              console.log(error);
            })   
          },
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
      this.$store.dispatch('ViewAll')
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

  },
  created(){
    this.$store.dispatch('ViewAll')
      .then((success)=>{
        console.log(success);
       })
      .catch((error)=>{
        console.log(error);
      })
  }
    
}
</script>

<style scoped>
.filterText{
    color: #5F5D5D;
}
.user-color{
     color:#5F5D5D;
}
.dashboard{
  background-color: #CAD8E6;
  background-size: cover;
  height: 100%;
}
</style>