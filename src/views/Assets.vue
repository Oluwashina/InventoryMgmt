<template>
    <div class="viewassets">
        <StoreNav/>
        <v-container>
        <h2 class="subheading mx-5 my-2 header-color">VIEW ASSETS</h2>
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
     :items-per-page="5"
    :single-select="singleSelect"
    :search="search"
    class="elevation-1"
  >
  <!-- dialog -->
  <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Kayar</v-toolbar-title>
        <v-divider
          class="mx-4"
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
          </template>
        </v-dialog>
      </v-toolbar>
    </template>
  
  <template v-slot:item.status="{ item }">
      <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
    </template>

     <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        edit
      </v-icon>
    </template>

     <template v-slot:item="{item}">
          <tr @click="showAlert(item.item_id)">
          <td>{{ item.item_Name }}</td>
          <td>{{ item.item_Desc }}</td>
          <td>{{ item.Quantity }}</td>
           </tr>
    </template>

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
        ],
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
      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      showAlert(a){
        alert(a);
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