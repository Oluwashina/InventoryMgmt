<template>
 <div class="viewassets">
        <AdminNav/>
        <v-container>
        <h2 class="subheading mx-5 my-2 header-color" v-for="user in Users" :key="user.id">Staff ID: {{user.Staff_Id}}</h2>
         <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>Profile successfully updated...</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
          <v-row>
          <v-col
            cols="12"
            sm="12"
            md="10">
            <v-card class="elevation-10 mx-5"  color="white">
                <v-card-text>
                <v-form>
                     <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="2">
                            <p class=" my-2 name-color">First Name:</p>
                        </v-col>
                         <v-col
                        cols="12"
                         sm="12"
                            md="6">
                            
                        <v-text-field
                        v-model="firstname"
                        type="text" outlined dense
                         append-icon="mdi-pencil"
                         color="#5F5D5D" 
                            ></v-text-field>
                         </v-col>
                     </v-row>
                     <!-- second row -->
                      <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="2">
                            <p class="my-2 name-color">Last Name:</p>
                        </v-col>
                         <v-col
                        cols="12"
                         sm="12"
                            md="6">
                            
                        <v-text-field
                        v-model="lastname"
                        type="text" outlined dense
                        placeholder="Olubunmi"
                         append-icon="mdi-pencil" 
                          color="#5F5D5D"
                            ></v-text-field>
                         </v-col>
                     </v-row>
                     <!-- third row -->
                      <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="2">
                            <p class="my-2 name-color">Email:</p>
                        </v-col>
                         <v-col
                        cols="12"
                         sm="12"
                            md="6">
                            
                        <v-text-field
                        v-model="email"
                        type="text" outlined dense
                        placeholder="Olubunmi"
                         color="#5F5D5D"
                         append-icon="mdi-pencil" 
                            ></v-text-field>
                         </v-col>
                     </v-row>
                     <!-- fourth row -->
                      <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="2">
                            <p class="my-2 name-color">Phonenumber:</p>
                        </v-col>
                         <v-col
                        cols="12"
                         sm="12"
                            md="6">
                            
                        <v-text-field
                        v-model="phonenumber"
                        type="text" outlined dense
                        placeholder="Olubunmi"
                         color="#5F5D5D"
                         append-icon="mdi-pencil" 
                            ></v-text-field>
                         </v-col>
                     </v-row>
                     <!-- fifth row -->
                      <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="2">
                            <p class="my-2 name-color">Username:</p>
                        </v-col>
                         <v-col
                        cols="12"
                         sm="12"
                            md="6">
                            
                        <v-text-field
                        v-model="username"
                        type="text" outlined dense
                        placeholder="Olubunmi"
                         color="#5F5D5D"
                        readonly
                            ></v-text-field>
                         </v-col>
                     </v-row>
                     <!-- sixth row -->
                     <h3 class="name-color">Role(s):</h3>
                  <v-row>
                      <v-col
                          cols="12"
                          sm="12"
                          md="8" style="display: flex;" >
                <v-checkbox v-model="checkedNames" color="#1976D2" class="mx-3" value="Admin" label="Admin"></v-checkbox>
                <v-checkbox v-model="checkedNames" color="#1976D2" class="mx-3" value="Storekeeper" label="Storekeeper"></v-checkbox>
                <v-checkbox v-model="checkedNames" color="#1976D2" class="mx-3" value="User" label="User"></v-checkbox>
                      </v-col>

                      <v-col
                          cols="12"
                          sm="12"
                          md="4"
                        >
                     <v-card-text class="text-center">
                     <v-btn color="#1976D2" :loading="loading" class="white--text" v-on:click="update()">Update User
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
        AdminNav
     },
     data(){
         return{
             firstname: this.$store.state.userdetails[0].FirstName,
             lastname: this.$store.state.userdetails[0].LastName,
             email: this.$store.state.userdetails[0].Email,
             phonenumber: this.$store.state.userdetails[0].PhoneNumber,
             username: this.$store.state.userdetails[0].UserName,
             checkedNames: this.$store.state.userdetails[0].Roles,
             loading: false,
             snackbar: false
         }
     },
     methods:{
         update(){
             this.loading = true
        this.$store.dispatch("Update", {
           staffId: this.$store.state.userdetails[0].Staff_Id,
           userName: this.$store.state.userdetails[0].UserName,
           firstName: this.firstname,
           lastName: this.lastname,
           email: this.email,
           phoneNumber: this.phonenumber,
           roles: this.checkedNames
       })
        .then((success)=>{
         console.log(success);
         this.loading= false
         this.snackbar = true
       })
       .catch((error)=>{
         console.log(error);
       });
         }
     },
     computed:{
         Users(){
             return this.$store.state.userdetails
         }
     }
}
</script>


<style scoped>
.header-color{
    color: #5F5D5D;
}
.name-color{
    color: #5F5D5D;
    font-size: 16px;
    font-weight: bold;
}
.viewassets{
   background-color: #CAD8E6;
  background-size: cover;
  height: 100%;
}
</style>