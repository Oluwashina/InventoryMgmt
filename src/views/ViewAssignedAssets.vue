<template>
 <div class="viewassets">
        <StoreNav/>
        <v-container>
        <h2 class="subheading mx-5 my-2 header-color">ASSIGNED ASSETS</h2>
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
                ],
         }
     },
     methods:{

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
