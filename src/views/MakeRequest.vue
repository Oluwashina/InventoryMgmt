<template>
    <div class="make">
         <UsersNav/>
    <v-container>
        <h2 class="subheading mx-5 my-2 request-color">Make Request</h2>

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
            Search Asset to request
            </p>
             <v-text-field placeholder="Dell, Hp printer, Screw Driver" prepend-inner-icon="mdi-magnify"></v-text-field>
          </v-card-text>

           <v-card-text class="text-right">
                <v-btn color="#013919" class="white--text"  router-link to="/selectedasset">Continue
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
            Select Asset to request
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
              <h4 class="request-color" style="margin-top:20px;">Dell Inspiron 15 7000 series</h4>
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
                <v-btn color="#013919" class="white--text" router-link to="/selectedasset">Continue
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
import UsersNav from '../components/UsersNav'
export default {
     components:{
        UsersNav
    },
    data(){
        return{
            icon: 'mdi-plus'
        }
    },
    methods:{
        select(){
            if(this.icon == "mdi-plus"){
                 this.icon = 'mdi-check'
            }
            else{
                this.icon = 'mdi-plus'
            }
        }

    }
    
}
</script>


<style scoped>
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