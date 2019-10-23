<template>
<div class="dashboard">
    <AdminNav/>
    <h1 class="subheading mx-5 my-5">Users</h1>
    <v-container class="my-2">
    <v-row>
          <v-col
            cols="12"
            sm="6"
            md="8">
        <h4>Total: {{total}}</h4>

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
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
     </v-col>
</v-row>

<v-card class="pa-3 mt-2" v-for="project in projects" v-bind:key="project.title">
        <v-layout row wrap class="pa-3">
          <v-flex xs12 md6>
            <div class="caption grey--text">
              Name</div>
              <div>{{project.name}}</div>
          </v-flex>
          <v-flex xs6 sm6 md4>
            <div class="caption grey--text">Role(s)</div>
            <div>{{project.role}}</div>
          </v-flex>
          <v-flex xs6 sm6 md2>
            <div class="caption grey--text">Status</div>
            <div>{{project.status}}</div>
          </v-flex>
        </v-layout>
      </v-card>

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
import axios from 'axios'
export default {
     components: {
        AdminNav
     },
    data(){
      return{
        projects: [
          {
            name: 'Olubunmi Praise',
            role: 'User',
            status: 'Active'
          },
          {
            name: 'Akande Oremei',
            role: 'Store Keeper',
            status: 'Inactive'
          },
          {
            name: 'Folalu Timothy',
            role: 'Admin',
            status: 'Active'
          },
          {
            name: 'Mbeh Felicity',
            role: 'User',
            status: 'InActive'
          }
          ],
          items: [
            {
              title : 'StoreKeeper',
            },
            {
              title : 'User',
            },
            {
              title : 'Admin',
            },
            {
              title: 'Active Users'
            },
            {
              title: 'Inactive Users'
            }
            ],
            total: 54,
            switch1: true,
             page: 1,      
            }
        },
        methods:{
          
        }
    
}
</script>

<style scoped>
.filterText{
    color: #5F5D5D;
}

</style>