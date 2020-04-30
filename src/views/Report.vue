<template>
  <div class="admin">
   <StoreNav/>
   <v-container>
     <h2 class="subheading mx-5 my-2 header-color">REPORTS</h2>
     
            <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">
              <v-card class="elevation-10"  color="white">
                   <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <h3 class="mx-5">All Assets</h3>
                  </v-col>
                   </v-row>
                 <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="Assets"
                    :items-per-page="10"
                    :single-select="singleSelect"
                    item-key="item_Name"
                    :search="search"
                    class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Kayar</v-toolbar-title>
                            <v-divider
                            class="mx-4"
                            inset
                            vertical
                            ></v-divider>
                            <v-spacer></v-spacer>
                  <h3 class="header-color" v-for="assets in AssetsCount" :key="assets.id">Total: {{assets.NumberOfAssets}}</h3>
                        </v-toolbar>
                    </template>
                 </v-data-table>
                 <v-card-text class="text-right">
                           <report
                              :data = "Assets"
                        name    = "Assets.csv">
                      <v-btn small color="#1976D2" class="white--text" >
                           <v-icon small left>mdi-download</v-icon>
                                Download
                          </v-btn>
                        </report>
         <!-- <a href="http://192.168.1.113:3000/Assets?typeMedia=CSV" download>Download Template</a> -->
              </v-card-text>
              </v-card>
          </v-col>
            </v-row>
            
            <!-- second row -->
              <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">
              <v-card class="elevation-10"  color="white">
                   <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6">
                    <h3 class="mx-5">Assigned Assets</h3>
                  </v-col>
                   </v-row>
                 <v-data-table
                    v-model="selected"
                    :headers="headers1"
                    :items="Assigned"
                    :items-per-page="5"
                    :single-select="singleSelect"
                    item-key="Item_Name"
                    :search="search"
                    class="elevation-1"
                >
                    <template v-slot:top>
                        <v-toolbar flat color="white">
                            <v-toolbar-title>Kayar</v-toolbar-title>
                            <v-divider
                            class="mx-4"
                            inset
                            vertical
                            ></v-divider>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                    </template>
                 </v-data-table>
                 <v-card-text class="text-right">
                           <report
                              :data = "Assigned"
                        name    = "Assigned.csv">
                      <v-btn small color="#1976D2" class="white--text" >
                           <v-icon small left>mdi-download</v-icon>
                                Download
                          </v-btn>
                        </report>
              </v-card-text>
              </v-card>
          </v-col>
            </v-row>   

   </v-container>
  </div>
    
</template>



<script>
import StoreNav from '../components/StoreNav'
import JsonCSV from 'vue-json-csv';
export default {
    components:{
        StoreNav
    },
    data(){
        return{
             headers: [
                 {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'item_Name',
                  },
                    { text: 'Description', value: 'item_Desc' },
                    { text: 'Quantity', value: 'Quantity' },
                ], 
                headers1: [
                 {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'Item_Name',
                  },
                    { text: 'Description', value: 'Item_Desc' },
                    { text: 'Quantity', value: 'quantity' },
                ],            
        }
    },
    methods:{
      download(){
        this.$store.dispatch("DownloadAssets")
        .then((success)=>{
          console.log(success)
        })
        .catch((error)=>{
          console.log(error)
        });
      }
    },
    computed:{
        Assets(){
        return this.$store.state.assets
      },
       Assigned(){
            return this.$store.state.viewassignedassets
        },
      AssetsCount(){
        return this.$store.state.countasset
      },
    },
    created(){
     this.$store.dispatch("ViewAssets")
      .then((success)=>{
        console.log(success);
      })
      .catch((error)=>{
        console.log(error);
      });
      this.$store.dispatch("ViewAssignedAssets")
      .then((success)=>{
        console.log(success);
      })
      .catch((error)=>{
        console.log(error);
      });
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
.admin{
  background-color: #CAD8E6;
  height: 100%;
  background-size: cover;
}
.header-color{
     color: #5F5D5D;
}
</style>