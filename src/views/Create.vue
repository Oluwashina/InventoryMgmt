<template>
<div class="create">
    <AdminNav/>
    <v-container>
        <h2 class="user-color">NEW USER</h2>
     <v-row>
          <v-col
            cols="12"
            sm="8"
            md="10">
            <v-card class="elevation-10"  color="#F0FDF5">
              <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>User successfully created...</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>

                   <v-snackbar v-model="error" :timeout="4000" top color="error">
                  <span>Please fill in the missing blank...</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
              
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="First Name"
                    v-model="firstname"
                    prepend-inner-icon="mdi-account"
                    type="text"  outlined
                    color="#013919"  
                  ></v-text-field>

                  <v-text-field
                    id="lastname"
                    label="Last Name"
                    v-model="lastname"
                    prepend-inner-icon="mdi-account"
                    type="text" outlined
                    color="#013919"
                  ></v-text-field>
                   <v-text-field
                    id="username"
                    label="Username"
                    v-model="username"
                    prepend-inner-icon="mdi-account-outline"
                    type="text" outlined
                    color="#013919"
                  ></v-text-field>
                   <v-text-field
                    id="email"
                    label="Email Address"
                    v-model="email"
                    prepend-inner-icon="mdi-email"
                    type="text" outlined
                    color="#013919"
                  ></v-text-field>
                   <v-text-field
                    id="phone"
                    label="Phone Number"
                    v-model="phone"
                    prepend-inner-icon="mdi-phone"
                    type="text" outlined
                    color="#013919"
                  ></v-text-field>
                  <h3 class="role-color">Role(s):</h3>
                  <v-row>
                      <v-col
                          cols="12"
                          sm="12"
                          md="8" style="display: flex;" >
                <v-checkbox v-model="checkedNames" color="#013919" class="mx-2" value="Admin" label="Admin"></v-checkbox>
                <v-checkbox v-model="checkedNames" color="#013919" class="mx-2" value="Storekeeper" label="Storekeeper"></v-checkbox>
                <v-checkbox v-model="checkedNames" color="#013919" class="mx-2" value="User" label="User"></v-checkbox>
                      </v-col>

                      <v-col
                          cols="12"
                          sm="12"
                          md="4"
                        >
                     <v-card-text class="text-center">
                     <v-btn color="#013919" class="white--text" v-on:click="create()">Create User
                      </v-btn>
                   </v-card-text>
                      </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
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
        AdminNav,
  },
   data: () => ({
     snackbar: false,
     error: false,
     firstname: '',
     lastname: '',
     username: '',
     email: '',
     phone: '',
     checkedNames: []
   }),
   methods: {
     create(){
      const randomstring = Math.random().toString(36).slice(-8);
       this.$store.dispatch("Register", {
         "username": this.username,
         "firstname": this.firstname,
         "lastname" : this.lastname,
         "email": this.email,
         "phonenumber": this.phone,
         "roles": this.checkedNames
       })
       .then((success)=>{
         console.log(success);
         this.username = '',
         this.firstname = '',
         this.lastname = '',
         this.email = '',
         this.phone = '',
         this.checkedNames = '',
        this.snackbar = true;
       })
       .catch((error)=>{
        console.log(error);
        this.error = true;
       
       })
       console.log(this.checkedNames);
     }
   }
    
}
</script>


<style scoped>
.user-color{
    color:#013919;
}
.role-color{
    color: #013919;
}
.formCenter{
    text-align: center;
}

</style>