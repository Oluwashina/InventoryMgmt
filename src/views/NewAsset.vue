<template>
<div class="viewassets">
        <StoreNav/>
        <v-container>
        <h2 class="subheading mx-5 my-3 header-color">NEW ASSET</h2>
        
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>Assets successfully added..</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
         <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">
            <v-card class="elevation-10"  color="white">
                 <v-card-text>
                <v-form>
                     <v-row>
                        <v-col
                        cols="12"
                         sm="6"
                            md="6">
                        <v-combobox
                        label="Name"
                        v-model="name"
                        :items="Assets"
                        solo chips clearable
                        item-text="item_Name"
                        item-value="item_Name"
                        :return-object = "false"
                       
                            ></v-combobox>
                        </v-col>
                         <v-col
                        cols="12"
                         sm="6"
                            md="6">
                              <v-text-field
                        label="Location"
                        v-model="location"
                        type="text" 
                        solo
                            ></v-text-field>
                         </v-col>
                     </v-row>
                     <!-- second row -->
                     <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="12">
                             <v-text-field type="text" v-model="description" solo label="Description"></v-text-field>
                        </v-col>
                     </v-row>
                     <!-- another row -->
                     <p>Kindly pick from the list below</p>
                     <v-radio-group v-model="column" row>
                          <v-radio label="Serial Number" value="radio-1"></v-radio>
                          <v-radio label="Quantity" value="radio-2"></v-radio>
                        </v-radio-group>
                          <!-- design -->
                      <v-row>
                        <v-col
                        cols="12"
                         sm="6"
                            md="4">
                    <v-text-field type="text" v-model="serial" solo label="'e.g 1223ww,12342ca,'">
                  </v-text-field>
                        </v-col>
                    <v-col
                        cols="12"
                         sm="6"
                            md="2">
                    <v-btn color="#1976D2" class="white--text" large @click="add()">
                          <v-icon left>mdi-plus</v-icon>
                          Add
                        </v-btn>
                    </v-col>
                    <v-col
                        cols="12"
                         sm="6"
                            md="6">
                    <v-text-field type="number" v-model="quantity" solo label="Quantity"></v-text-field>
                        </v-col>
                          </v-row>
                      <!-- where to display the serial number -->
                      <v-row>
                        <v-col
                        cols="12"
                         sm="6"
                            md="6">
                <v-textarea v-model="list" readonly solo auto-grow="true" label="List of serial numbers added"></v-textarea>
                        </v-col>
                      </v-row>
                     <!-- third row -->
                       <v-row>
                        <v-col
                        cols="12"
                         sm="6"
                            md="6">
                             <v-autocomplete
                        v-model="status"
                        :items="Status"
                        label="Status"
                        solo
                        placeholder="Select Condition"
                         ></v-autocomplete>
                        </v-col>
                          <v-col
                        cols="12"
                         sm="6"
                            md="6">
                <v-text-field v-model="received" type="text" solo label="Brought By:"></v-text-field>
                          </v-col>
                       </v-row>
                       <!-- fourth row -->
                         <v-row>
                        <v-col
                        cols="12"
                         sm="6"
                            md="6">
                            <v-combobox 
                        v-model="type"
                        :items="category"
                        item-text="Category_Name"
                        item-value="Category_Name"
                        multiple hide-selected
                        solo chips clearable
                        :return-object ="false"
                        label="Category"
                        placeholder="Select Category"
                         @change="select()"
                         >
                         </v-combobox>
                        
                        </v-col>
                         <v-col
                        cols="12"
                         sm="6"
                            md="6">
                 <v-text-field v-model="brought" solo label="Received by:"></v-text-field>
                         </v-col>
                         </v-row>
                         <!-- fifth row -->
                         <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-textarea v-model="comment" solo auto-grow="true" label="Comment"></v-textarea>
                  </v-col>
                </v-row>
                </v-form>
                 </v-card-text>
              <v-card-text class="text-center">
                <v-btn color="#1976D2" class="white--text mb-8" v-on:click="Create()">Create Asset
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
         </v-row>
        </v-container>
</div>
    
</template>


<script>
import StoreNav from '../components/StoreNav'
export default {
       components: {
        StoreNav
     },
     data(){
         return{
             Status: ["Good","Bad"],
             snackbar: false,
             name: '',
             location: '',
             description: '',
             status: '',
             type: [],
             quantity: '',
             brought: '',
             comment: '',
             received: '',
             column: 'radio-2',
             serial: [],
             list: []
         }
     },
     methods:{
        select(){
           console.log(this.type)
        },
        add(){
          console.log(this.serial)
          this.list.push(this.serial)
          console.log(this.list)
        },
        Create(){
           console.log(this.name)
           console.log(this.type)
          this.$store.dispatch("CreateAsset",{
          "itemName": this.name,
          "itemDescription": this.description,
          "quantity": this.quantity,
          "location" : this.location,
          "receivedBy": this.received,
          "broughtBy": this.brought,
          "status": this.status,
          "category": this.type,
          "serialNumber": [],
          "comment": this.comment
        })
        .then((success)=>{
          console.log(success);
          this.snackbar = true
          this.$router.push('/assets')
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
      category(){
        return this.$store.state.category
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
      this.$store.dispatch("Category")
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
     color:#5F5D5D;
}
.viewassets{
   background-color: #CAD8E6;
  /* height: 100vh; */
}
</style>