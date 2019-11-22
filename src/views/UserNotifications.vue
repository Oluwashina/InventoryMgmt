<template>
<div class="users">
    <UsersNav/>
    <v-container>
     <h2 class="subheading my-3 user-color">NOTIFICATIONS</h2>

     <v-data-table
    v-model="selected"
    :headers="headers"
    :items="notify"
    :single-select="singleSelect"
    :items-per-page="5"
     item-key="recipient"
    class="elevation-1 my-3"
  >

     </v-data-table>

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
             selected: [],
             headers: [
          {
            text: 'Username',
            align: 'left',
            sortable: false,
            value: 'recipient',
          },
          { text: 'Body', value: 'subject' },
          { text: 'Subject', value: 'body' },
          { text: 'Date', value: 'date_sent' },
        ],

        }
    },
    methods:{

    },
    computed:{
      notify(){
            return this.$store.state.usernotifications
        }
    },
    created(){
      this.$store.dispatch("UserNotifications", this.$store.state.username[0].UserName)
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
.user-color{
     color:#5F5D5D;
}
.users{
  background-color: #CAD8E6;
  height: 100%;
  background-size: cover;
}
</style>