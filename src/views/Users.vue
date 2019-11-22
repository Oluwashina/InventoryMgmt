<template>
<div class="users">
    <UsersNav/>
    <v-container>
     <h2 class="subheading my-3 user-color">DASHBOARD</h2>
       <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">

        <v-card class="elevation-10"  color="white">
            <v-row class="mx-auto">
          <v-col
            cols="12"
            sm="12"
            md="4">

            <v-card
             class="elevation-8 my-3"
    max-width="300">
    <v-list-item three-line class="card-color">
      <v-list-item-content>
        <v-icon large class="white--text">mdi-cart</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <h1 class="white--text" v-for="assets in AssetsCount" :key="assets.id">{{assets.NumberOfAssets}}</h1>
        <p class="white--text">Available Assets</p>
      </v-list-item-content>

      
    </v-list-item>
  </v-card>

          </v-col>
            <v-col
            cols="12"
            sm="12"
            md="4">

             <v-card
             class="elevation-8 my-3"
    max-width="300">
    <v-list-item three-line class="req-color">
      <v-list-item-content>
        <v-icon large class="white--text">mdi-application-import</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <h1 class="white--text" v-for="Request in RequestCount" :key="Request.id">{{Request.NumberOfRequest}}</h1>
        <p class="white--text">Total Request</p>
      </v-list-item-content>

      
    </v-list-item>
  </v-card>
            </v-col>

             <v-col
            cols="12"
            sm="12"
            md="4">

             <v-card
             class="elevation-8 my-3"
    max-width="300">
    <v-list-item three-line class="assign-color">
      <v-list-item-content>
        <v-icon large class="white--text">mdi-dresser</v-icon>
      </v-list-item-content>

      <v-list-item-content >
        <h1 class="white--text">{{Assigned.NumberOfStaffAsset}}</h1>
        <p class="white--text">Assigned Assets</p>
      </v-list-item-content>

      
    </v-list-item>
  </v-card>
             </v-col>
            </v-row>

            <v-row class="mx-auto">
                 <v-col
            cols="12"
            sm="12"
            md="11">
            <v-card>
                 <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="Assigned.items"
                    :single-select="singleSelect"
                    item-key="name"
                    :items-per-page="3"
                    :search="search"
                    class="elevation-1"
                    hide-default-footer
                >
            <template v-slot:top>
                <v-toolbar flat color="white">
                    <v-toolbar-title>RECENTLY ASSIGNED ASSETS</v-toolbar-title>
                </v-toolbar>
            </template>

            <template v-slot:body.append>
                      <v-card-text class="text-right">
                <v-btn color="#1976D2" text router-link to="/assignedasset">View Details
                    <v-icon right>mdi-chevron-right</v-icon>
                </v-btn>
              </v-card-text>
            </template>

                 </v-data-table>         
            </v-card>
                 </v-col>
            </v-row>
        </v-card>      
          </v-col>
       </v-row>

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
            request: 5,
            selected: [],
             headers: [
                 {
                    text: 'Name',
                    align: 'left',
                    sortable: false,
                    value: 'Item_Name',
                  },
                    { text: 'Description', value: 'Item_Desc' },
                    { text: 'Quantity', value: 'quantity' },
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
        }
    },
    computed:{
    AssetsCount(){
        return this.$store.state.countasset
      },
    Assigned(){
        return this.$store.state.assigned
      },
      RequestCount(){
        return this.$store.state.countrequest
      }
    },
    created(){
    this.$store.dispatch('countAssets')
    .then((success)=>{
      console.log(success)
    })
    .catch((error)=>{
      console.log(error);
    })
    this.$store.dispatch("AssignedAssets",this.$store.state.username[0].UserName)
      .then((success)=>{
        console.log(success);
      })
      .catch((error)=>{
        console.log(error);
      });
      this.$store.dispatch('countRequest',this.$store.state.username[0].UserName)
      .then((success)=>{
      console.log(success)
    })
    .catch((error)=>{
      console.log(error);
    })
    }
}
</script>

<style scoped>
.user-color{
     color:#5F5D5D;
}
.card-color{
    background: #5DBD86;
}
.req-color{
    background: #FFB44C;
}
.assign-color{
  background: #1976D2;
}
.users{
  background-color: #CAD8E6;
  height: 100%;
  background-size: cover;
}
</style>