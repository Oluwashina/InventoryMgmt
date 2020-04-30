<template>
 <div class="admin">
   <StoreNav/>
   <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="10">

     <h2 class="subheading mx-5 my-2 header-color">ASSIGN ASSET</h2>
          </v-col>

          <!-- <v-col
            cols="12"
            sm="6"
            md="2">
            <v-btn class="mx-5 my-2">{{request.length}} Selected</v-btn>
           </v-col> -->

        </v-row>

         <v-tabs>
        <v-tab><v-icon>search</v-icon>
        </v-tab>
         <!-- <v-tab><v-icon>mdi-format-list-bulleted
        </v-icon></v-tab> -->
            <!-- first tab  -->
        <v-tab-item>
        <v-card color="white">
          <v-card-text>
            <p class="asset-color">
            Search User
            </p>
             <v-autocomplete placeholder="Search" v-model="request" :items="Users" item-text="UserName"
                        item-value="UserName" clearable prepend-inner-icon="search" chips
                        @change="selectedcount()" hide-selected="true" :return-object="false"
                        no-data-text="Please kindly select from the users available"
                        >
             </v-autocomplete>
          </v-card-text>

           <v-card-text class="text-right">
                <v-btn color="#1976D2" class="white--text" @click="confirm(request)">Continue
                    <v-icon right>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-text>

        </v-card>
        </v-tab-item>

        <!-- second tab -->

         </v-tabs>
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
            count: 0,
            icon: 'mdi-plus',
            icon1: 'mdi-plus',
            request: ''

        }
    },
    methods:{
      selectedcount(){
        console.log(this.request)
      },
      select(){
   
      },
      confirm(name){
         this.$store.dispatch("selectedUser",name)
         this.$router.push(`/confirmassign/${name}`)
      }
    },
    computed:{
      Users(){
        return this.$store.state.allusers
      },
    },
    created(){
      this.$store.dispatch('Users')
       .then((success)=>{
            console.log(success);
           })
          .catch((error)=>{
          console.log(error);
      })
    }
}
</script>



<style scoped>
.header-color{
     color: #5F5D5D;
}
.quantity-color{
    color: #013919;
    margin-top: 10px;
}
.request-color{
     color:#1976D2;
}
.asset-color{
    color: #5F5D5D;
    font-size: 17px;
}
.btn-adjust{
    margin-left: 100px;
    border: 2px solid #5F5D5D;
    color: #ffffff;
    background: none;
}
.admin{
  background-color: #CAD8E6;
  height: 100%;
  background-size: cover;
}
</style>