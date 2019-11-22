<template>
 <div class="notify">
         <StoreNav/>
   <v-container>
  <h2 class="subheading mx-3 my-2 header-color">REQUEST</h2>
   <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>You've successfully assigned the asset.</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
     <v-snackbar v-model="snackbar1" :timeout="4000" top color="success">
        <span>Request not granted...</span>
            <v-btn text color="white" @click="snackbar = false">Close</v-btn>
     </v-snackbar>

     <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">
             <v-card class="elevation-1" color="white">
                <v-row>
                 <v-col
                    cols="12"
                    sm="12"
                    md="12">
                    <h3 class="mx-5 my-3 header-color">{{notify[0].comment}}</h3>
                </v-col>
                 </v-row>
                 <!-- second row -->
                 <v-row>
                 <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <h3 class="mx-5 mt-n3 header-color">{{notify[0].requested_by}}</h3>
                    <p class="mx-5 header-color">{{notify[0].req_date}}</p>
                 </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                        <h4 class="header-color">STATUS: {{notify[0].status}} </h4>
                  </v-col>
              </v-row>
              <!-- third -->
              <v-row>
                 <v-col
                    cols="12"
                    sm="12"
                    md="12">
                 </v-col>
                 <h4 class="mx-8 header-color">Requested Assets</h4>
              </v-row>
                 <!-- fourth row -->
                   <v-row>
                     <v-col
                        cols="12"
                        sm="8"
                        md="4" v-for="request in notify" :key="request.id">
                        
                        <v-card class="elevation-2 mx-5 mb-5">

                            <v-card-text>
                                <h3 style="color:#1976D2;">{{request.Item_Name}}</h3>
                                <h5 style="color:#1976D2; margin-top:10px">{{request.Item_Desc}}</h5>
                                <p style="margin-top:10px; color:#5F5D5D;">Quantity: {{request.qty_requested}}</p>
                            </v-card-text>
                             <v-divider></v-divider>
                            <v-card-actions>
                                <v-btn text color="#1976D2" @click="view(request.item_id)">View Available assets
                                <v-icon right>mdi-chevron-right</v-icon>
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                        
                         </v-col>
                   </v-row>
                     <v-divider></v-divider>
              <!-- available row assigner -->
               <v-row>
                     <v-col
                        cols="12"
                        sm="8"
                        md="4" v-for="view in viewAssets" :key="view.id">
                          <v-card class="elevation-2 mx-5 mt-5 mb-5">

                            <v-card-text>
                                <h3 style="color:#1976D2;">{{view.Item_Name}}</h3>
                                <h5 style="color:#1976D2; margin-top:10px">{{view.Item_Desc}}</h5>
                                <p style="margin-top:10px; color:#5F5D5D;">Quantity: {{view.quantity}}</p>
                                 <v-text-field
                                    v-model="view.quantity"
                                    type="text" outlined dense
                                    label="Assign Quantity" class="mt-5"
                                    color="#5F5D5D" 
                            ></v-text-field>
                            <div class="text-right">
                            <v-btn small  @click="select(view.id, view.quantity, view.item_id)">Select</v-btn>
                            </div>
                            </v-card-text>
                          </v-card>

                     </v-col>
               </v-row>
                   <!-- fourth row -->
                    <div class="mx-5">
                        <v-btn small color="#1976D2" class="white--text ma-2 mb-12" v-on:click="Assign()">
                             <v-icon small left>mdi-check</v-icon>
                             Assign
                        </v-btn>
                        <v-btn small color="#1976D2" class="white--text ma-2 mb-12" v-on:click="NotGranted()">
                             <v-icon small left>mdi-close</v-icon>
                             Not Granted
                        </v-btn>
                    </div>


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
            assets: [],
             snackbar: false,
             snackbar1: false
        }
    },
    computed:{
        notify(){
            return this.$store.state.viewrequest
        },
        viewAssets(){
            return this.$store.state.assetsassigned
        }
    },
    methods:{
        view(id){
            alert(id);
            this.$store.dispatch("ViewAssetsAssignedById", id)
            .then((success)=>{
                console.log(success);
             })
            .catch((error)=>{
           console.log(error);
         })
        },
        select(event_id,assign_quantity,itemId){
            alert(event_id)
            alert(assign_quantity)
            alert(itemId)
            this.assets.push({event_id,assign_quantity,itemId})
            console.log(this.assets)

        },
        Assign(){
            alert(this.$store.state.viewrequest[0].request_id)
            alert(this.$store.state.viewrequest[0].requested_by)
            alert(this.$store.state.username[0].UserName)
            alert(this.$store.state.assetsassigned[0].location)
             this.$store.dispatch("AssignAsset",{
                "requestStatus": "ACCEPTED",
                "requestId": this.$store.state.viewrequest[0].request_id,
                "location": this.$store.state.assetsassigned[0].location,
                "staff_username": this.$store.state.viewrequest[0].requested_by,
                "storeKeeperUsername": this.$store.state.username[0].UserName,
                "assets": this.assets
        })
        .then((success)=>{
          console.log(success);
          this.snackbar = true
        })
        .catch((error)=>{
          console.log(error);
        })
      },
      NotGranted(){
          alert("do you really want to reject request???")
           this.$store.dispatch("AssignAsset",{
                "requestStatus": "NOT GRANTED",
                "requestId": this.$store.state.viewrequest[0].request_id,
                "staff_username": this.$store.state.viewrequest[0].requested_by,
                "storeKeeperUsername": this.$store.state.username[0].UserName,
                "assets": this.assets
           })
           .then((success)=>{
               console.log(success)
               this.snackbar1 = true
           })
           .catch((error)=>{
               console.log(error);
           })
      }
    }
}
</script>


<style scoped>
.header-color{
     color:#5F5D5D;
}
.notify{
    background-color: #CAD8E6;
    height: 100%;
    background-size: cover;
}
.active{
    color: green;
    font-weight: bold;
    transition: 0.2s ease-in;
    transform: scale(1.05);
}
</style>