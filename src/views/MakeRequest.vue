<template>
    <div class="make">
         <UsersNav/>
    <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="10">
  <h2 class="subheading mx-5 my-3 header-color">Make Request</h2>
          </v-col>

           <v-col
            cols="12"
            sm="6"
            md="2">
            <v-btn class="mx-5 my-3">{{request.length}} Selected</v-btn>
           </v-col>

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
            Search Asset to request
            </p>
             <v-autocomplete placeholder="Search" v-model="request" :items="Assets" item-text="item_Name"
                        item-value="item_Name" clearable prepend-inner-icon="search" multiple chips
                        @change="selectedcount()" hide-selected="true" :return-object="true"
                        no-data-text="Please kindly select from the assets available"
                        >
                        <template v-slot:item="data">
                           <template v-if="typeof data.item !== 'object'">
                              <v-list-item-content v-text="data.item"></v-list-item-content>
                            </template>
                          <v-list-item-content>
                             <v-list-item-title v-html="data.item.item_Name"></v-list-item-title>
                             <v-list-item-subtitle v-html="data.item.item_Desc"></v-list-item-subtitle>
                           </v-list-item-content>
                        </template>
             </v-autocomplete>

          </v-card-text>

           <v-card-text class="text-right">
             
                <v-btn color="#1976D2" class="white--text"  v-on:click="cont()">Continue
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
import UsersNav from '../components/UsersNav'
export default {
     components:{
        UsersNav
    },
    data(){
        return{
            icon: 'mdi-plus',
            request: [],
            checkbox: false,
            select: []
        }
    },
    methods:{
        select(id, items){
          alert(id);
          console.log(items)
          for(var j in items){
            if(id === items[j].item_id){
              // this.icon = 'mdi-check'
              this.request++
              console.log(id);
            }

          }    
        },
        check(id){
          alert(id);
          this.checkbox = false

          // console.log(id)
          // alert(id)
          // this.checkbox = false
          // this.select.push(id);
          // console.log(this.select)
        },
        selectedcount(){
          console.log(this.request)
        },
        cont(){
          // alert(data);
          console.log(this.request)
          this.$store.dispatch("selected", this.request)
          this.$router.push('/selectedasset')
    },
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
.header-color{
  color: #5F5D5D;
}
.make{
    background-color: #CAD8E6;
    height: 100%;
    background-size: cover;
}
</style>