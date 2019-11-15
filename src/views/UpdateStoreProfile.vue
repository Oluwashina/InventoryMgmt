<template>
<div class="users">
    <StoreNav/>
  <v-container>
        <h2 class="subheading mx-5 my-2 update-color">EDIT PROFILE</h2>
         <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>Profile successfully updated...</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
          <v-row>
          <v-col
            cols="12"
            sm="12"
            md="10">
            <v-card class="elevation-3" color="white">
                <v-card-text>
                <v-form>
                     <v-row>
                        <v-col
                        cols="12"
                         sm="12" class="mt-5"
                            md="6">

                        <v-text-field
                        label="First Name"
                        v-model="firstname"
                        type="text" outlined dense
                        placeholder="Olubunmi"
                         append-icon="mdi-pencil"
                        color="#5F5D5D"  
                            ></v-text-field>

                        </v-col>

                        <v-col
                        cols="12"
                         sm="12" class="mt-5"
                            md="6">

                       <v-text-field
                        label="Last Name"
                        v-model="lastname"
                        placeholder="Praise"
                        type="text" outlined dense
                        append-icon="mdi-pencil"
                        color="#5F5D5D"  
                            ></v-text-field>

                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                        <v-text-field
                        label="Username"
                        v-model="username"
                        readonly
                        type="text" outlined dense
                        color="#5F5D5D"  
                            ></v-text-field>


                        </v-col>

                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                        <v-text-field
                        label="Email"
                        v-model="email"
                        type="text" outlined dense
                        append-icon="mdi-pencil"
                        color="#5F5D5D"  
                            ></v-text-field>


                        </v-col>
                    </v-row>
                               <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                         <v-text-field
                            label="Phone Number"
                            v-model="phonenumber"
                            type="text" outlined dense
                            append-icon="mdi-pencil"
                            color="#5F5D5D"  
                            ></v-text-field>


                        </v-col>
                        
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                        </v-col>
                    </v-row>
                </v-form>
                </v-card-text>
                    <div class="text-center">
                        <v-btn color="#1976D2" class="white--text ma-2 mb-12" v-on:click="update()">Update Profile
                        </v-btn>
                        <v-btn color="#1976D2" class="white--text ma-2 mb-12" router-link to="/resetstorepassword">Change Password
                        </v-btn>
                    </div>
            </v-card>
          </v-col>
        </v-row> 
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
             firstname: this.$store.state.username[0].FirstName,
            lastname: this.$store.state.username[0].LastName,
            username: this.$store.state.username[0].UserName,
            email: this.$store.state.username[0].Email,
            phonenumber: this.$store.state.username[0].PhoneNumber,
            snackbar: false
        }
    },
    methods: {
         update(){
        this.$store.dispatch("Update", {
           "staff_id": this.$store.state.logindata.Staff_Id,
           "username": this.$store.state.username[0].UserName,
           "firstname": this.firstname,
           "lastname": this.lastname,
           "email": this.email,
           "phonenumber": this.phonenumber,
           "roles": this.$store.state.logindata.roleId
       })
        .then((success)=>{
         console.log(success);
         this.snackbar = true
       })
       .catch((error)=>{
         console.log(error);
       });
    }
},
computed:{
    Login(){
      return this.$store.state.logindata.roleId
    },
    Username(){
      return this.$store.state.username
    }
  },
}
</script>


<style scoped>
.name-center{
    text-align: center;
}
.update-color{
     color:#5F5D5D;
}
.users{
  background-color: #CAD8E6;
  height: 100vh;
}


</style>