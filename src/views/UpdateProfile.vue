<template>
<div class="users">
    <UsersNav/>
  <v-container>
        <h2 class="subheading mx-5 my-2 update-color">Update Profile</h2>
     <v-row>
          <v-col
            cols="12"
            sm="12"
            md="10">
            <v-card class="elevation-10"  color="#F0FDF5">
                <v-card-text>
                <v-form>
                     <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                        <h3 class="my-3">Staff ID:</h3>
                        <v-text-field
                             v-model="staff_id"
                                solo
                                readonly
                            ></v-text-field>

                        </v-col>

                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                        <h3 class="my-3">Username:</h3>
                        <v-text-field
                             v-model="username"
                                solo readonly
                            ></v-text-field>

                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                        <h3 class="my-3">Firstname:</h3>
                        <v-text-field
                             v-model="firstname"
                            ></v-text-field>

                        </v-col>

                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                        <h3 class="my-3">Lastname:</h3>
                        <v-text-field
                             v-model="lastname"
                                
                            ></v-text-field>

                        </v-col>
                    </v-row>
                               <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                        <h3 class="my-3">Phone Number:</h3>
                        <v-text-field
                             v-model="phonenumber"
                            ></v-text-field>

                        </v-col>
                        
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                        <h3 class="my-3">Email Address:</h3>
                        <v-text-field
                             v-model="email"
                                
                            ></v-text-field>

                        </v-col>
                    </v-row>
                </v-form>
                </v-card-text> 
              <v-card-text class="text-center">
                <v-btn color="#013919" class="white--text" v-on:click="update()">Update
                </v-btn>
              </v-card-text>
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
            firstname: '',
            lastname: '',
            username: 'richy',
            email: 'richy@gmail.com',
            staff_id: 5,
            phonenumber: '08102872652',
            roleId: ["User"]
        }
    },
    methods:{
        update(){
        this.$store.dispatch("Update", {
           "staff_id": this.staff_id,
           "username": this.username,
           "firstname": this.firstname,
           "lastname": this.lastname,
           "email": this.email,
           "phonenumber": this.phonenumber,
           "roles": this.roleId
       })
        .then((success)=>{
         console.log(success);
         alert("Profile successfully updated");
       })
       .catch((error)=>{
         console.log(error);
       });
    }
 }
}
</script>

<style scoped>
.name-center{
    text-align: center;
}
.update-color{
     color:#013919;
}

</style>