<template>
<div class="admin">
   <StoreNav/>
   <v-container>
  <h2 class="subheading mx-3 my-2 header-color">DASHBOARD</h2>

            <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">

              <v-card class="elevation-10"  color="white">
            <v-row class="mx-auto">
              <!-- first column -->
          <v-col
            cols="12"
            sm="12"
            md="4">
            <v-card
              class="elevation-8 my-1"  color="white"
              >
              <v-list-item three-line style="background: #FFB44C;">
                <v-list-item-content>
                  <v-icon color="white" class="icon-size">mdi-cart</v-icon>
                </v-list-item-content>

                <v-list-item-content >
                  <p class="white--text">Total Assets</p>
                  <h1 class="white--text" v-for="assets in AssetsCount" :key="assets.id">{{assets.NumberOfAssets}}</h1>
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
          <!-- second column -->
            <v-col
            cols="12"
            sm="12"
            md="4">
                      <v-card
              class="elevation-8 my-1"
              >
              <v-list-item three-line style="background: #1976D2;">
                <v-list-item-content>
                  <v-icon class="icon-size" color="white" >mdi-cart-arrow-up</v-icon>
                </v-list-item-content>

                <v-list-item-content >
                  <p class="white--text">Total Assigned Assets</p>
                  <h1 class="white--text" v-for="assign in AssignedCount" :key="assign.id">{{assign.NumberOfAssignedAssets}}</h1>
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
           <!-- third column -->
             <v-col
            cols="12"
            sm="12"
            md="4">
             <v-card
              class="elevation-8 my-1"
              >
              <v-list-item three-line style="background:#5DBD86">
                <v-list-item-content>
                  <v-icon class="icon-size" >mdi-application-import</v-icon>
                </v-list-item-content>

                <v-list-item-content >
                  <p class="white--text">Total Request</p>
                  <h1 class="white--text" v-for="total in TotalRequest" :key="total.id">{{total.NumberOfRequest}}</h1>
                </v-list-item-content>

              
              </v-list-item>
              <v-divider></v-divider>
              <v-card-actions>
                <v-btn text color="#1976D2" router-link to="/notifications">View Details
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
              class="elevation-8 mx-4"
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
            invoice: 8,
            request: 3
        }
    },
    computed:{
      AssetsCount(){
        return this.$store.state.countasset
      },
      AssignedCount(){
        return this.$store.state.countassigned
      },
      TotalRequest(){
        return this.$store.state.totalrequest
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
     this.$store.dispatch('countAssigned')
    .then((success)=>{
      console.log(success)
    })
    .catch((error)=>{
      console.log(error);
    })
      this.$store.dispatch('TotalRequestCount')
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
  font-size: 50px;
  color: white;
}
.admin{
  background-color: #CAD8E6;
  height: 100%;
  background-size: cover;
}
</style>