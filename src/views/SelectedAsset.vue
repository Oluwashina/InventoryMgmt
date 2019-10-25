<template>
 <div class="make">
         <UsersNav/>
    <v-container>
        <h2 class="subheading mx-5 my-2 request-color">Make Request</h2>

    <v-card color="#E1FFEE">
          <v-card-text>
            <p class="asset-color">
           Selected Assets
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
              <h3 class="request-color">Laptop</h3>
              <h4 class="request-color" style="margin-top:20px;">Apple Macbook airPro 2017</h4>
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
          <v-card-text>
              <p class="asset-color">Comment</p>
               </v-card-text>
               <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12" >
    
         <v-textarea
          solo
          name="input-7-4"
          label="Write a comment"
          class="mx-5 my-n8"
          auto-grow
        ></v-textarea>

          </v-col>
               </v-row>

               <v-card-text class="text-center">
                <v-btn color="#013919" class="white--text">Make Request
                </v-btn>
              </v-card-text>
         
    </v-card>


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
             icon: 'mdi-check'

        }
    }
}
</script>


<style scoped>
.request-color{
     color:#013919;
}
.asset-color{
    color: #013919;
    font-size: 18px;
    font-weight: bold;
}
.btn-adjust{
    margin-left: 100px;
    border: 2px solid #013919;
    color: #ffffff;
    background: none;
}
</style>