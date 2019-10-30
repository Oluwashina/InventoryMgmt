<template>
 <div class="make">
         <UsersNav/>
    <v-container>
        <h2 class="subheading mx-5 my-2 request-color">View Assets</h2>


      <v-card> 
    <v-tabs color="#013919">
        <v-tab>View Assigned Assets
        </v-tab>
         <v-tab>
             View Public Assets
         </v-tab>
         <!-- first tab -->
         <v-tab-item>
             <v-card>
                 <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="desserts"
                    :single-select="singleSelect"
                    item-key="name"
                    :search="search"
                    class="elevation-1"
                >

                
         <!-- dialog -->
  <template v-slot:top>
        <v-dialog v-model="dialog" max-width="500px">
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <!-- <v-col cols="12" sm="12" md="12">
                    <v-text-field v-model="editedItem.status" label="Status"></v-text-field>
                  </v-col> -->
                  <v-col cols="12" sm="12" md="12">
                       <v-autocomplete
                        v-model="editedItem.status"
                        :items="countries"
                        label="Status"
                        placeholder="Select..."
                         ></v-autocomplete>
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
    </template>

                <template v-slot:item.status="{ item }">
                        <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
                </template>

                  <template v-slot:item.action="{ item }">
                      <v-btn color="#013919" text v-on:click="editItem(item)">Edit status
                    <v-icon small right>edit</v-icon>
                    </v-btn>
                  </template>

                 </v-data-table>
             </v-card>
         </v-tab-item>

         <!-- second tab -->
         <v-tab-item>
            <v-card>
                 <v-data-table
                    v-model="selected"
                    :headers="headers1"
                    :items="desserts1"
                    :single-select="singleSelect"
                    item-key="name"
                    :search="search"
                    class="elevation-1"
                >
                <template v-slot:item.status="{ item }">
                        <v-chip :color="getColor(item.status)" dark>{{ item.status }}</v-chip>
                </template>

                 </v-data-table>
             </v-card>
         </v-tab-item>

          </v-tabs>
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
            singleSelect: false,
            countries: ["Good","Bad","Okay"],
            selected: [],
             search: '',
              dialog: false,
               editedIndex: -1,
                editedItem: {
                    status: ''
                },
                defaultItem: {
                        status: ''
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
                    { text: '', value: 'action', sortable: false },
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
                ],
                 headers1: [
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
                    { text: '', value: 'action', sortable: false },
                ],
                desserts1: [
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
                        status: 'Bad',
                        time: '21 hours ago',
                    },
                ]

        }
    },
     computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Asset' : 'Edit Status'
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
        else if(status == 'Bad') return '#F84040'
        else return 'red'
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
.request-color{
     color:#013919;
}

</style>