<template>
<div class="admin">
   <StoreNav/>
   <v-container>
  <h2 class="subheading mx-3 my-2 header-color">DASHBOARD</h2>

            <v-row>
          <v-col
            cols="12"
            sm="12"
            md="4">

   <v-card
    class="elevation-8 my-1" 
    >
    <v-list-item three-line class="mb-3" >
      <v-list-item-content>
        <v-icon color="#FD2424" class="icon-size">mdi-cart</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <p class="">Total Assets</p>
        <h1 class="" v-for="assets in AssetsCount" :key="assets.id">{{assets.NumberOfAssets}}</h1>
      </v-list-item-content>

      
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn text color="#1976D2" router-link to="/assets">View Assets
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
    class="elevation-8 my-1"
    >
    <v-list-item three-line class="mb-1">
      <v-list-item-content>
        <v-icon class="icon-size" color="rgba(25, 5, 255, 0.87)" >mdi-cart-arrow-up</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <p class="">Total Assigned Assets</p>
        <h1 class="">{{assign}}</h1>
      </v-list-item-content>

    
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn text color="#1976D2">View Assigned assets
        <v-icon right>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
   </v-card>
  
          </v-col>
            </v-row>
            <!-- second row -->
            
            <v-row>
          <v-col
            cols="12"
            sm="12"
            md="4">
     <v-card
    class="elevation-8 my-5"
    >
    <v-list-item three-line >
      <v-list-item-content>
        <v-icon class="icon-size" color="#F4BB2D" >mdi-receipt</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <p class="">Total Invoices</p>
        <h1 class="">{{invoice}}</h1>
      </v-list-item-content>

      
    </v-list-item>
   </v-card>
          </v-col>
        </v-row>

    </v-container>
</div>   
</template>

<script>
import StoreNav from '../components/StoreNav'
export default {
    components:{
        StoreNav
    },
    data(){
        return{
            assets: 1508,
            instock: 1008,
            assign: 500,
            invoice: 8
        }
    },
    computed:{
      AssetsCount(){
        return this.$store.state.countasset
      }
    },
    created(){
      this.$store.dispatch('countAssets')
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
.header-color{
     color:#5F5D5D;
}
.icon-size{
  font-size: 60px;
}
.admin{
  background-color: #CAD8E6;
  height: 100%;
  background-size: cover;
}
</style>