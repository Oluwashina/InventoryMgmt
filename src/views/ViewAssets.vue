<template>
    <div class="viewassets">
        <AdminNav/>
        <v-container>
        <h1 class="subheading mx-5 my-5 header-color">VIEW ASSETS</h1>

        <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">
             <v-card class="elevation-8" color="#F0FDF5">
                 <v-container>
                    
                <v-row>
                      <v-col
                    cols="12"
                     sm="6"
                         md="6">
        
            <!-- dropdown -->
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn 
          v-on="on" 
          color="#5F5D5D" class="white--text filter new-asset"
        >
         <v-icon left>mdi-filter</v-icon>
          Filter assets orders:
        </v-btn>
      </template>
       <v-list>
        <v-list-item v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
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
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
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
            <v-btn color="#013919" class="white--text new-asset mb-2" v-on="on">
                <v-icon left>mdi-plus</v-icon>
                New Asset
                </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.name" label="Asset ID"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.asset" label="Asset Description"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.quantity" label="Quantity"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.type" label="Type"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
                  </v-col>
                   <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="editedItem.time" label="Time"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#013919" text @click="close">Cancel</v-btn>
              <v-btn color="#013919" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
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
      <v-icon
        small
        @click="deleteItem(item)"
      >
        delete
      </v-icon>
    </template>
  </v-data-table>
    
  </v-card>
          </v-col>
    </v-row>

</v-container>
    </div>
</template>


<script>
import AdminNav from '../components/AdminNav'
export default {
     components: {
        AdminNav
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
        search: '',
        dialog: false,
        editedIndex: -1,
        editedItem: {
            name: '',
            asset: '',
            quantity: '',
            type: '',
            status: '',
            time: ''
         },
        defaultItem: {
            name: '',
            asset: '',
            quantity: 0,
            type: '',
            status: '',
            time: ''
        },
        headers: [
          {
            text: 'Asset ID',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Asset Description', value: 'asset' },
          { text: 'Quantity', value: 'quantity' },
          { text: 'Type', value: 'type' },
          { text: 'Status', value: 'status' },
          { text: 'Time', value: 'time' },
          { text: 'Actions', value: 'action', sortable: false },
        ],
        desserts: [
          {
            name: 'IB0024',
            asset: 'Dell Inspiron 15 7000 series',
            quantity: 4,
            type: 'Desktop',
            status: 'Good',
            time: '3 hours ago',
          },
          {
            name: 'IB0345',
            asset: 'Acer Predator',
            quantity: 5,
            type: 'Laptop',
            status: 'Okay',
            time: '4 hours ago',
          },
          {
            name: 'WR0024',
            asset: 'Apple macbook air',
            quantity: 2,
            type: 'Laptop',
            status: 'Good',
            time: '18 hours ago',
          },
          {
            name: 'IB0056',
            asset: 'Hp envy 250-CL series',
            quantity: 8,
            type: 'Laptop',
            status: 'Good',
            time: '21 hours ago',
          },
          {
            name: 'IB0004',
            asset: 'Hp Laserjet Printer',
            quantity: 3,
            type: 'Printer',
            status: 'Good',
            time: '2 days ago',
          },
          {
            name: 'WR2024',
            asset: 'Microsoft classic 350C-series',
            quantity: 1,
            type: 'Laptop',
            status: 'Okay',
            time: '3 days ago',
          },
        ],
        }
     },
     computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Asset' : 'Edit Asset'
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
    deleteItem(item) {
    const index = this.desserts.indexOf(item)
    confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },
      editItem(item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },
      close() {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save(){
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    }
}
</script>

<style scoped>
.header-color{
     color:#013919;
}
.filter{
    text-transform: initial;
}
.new-asset{
    border: 3px solid #5F5D5D;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
}

</style>