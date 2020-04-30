<template>
    <div class="admin">
   <StoreNav/>
   <v-container>
     <h2 class="subheading mx-5 my-2 header-color">ASSIGN ASSET</h2>
      <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>You've successfully assigned the asset to {{Username}}</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
        </v-snackbar>
        <v-snackbar v-model="snackbar1" :timeout="4000" top color="success">
                  <span>Lot has been selected, you can now assign</span>
                     <v-btn text color="white" @click="snackbar1 = false">Close</v-btn>
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
                    <h3 class="mx-5 my-3 header-color">To: {{Username}}</h3>
                </v-col>
                 </v-row>
                 <!-- first row -->
                 <v-row>
                 <v-col
                    cols="12"
                    sm="12"
                    md="12">
                 </v-col>
                 <h4 class="mx-8 header-color">Selected Assets</h4>
              </v-row>
              <!-- second row -->
               <v-row>
                     <v-col
                        cols="12"
                        sm="8"
                        md="4" v-for="request in notify" :key="request.id">
                        
                        <v-card class="elevation-2 mx-5 mb-5">

                            <v-card-text>
                                <h3 style="color:#1976D2;">{{request.item_Name}}</h3>
                                <h5 style="color:#1976D2; margin-top:10px">{{request.item_Desc}}</h5>
                                <p style="margin-top:10px; color:#5F5D5D;">Quantity: {{request.Quantity}}</p>
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
                     <!-- fourth row -->
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
                            <v-btn text small v-bind:class="{ 'active': current === view.id }" @click="select(view.id, view.quantity, view.item_id)">Select</v-btn>
                            </div>
                            </v-card-text>
                          </v-card>

                     </v-col>
               </v-row>
                      <!-- fifth row -->
                    <div class="text-center">
                        <v-btn color="#1976D2" :loading="loading" class="white--text ma-2 mt-6 mb-6" v-on:click="Assign()">
                             <v-icon small left>mdi-check</v-icon>
                             Assign
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
          loading: false,
          current: null,
          snackbar1: false
        }
    },
    methods:{
        view(id){
            this.$store.dispatch("ViewAssetsAssignedById", id)
            .then((success)=>{
                console.log(success);
             })
            .catch((error)=>{
           console.log(error);
         })
        },
        select(event_id,assign_quantity,itemId){
            this.assets.push({event_id,assign_quantity,itemId})
            console.log(this.assets)
            this.current = event_id
            this.snackbar1 = true
        },
        Assign(){
            this.loading = true
             this.$store.dispatch("AssignAsset",{
                "requestStatus": "Nill Request",
                "location": this.$store.state.assetsassigned[0].location,
                "staff_username": this.$store.state.selectedUser,
                "storeKeeperUsername": this.$store.state.username[0].UserName,
                "assets": this.assets
        })
        .then((success)=>{
          console.log(success);
          this.loading = false
          this.snackbar = true
        })
        .catch((error)=>{
          console.log(error);
        })
     }
    },
    computed:{
        notify(){
            return this.$store.state.select
        },
        viewAssets(){
            return this.$store.state.assetsassigned
        },
        Username(){
            return this.$store.state.selectedUser
        }
    },
}
</script>


<style scoped>
.admin{
  background-color: #CAD8E6;
  height: 100%;
  background-size: cover;
}
.header-color{
     color: #5F5D5D;
}
.active{
  color: white;
  background: #1976D2;
}
</style>