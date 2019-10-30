<template>
<div class="admin">
   <StoreNav/>
   <v-container>
  <h2 class="subheading mx-5 my-5 header-color">DASHBOARD</h2>

            <v-row>
          <v-col
            cols="12"
            sm="12"
            md="4">

   <v-card
    class="elevation-8 my-5"
    color="#F0FDF5"
    >
    <v-list-item three-line >
      <v-list-item-content>
        <v-icon large color="#FD2424">mdi-cart</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <p class="">Total Assets</p>
        <h1 class="">{{assets}}</h1>
      </v-list-item-content>

      
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn text color="#013919" router-link to="/assets">View Assets
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
    color="#F0FDF5"
    >
    <v-list-item three-line >
      <v-list-item-content>
        <v-icon large color="#0DC55C">mdi-cart</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <p class="">Total In-stock Assets</p>
        <h1 class="">{{instock}}</h1>
      </v-list-item-content>

      
    </v-list-item>
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
    color="#F0FDF5"
    >
    <v-list-item three-line >
      <v-list-item-content>
        <v-icon large color="rgba(25, 5, 255, 0.87)" >mdi-cart-arrow-up</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <p class="">Total Assigned Assets</p>
        <h1 class="">{{assign}}</h1>
      </v-list-item-content>

    
    </v-list-item>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn text color="#013919">View Assigned assets
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
    color="#F0FDF5"
    >
    <v-list-item three-line >
      <v-list-item-content>
        <v-icon large color="#F4BB2D" >mdi-receipt</v-icon>
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
    }
}
</script>


<style scoped>
.header-color{
     color:#013919;
}

</style>