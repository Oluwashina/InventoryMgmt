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
                 <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="Assets"
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
                        </v-toolbar>
                    </template>
                    <template v-slot:body.append>
                            <tr>
                            <td></td>
                            <td>
                        <h3 class="user-color">Total: </h3>
                            </td>
                            <td colspan="4"></td>
                            </tr>
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
                 
        }
    },
    methods:{

    },
    computed:{
        Assets(){
        return this.$store.state.assets
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