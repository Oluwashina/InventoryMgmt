<template>
 <div class="make">
         <UsersNav/>
    <v-container>
        <h2 class="subheading mx-5 my-2 request-color">Make Request</h2>

    <v-card color="#E1FFEE">
          <v-card-text>
            <p class="" style="color: #5F5D5D; font-size: 18px; font-weight: bold;">
           Selected Assets
            </p>
          </v-card-text>

          <v-row>
          <v-col
            cols="12"
            sm="6"
            md="6" v-for="asset in Selected" :key="asset.id">
            
   <v-card
    class="elevation-9 mx-5"
    color="#ffffff"
    >
    <v-list-item three-line >
      <v-list-item-content>
          <v-card-text>
              <h3 class="" style="color: #5F5D5D;">{{asset.item_Name}}</h3>
              <h5 class="" style="margin-top:15px; color: #5F5D5D;">{{asset.item_Desc}}</h5>
              <!-- <h3 class="">Quantity: {{asset.Quantity}}</h3> -->
              <v-text-field
                        v-model="quantity"
                        type="text" 
                            ></v-text-field>

          </v-card-text>
      </v-list-item-content>

      <v-list-item-content >
       <v-btn
         small
         absolute
         fab
         v-on="on"
         class="btn-adjust"
              >
        <v-icon color="#5F5D5D">{{icon}}</v-icon>
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
          v-model="comment"
          auto-grow
        ></v-textarea>

          </v-col>
               </v-row>

               <v-card-text class="text-center">
                <v-btn color="#013919" class="white--text" v-on:click="Request()">Make Request
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
             icon: 'mdi-check',
             comment: '',
             quantity: this.$store.state.select[0].Quantity

        }
    },
    methods:{
      Request(){
        alert(this.$store.state.select[0].item_id)
        this.$store.dispatch("MakeRequest",{
          "staffUsername": this.$store.state.username[0].UserName,
          "comment": this.comment,
          "items": [
            {
              "quantity": this.quantity,
              "itemId": this.$store.state.select[0].item_id
            }
          ]
        })
        .then((success)=>{
          console.log(success);
        })
        .catch((error)=>{
          console.log(error);
        })
      }

    },
    computed:{
      Selected(){
        return this.$store.state.select
      }
    }
}
</script>


<style scoped>
.request-color{
     color:#5F5D5D;
}
.asset-color{
    color: #5F5D5D;
    font-size: 18px;
    font-weight: bold;
}
.btn-adjust{
    margin-left: 100px;
    border: 2px solid #5F5D5D;
    color: #ffffff;
    background: none;
}
</style>