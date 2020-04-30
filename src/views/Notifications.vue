<template>
    <div class="notify">
         <StoreNav/>
   <v-container>
  <h2 class="subheading mx-3 my-2 header-color">NOTIFICATIONS</h2>
 <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>Message has been marked as read.</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>

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
          <tr class="hove">
          <td>{{ item.sender }}</td>
          <td>{{ item.subject }}</td>
          <td>{{ item.date_sent }}</td>
          <td><v-tooltip top>
      <template v-slot:activator="{ on }">
      <v-icon
        small color="#1976D2"
        v-on="on"
        @click="editItem(item.id)"  
      >
        mdi-email-open
      </v-icon>
      </template>
      <span>Mark as read</span>
      </v-tooltip>
       <v-btn small color="#1976D2" text v-on:click="showAlert(item.link_type_id)">
                  View 
          </v-btn></td>
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
            current: null,
            snackbar: false,
             headers: [
          {
            text: 'Username',
            align: 'left',
            sortable: false,
            value: 'sender',
          },
          { text: 'Subject', value: 'subject' },
          { text: 'Date', value: 'date_sent' },
          { text: '', value: 'action' },
        ],
      }
    },
    methods:{
        showAlert(id){
        this.$store.dispatch("ViewRequest",id)
        .then((success)=>{
        console.log(success);
        this.$router.push(`/notifications/${success.requests[0].request_id}`)
        })
        .catch((error)=>{
          console.log(error);
        })     
      },
      editItem(id){
        this.$store.dispatch("MarkAsRead",{
          "notificationId": id,
          "staffUsername": this.$store.state.username[0].UserName
        })
        .then((success)=>{
          console.log(success)
          this.snackbar = true
        })
        .catch((error)=>{
          console.log(error)
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
.hove{
  font-weight: bold;
}

</style>