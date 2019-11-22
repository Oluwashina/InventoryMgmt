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

           <v-col
            cols="12"
            sm="6"
            md="2">
            <v-btn class="mx-5 my-2">{{request.length}} Selected</v-btn>
           </v-col>

        </v-row>
    
   <v-tabs>
        <v-tab><v-icon>search</v-icon>
        </v-tab>
         <v-tab><v-icon>mdi-format-list-bulleted
        </v-icon></v-tab>
            <!-- first tab  -->
        <v-tab-item>
        <v-card color="white">
          <v-card-text>
            <p class="asset-color">
            Search asset to Assign
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
                <v-btn color="#1976D2" class="white--text" @click="assign(request)">Continue
                    <v-icon right>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-text>

        </v-card>
        </v-tab-item>
       
       <!-- second tab -->
       
             <v-tab-item>
        <v-card color="white">
          <v-card-text>
            <p class="asset-color">
            Select asset to assign
            </p>
          </v-card-text>

          <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6">
            
   <v-card
    class="elevation-8 mx-5"
    color="#ffffff"
    >
    <v-list-item three-line >
      <v-list-item-content>
          <v-card-text>
              <h3 class="request-color">Printer</h3>
              <h4 class="request-color" style="margin-top:20px;">Hp Laserjet Printer 250E-series</h4>
              <h4 class="quantity-color">Quantity:<v-text-field type="number" class="mt-n2"></v-text-field></h4>
          </v-card-text>
      </v-list-item-content>

      <v-list-item-content >
       <v-btn
         small
         absolute
         fab
         v-on="on"
         class="btn-adjust"
        v-on:click="select()"
              >
        <v-icon color="#013919">{{icon1}}</v-icon>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
   </v-card>

          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6">
             <v-card
    class="elevation-8 mx-5"
    color="#ffffff" 
    >
    <v-list-item three-line >
      <v-list-item-content>
          <v-card-text>
              <h3 class="request-color">Desktop</h3>
              <h4 class="request-color" style="margin-top:20px;">Dell Inspiron 15 7000 series</h4>
              <h4 class="quantity-color">Quantity:<v-text-field type="number" class="mt-n2"></v-text-field></h4>
          </v-card-text>
      </v-list-item-content>

      <v-list-item-content >
        <v-btn
         small
         absolute
         fab
         v-on="on"
         class="btn-adjust"
          v-on:click="select()"
              >
        <v-icon color="#5F5D5D">{{icon}}</v-icon>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
   </v-card>

          </v-col>
          </v-row>
           
           <!-- second row -->
            <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6">
            
   <v-card
    class="elevation-8 mx-5"
    color="#ffffff"
    >
    <v-list-item three-line >
      <v-list-item-content>
          <v-card-text>
              <h3 class="request-color">Laptop</h3>
              <h4 class="request-color" style="margin-top:20px;">Hp Laserjet Printer 250E-series</h4>
            <h4 class="quantity-color">Quantity:<v-text-field type="number" class="mt-n2"></v-text-field></h4>
          </v-card-text>
      </v-list-item-content>

      <v-list-item-content >
       <v-btn
         small
         absolute
         fab
         v-on="on"
         class="btn-adjust"
          v-on:click="select()"
              >
        <v-icon color="#5F5D5D">{{icon}}</v-icon>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
   </v-card>

          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6">
             <v-card
    class="elevation-8 mx-5"
    color="#ffffff" 
    >
    <v-list-item three-line >
      <v-list-item-content>
          <v-card-text>
              <h3 class="request-color">Desktop</h3>
              <h4 class="request-color" style="margin-top:20px;">Hp Laserjet Printer 250E-series</h4>
            <h4 class="quantity-color">Quantity:<v-text-field type="number" class="mt-n2"></v-text-field></h4>
          </v-card-text>
      </v-list-item-content>

      <v-list-item-content >
        <v-btn
         small
         absolute
         fab
         v-on="on"
         class="btn-adjust"
          v-on:click="select()"
              >
        <v-icon color="#5F5D5D">{{icon}}</v-icon>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
   </v-card>

          </v-col>
          </v-row>

          <!-- third row -->
           <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6">
            
   <v-card
    class="elevation-8 mx-5"
    color="#ffffff"
    >
    <v-list-item three-line >
      <v-list-item-content>
          <v-card-text>
              <h3 class="request-color">Laptop</h3>
              <h4 class="request-color" style="margin-top:20px;">Hp Laserjet Printer 250E-series</h4>
            <h4 class="quantity-color">Quantity:<v-text-field type="number" class="mt-n2"></v-text-field></h4>
          </v-card-text>
      </v-list-item-content>

      <v-list-item-content >
       <v-btn
         small
         absolute
         fab
         v-on="on"
         class="btn-adjust"
          v-on:click="select()"
              >
        <v-icon color="#5F5D5D">{{icon}}</v-icon>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
   </v-card>

          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="6">
             <v-card
    class="elevation-8 mx-5"
    color="#ffffff" 
    >
    <v-list-item three-line >
      <v-list-item-content>
          <v-card-text>
              <h3 class="request-color">Printer</h3>
              <h4 class="request-color" style="margin-top:20px;">Hp Laserjet Printer 250E-series</h4>
            <h4 class="quantity-color">Quantity:<v-text-field type="number" class="mt-n2"></v-text-field></h4>
          </v-card-text>
      </v-list-item-content>

      <v-list-item-content >
        <v-btn
         small
         absolute
         fab
         v-on="on"
         class="btn-adjust"
          v-on:click="select()"
              >
        <v-icon color="#5F5D5D">{{icon}}</v-icon>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
   </v-card>

          </v-col>
          </v-row>
          
           <v-card-text class="text-right">
                <v-btn color="#1976D2" class="white--text" router-link to="/confirmassign">Continue
                    <v-icon right>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-text>

        </v-card>
        </v-tab-item>
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
            icon: 'mdi-plus',
            count: 0,
            icon1: 'mdi-plus',
            request: [],
        }
    },
    methods: {
        select(){
            if(this.icon1 == "mdi-plus"){
                 this.icon1 = 'mdi-check'
                 this.count +=1
            }
            else{
                this.icon1 = 'mdi-plus'
                this.count -=1
            }
        },
        selectedcount(){
          console.log(this.request)
        },
        assign(id){
          console.log(id);
           this.$store.dispatch("selected",id)
           this.$router.push('/confirmassign')
        }
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
.header-color{
     color:#5F5D5D;
}
.quantity-color{
    color: #5F5D5D;
    margin-top: 10px;
}
.request-color{
     color: #5F5D5D;
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