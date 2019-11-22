<template>
    <div class="notify">
         <StoreNav/>
   <v-container>
  <h2 class="subheading mx-3 my-2 header-color">NOTIFICATIONS</h2>


    <v-data-table
    v-model="selected"
    :headers="headers"
    :items="notify"
    :single-select="singleSelect"
    :items-per-page="5"
     item-key="sender"
    
    class="elevation-1 my-3"
  >

     <template v-slot:item="{item}" >
          <tr @click="showAlert(item.link_type_id)" class="hove">
          <td>{{ item.sender }}</td>
          <td>{{ item.subject }}</td>
          <td>{{ item.date_sent }}</td>
          </tr>
    </template>

  </v-data-table>

   </v-container>


    </div>


</template>



<script>
import StoreNav from '../components/StoreNav'
export default {
      components:{
        StoreNav
    },
    data(){
        return{
            selected: [],
             headers: [
          {
            text: 'Username',
            align: 'left',
            sortable: false,
            value: 'sender',
          },
          { text: 'Subject', value: 'subject' },
          { text: 'Date', value: 'date_sent' },
        ],
      }
    },
    methods:{
        showAlert(id){
        alert(id)
        this.$store.dispatch("ViewRequest",id)
        .then((success)=>{
        console.log(success);
        this.$router.push(`/notifications/${success.requests[0].request_id}`)
        })
        .catch((error)=>{
          console.log(error);
        })     
      }
    },
    computed:{
        notify(){
            return this.$store.state.notifications
        }
    },
    created(){
        this.$store.dispatch("Notifications")
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
.notify{
    background-color: #CAD8E6;
    height: 100%;
    background-size: cover;
}
.hove:hover{
    color: blue;
}
</style>