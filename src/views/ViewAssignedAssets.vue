<template>
 <div class="viewassets">
        <StoreNav/>
        <v-container>
        <h2 class="subheading mx-5 my-2 header-color">ASSIGNED ASSETS</h2>
         <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>Successfully unassigned this asset..</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
         <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">
             <v-card class="elevation-8" color="white">
                 <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="Assets"
                    :items-per-page="5"
                    :single-select="singleSelect"
                    :search="search"
                    class="elevation-1"
                    >

           <template v-slot:item.action="{ item }">
                <v-btn small color="#1976D2" text class="" v-on:click="Deassign(item.id,item.Item_Name,item.assigned_to)">
                  Unassign    
                </v-btn>
            </template>

                 </v-data-table>

             </v-card>
          </v-col>
         </v-row>

        </v-container>
 </div>
    
</template>



<script>
import StoreNav from '../components/StoreNav'
export default {
    components: {
        StoreNav
     },
     data(){
         return{
             headers: [
                {
                text: 'Name',
                align: 'left',
                sortable: false,
                value: 'Item_Name',
                },
                { text: 'Description', value: 'Item_Desc' },
                { text: 'Quantity', value: 'quantity' },
                { text: 'Assigned To:', value: 'assigned_to' },
                { text: '', value: 'action', sortable: false },
                ],
                snackbar: false,
         }
     },
     methods:{
       Deassign(item,name,user){
         this.$store.dispatch("Deassign",{
           "event_id": item,
           "staffUsernameToBeUnassigned": user,
           "storeKeeperUsername": this.$store.state.username[0].UserName,
           "item_Name": name
         })
         .then((success)=>{
           console.log(success)
           this.snackbar= true
           this.$router.push('storekeeper')
         })
         .catch((error)=>{
           console.log(error);
         })
       }

     },
     computed:{
        Assets(){
            return this.$store.state.viewassignedassets
        },

     },
     created(){
        this.$store.dispatch("ViewAssignedAssets")
      .then((success)=>{
        console.log(success);
      })
      .catch((error)=>{
        console.log(error);
      });

     }
}
</script>



<style scoped>
.viewassets{
   background-color: #CAD8E6;
  background-size: cover;
  height: 100%;
}
.header-color{
     color:#5F5D5D;
}
</style>
