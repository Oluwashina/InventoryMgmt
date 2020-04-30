<template>
    <div class="viewassets">
        <StoreNav/>
        <v-container>
        <h2 class="subheading mx-5 my-2 header-color">VIEW ASSETS</h2>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>Assets successfully updated..</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">
             <v-card class="elevation-8" color="white">
                 <v-container>
                    
                <v-row>
                      <v-col
                    cols="12"
                     sm="6"
                         md="6">
        
            <!-- dropdown -->
   
     </v-col>
         
     <v-col
            cols="12"
            sm="6"
            md="6">
         <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="Search"
                    single-line
                     hide-details></v-text-field>    
     </v-col>
</v-row>
        </v-container>

        <!-- asset details -->
        <v-data-table
    v-model="selected"
    :headers="headers"
    :items="Assets"
     :items-per-page="10"
    :single-select="singleSelect"
    :search="search"
    class="elevation-1"
  >
  <!-- dialog -->
   <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title class="hidden-sm-and-down">Kayar</v-toolbar-title>
        <v-divider
          class="mx-4 hidden-sm-and-down"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>     
    <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="#1976D2" class="white--text new-asset mb-2" router-link to="/newasset">
                <v-icon left>mdi-plus</v-icon>
                New Asset
                </v-btn>
                 <v-btn color="#1976D2" class="white--text new-asset mb-2 mr-4 " router-link to="/batch">
                <v-icon left>mdi-plus</v-icon>
                Batch Asset
                </v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="headline">Edit Asset</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="name" @change="select(Assets)" solo label="Name"></v-text-field>
                  </v-col>
                </v-row>
                 <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="description" solo label="Description"></v-text-field>
                  </v-col>
                </v-row>
                 <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-combobox 
                        v-model="type"
                        :items="categorybyid"
                        item-text="Category_Name"
                        item-value="Category_Name"
                        multiple hide-selected
                        solo chips clearable
                        :return-object ="false"
                        label="Category"
                        placeholder="Select Category"
                         @change="selecty()"
                         >
                         </v-combobox>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" :loading="loading" text @click="update()">Update</v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>
      </v-toolbar>
     </template>
  
     <template v-slot:item.action="{ item }">
           <v-icon
            small
            class="mr-2" color="#1976D2"
            @click="editItem(item.item_id, item.item_Name, Assets)"
          >
            edit
      </v-icon>
        <v-btn small color="#1976D2" text class="" v-on:click="showAlert(item.item_id)">
                  View Lots  
          </v-btn>
     </template>

     <!-- <template v-slot:item="{item}">
          <tr @click="showAlert(item.item_id)">
          <td>{{ item.item_Name }}</td>
          <td>{{ item.item_Desc }}</td>
          <td>{{ item.Quantity }}</td>
           </tr>
    </template> -->

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
     components: {
        StoreNav
     },
     data(){
         return{
              items: [
            {
              title : 'Good',
            },
            {
              title : 'Okay',
            }
            ],
        singleSelect: false,
        selected: [],
        snackbar: false,
        countries: ["Good","Bad"],
        search: '',
        dialog: false,
        loading: false,
        editedIndex: -1,
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'item_Name',
          },
          { text: 'Description', value: 'item_Desc' },
          { text: 'Quantity', value: 'Quantity' },
          { text: '', value: 'action', sortable: false }
        ],
        itemID: '',
        name: '',
        description: '',
        type: [],
        Result: '',
        itemName: ''
        }
     },
     computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Asset' : 'Edit Asset'
      },
      Assets(){
        return this.$store.state.assets
      },
      category(){
        return this.$store.state.category
      },
      categorybyid(){
        return this.$store.state.categorybyid
      }
    },
     watch: {
      dialog (val) {
        val || this.close()
      },
    },
     methods:{
         getColor (status) {
        if (status == 'Good') return '#219653'
        else if (status == 'Okay') return '#FFB44C'
        else return 'red'
      },
      select(){
       var result = Assets.filter( obj => obj.item_Name === this.name)[0];
        console.log(result);
        this.Result = result.item_id
      this.$store.dispatch("CategoryById", this.Result)
      .then((success)=>{
        console.log(success)
      })
      .catch((error)=>{
        console.log(error);
      })
      },
      selecty(){
        console.log(this.type)
      },
      editItem(item, name, Assets) {
        this.dialog = true
        this.itemID = item
        console.log(this.itemID)
        this.name = name

        var result = Assets.filter( obj => obj.item_Name === name)[0];
        console.log(result);
        this.Result = result.item_id
      this.$store.dispatch("CategoryById", this.Result)
      .then((success)=>{
        console.log(success)
      })
      .catch((error)=>{
        console.log(error);
      })
      },
      update(){
        this.loading = true
        this.$store.dispatch("EditAsset",{
          "itemDescription": this.description,
          "itemName": this.name,
          "itemId": this.itemID
        })
        .then((success)=>{
          console.log(success);
          this.loading = false,
          this.snackbar = true
        })
        .catch((error)=>{
          console.log(error);
        })
        this.$store.dispatch("EditCategory",{
            "itemId" : this.itemID,
            "category" : this.type
        })
        .then((success)=>{
          console.log(success);
        })
        .catch((error)=>{
          console.log(error);
        })
      },
      showAlert(a){
        this.$store.dispatch("ViewAssetsById", a)
        .then((success)=>{
          console.log(success);
          this.$router.push(`/assets/${success.lot[0].item_id}`)
        })
        .catch((error)=>{
          console.log(error);
        })
      },
      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
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
.filter{
    text-transform: initial;
}
.new-asset{
    border: 3px solid #1976D2;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}
.viewassets{
   background-color: #CAD8E6;
  background-size: cover;
  height: 100%;
}

</style>