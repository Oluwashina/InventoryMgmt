<template>
<div class="create">
    <AdminNav/>
    <v-container>
        <h2 class="user-color mx-5">NEW USER</h2>
     <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">
            <v-card class="elevation-10" color="white">
              <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>User successfully created...Kindly check your email for the password</span>
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
                    color="#5F5D5D"  
                  ></v-text-field>

                  <v-text-field
                    id="lastname"
                    label="Last Name"
                    v-model="lastname"
                    prepend-inner-icon="mdi-account"
                    type="text" outlined
                    color="#5F5D5D"
                  ></v-text-field>
                   <v-text-field
                    id="username"
                    label="Username"
                    v-model="username"
                    prepend-inner-icon="mdi-account-outline"
                    type="text" outlined
                    color="#5F5D5D"
                  ></v-text-field>
                   <v-text-field
                    id="email"
                    label="Email Address"
                    v-model="email" :rules="emailRules" 
                    prepend-inner-icon="mdi-email"
                    type="text" outlined
                    color="#5F5D5D" required
                  ></v-text-field>
                   <v-text-field
                    id="phone"
                    label="Phone Number"
                    v-model="phone" :rules="contactRules"
                    prepend-inner-icon="mdi-phone"
                    type="text" outlined required
                    color="#5F5D5D" :counter="11"
                  ></v-text-field>
                  <h3 class="role-color">Role(s):</h3>
                  <v-row>
                      <v-col
                          cols="12"
                          sm="12"
                          md="8" style="display: flex;" >
                <v-checkbox v-model="checkedNames" color="#1976D2" class="mx-2" value="Admin" label="Admin"></v-checkbox>
                <v-checkbox v-model="checkedNames" color="#1976D2" class="mx-2" value="Storekeeper" label="Storekeeper"></v-checkbox>
                <v-checkbox v-model="checkedNames" color="#1976D2" class="mx-2" value="User" label="User"></v-checkbox>
                      </v-col>

                      <v-col
                          cols="12"
                          sm="12"
                          md="4"
                        >
                     <v-card-text class="text-center">
                     <v-btn color="#1976D2" :loading="loading" class="white--text" v-on:click="create()">Create User
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
     loading: false,
     error: false,
     firstname: '',
     lastname: '',
     username: '',
     email: '',
     phone: '',
     checkedNames: [],
      emailRules: [
               v => !!v || 'E-mail is required',
               v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
      contactRules: [
           v => !! v || 'Contact is required',
           v => v.length <= 11 || 'Contact must be less than 11 characters',
           v => {
             const pattern = /^-?[0-9]+(.[0-9]{1-7})?$/;
             return pattern.test(v) || 'Numbers only'
           } 
        ],
   }),
   methods: {
     create(){
       this.loading = true
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
         this.loading = false
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
    color:#5F5D5D;
}
.role-color{
    color: #1976D2;
}
.formCenter{
    text-align: center;
}
.create{
  background-color: #CAD8E6;
  background-size: cover;
  height: 100%;
}

</style>