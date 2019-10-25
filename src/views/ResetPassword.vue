<template>
<div class="users">
    <UsersNav/>
  <v-container>
        <h2 class="subheading mx-5 my-2 update-color">Reset Password</h2>
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
                            md="12">

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
                            md="12">

                        <h3 class="my-3">Old Password:</h3>
                        <v-text-field
                             v-model="oldpassword"
                             type="password"
                            ></v-text-field>

                        </v-col>
                    </v-row>
                      <v-row>
                        <v-col
                        cols="12"
                         sm="12"
                            md="12">

                        <h3 class="my-3">New Password:</h3>
                        <v-text-field
                             v-model="newpassword"
                             type="password"
                            ></v-text-field>

                        </v-col>
                    </v-row>
                </v-form>
                </v-card-text> 
              <v-card-text class="text-center">
                <v-btn color="#013919" class="white--text" v-on:click="update()">Reset
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
            username: 'richy',
            oldpassword: '',
            newpassword: ''
        
        }
    },
    methods:{
        update(){
        this.$store.dispatch("ChangePassword", {
         "username": this.username,
         "oldPassword": this.oldpassword,
         "newPassword": this.newpassword
        })
        .then((success)=>{
         console.log(success);
         alert("Password successfully changed");
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