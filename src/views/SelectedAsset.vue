<template>
 <div class="make">
         <UsersNav/>
    <v-container>
        <h2 class="subheading mx-5 my-2 request-color">Make Request</h2>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>Request successfully made.</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>

    <v-card color="white">
          <v-card-text>
            <p class="my-4" style="color: #5F5D5D; font-size: 18px; font-weight: bold;">
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
              <h3 class="" style="color:#1976D2;">{{asset.item_Name}}</h3>
              <h4 class="" style="margin-top:15px; color: #1976D2;">{{asset.item_Desc}}</h4>
              <!-- <h3 class="">Quantity: {{asset.Quantity}}</h3> -->
              <v-text-field
                        v-model="asset.Quantity"
                        type="text" outlined dense
                        label="Quantity" class="mt-5"
                         color="#5F5D5D" 
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
                <v-btn color="#1976D2" :loading="loading" class="white--text" v-on:click="Request(Selected)">Make Request
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
             quantity: '',
             snackbar: false,
             loading: false

        }
    },
    methods:{
      Request(qty){
        this.loading = true
        console.log(qty)
        const items = []
        for(var j in qty){
          const itemId = qty[j].item_id
          const quantity = qty[j].Quantity
          console.log(itemId);
          console.log(quantity);
          items.push({itemId,quantity})
          console.log(items);
        }
        this.$store.dispatch("MakeRequest",{
          "staffUsername": this.$store.state.username[0].UserName,
          "comment": this.comment,
          "items": items
        })
        .then((success)=>{
          console.log(success);
          this.loading = false
          this.snackbar = true;
          this.$router.push('/users')
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
.make{
    background-color: #CAD8E6;
    height: 100%;
    background-size: cover;
}
</style>