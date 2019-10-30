<template>
    <div class="admin">
   <StoreNav/>
   <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="6"
            md="10">
  <h2 class="subheading mx-5 my-5 header-color">ASSIGN ASSET</h2>
          </v-col>

           <v-col
            cols="12"
            sm="6"
            md="2">
            <v-btn class="mx-5 my-5">{{count}} Selected</v-btn>
           </v-col>

        </v-row>
    
   <v-tabs>
        <v-tab><v-icon>search</v-icon>
        </v-tab>
         <v-tab><v-icon>mdi-format-list-bulleted
        </v-icon></v-tab>
            <!-- first tab  -->
        <v-tab-item>
        <v-card color="#E1FFEE">
          <v-card-text>
            <p class="asset-color">
            Search asset to Assign
            </p>
             <v-text-field placeholder="Dell, Hp printer, Screw Driver" prepend-inner-icon="mdi-magnify"></v-text-field>
          </v-card-text>

           <v-card-text class="text-right">
                <v-btn color="#013919" class="white--text" >Continue
                    <v-icon right>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-text>

        </v-card>
        </v-tab-item>
       
       <!-- second tab -->
       
             <v-tab-item>
        <v-card color="#E1FFEE">
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
        <v-icon color="#013919">{{icon}}</v-icon>
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
        <v-icon color="#013919">{{icon}}</v-icon>
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
        <v-icon color="#013919">{{icon}}</v-icon>
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
        <v-icon color="#013919">{{icon}}</v-icon>
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
        <v-icon color="#013919">{{icon}}</v-icon>
        </v-btn>
      </v-list-item-content>
    </v-list-item>
   </v-card>

          </v-col>
          </v-row>
          
           <v-card-text class="text-right">
                <v-btn color="#013919" class="white--text">Continue
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
            icon1: 'mdi-plus'
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
        }
    }
}
</script>


<style scoped>
.header-color{
     color:#013919;
}
.quantity-color{
    color: #013919;
    margin-top: 10px;
}
.request-color{
     color:#013919;
}
.asset-color{
    color: #5F5D5D;
    font-size: 17px;
}
.btn-adjust{
    margin-left: 100px;
    border: 2px solid #013919;
    color: #ffffff;
    background: none;
}

</style>