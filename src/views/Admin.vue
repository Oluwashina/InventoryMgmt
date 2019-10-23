<template>
<div class="admin">
   <AdminNav/>
   <v-container>
   <h1>Dashboard</h1>

    <v-row>
          <v-col
            cols="12"
            sm="12"
            md="4">

   <v-card
    class="elevation-8 my-5"
    max-width="300">
    <v-list-item three-line class="card-color">
      <v-list-item-content>
        <v-icon large class="white--text">mdi-account-multiple</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <h1 class="white--text">{{users}}</h1>
        <p class="white--text">Registered Users</p>
      </v-list-item-content>

      
    </v-list-item>
<v-divider></v-divider>
    <v-card-actions>
      <v-btn text color="#013919">View Details
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
 </v-col>

        <v-col
            cols="12"
            sm="12"
            md="4">
              <v-card
    class="elevation-8 my-5"
    max-width="300">
    <v-list-item three-line class="asset-color">
      <v-list-item-content>
        <v-icon large class="white--text">mdi-dresser</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <h1 class="white--text">{{assets}}</h1>
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

    <v-row>
          <v-col
            cols="12"
            sm="12"
            md="6">
             <v-card
    class="elevation-8"
    max-width="400"
    color="#F0FDF5"
  >
    <v-card-text>
      <p class="added-user my-4">
      Recently Added User
      </p>
    </v-card-text>

    <v-list-item-content class="ml-7" v-for="user in Names" v-bind:key="user.title">
      <p class="name-color">{{user.name}}</p>
    </v-list-item-content>

  </v-card>
          </v-col>

          <v-col
            cols="12"
            sm="12"
            md="6" >
             <v-card
    class="elevation-8"
    max-width="400"
    color="#F0FDF5"
  >
   <v-card-text>
      <p class="added-user my-4">
      Statistics
      </p>
    </v-card-text>
   

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
      users: 54,
      assets: 6,
      Names: [
        {
          name: 'Zachariah Gweba K.'
        },
        {
          name: 'Akande Oremei C.'
        },
        {
          name: 'Oluwashina Ojo'
        }
      ]
    }
  }
}
</script>


<style scoped>
.card-color{
  background-color: #013919;
}
.asset-color{
  background-color: #FFB44C;
}
.branch-color{
  background-color: #FF8765;
}
.added-user{
  color: #013919;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
  text-align: center
}
.name-color{
  color: #606060;
}

</style>