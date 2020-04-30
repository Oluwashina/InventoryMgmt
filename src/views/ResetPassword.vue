<template>
<div class="users">
    <UsersNav/>
  <v-container>
        <h2 class="subheading mx-5 my-2 update-color">CHANGE PASSWORD</h2>
     <v-row>
          <v-col
            cols="12"
            sm="12"
            md="10">
            <v-card class="elevation-10"  color="white">
                <v-card-text>
                <v-form>
                     <v-row align="center" justify="center">
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                       <v-text-field
                        label="Username"
                        v-model="username"
                        type="text" outlined
                        readonly
                        color="#5F5D5D"  
                            ></v-text-field>

                        </v-col>
                    </v-row>
                    <v-row align="center" justify="center">
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">

                             <v-text-field
                              label="Old Password"
                              v-model="oldpassword"
                               outlined 
                              color="#5F5D5D" 
                               :append-icon="show1 ? 'visibility' : 'visibility_off'"
                              :type="show1 ? 'text' : 'password'"
                              @click:append="show1 = !show1" 
                            ></v-text-field>
                      
                        </v-col>
                    </v-row>
                      <v-row align="center" justify="center">
                        <v-col
                        cols="12"
                         sm="12"
                            md="6">
                            <v-text-field
                              label="New Password"
                              v-model="newpassword"
                               outlined
                              color="#5F5D5D"
                               :append-icon="show2 ? 'visibility' : 'visibility_off'"
                              :type="show2 ? 'text' : 'password'"
                              @click:append="show2 = !show2"   
                            ></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
                </v-card-text> 
              <v-card-text class="text-center">
                <v-btn color="#1976D2" :loading="loading" class="white--text" v-on:click="update()">Change Password
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
            username: this.$store.state.username[0].UserName,
            oldpassword: '',
            newpassword: '',
            show1: false,
            show2: false,
            loading: false
        
        }
    },
    methods:{
        update(){
          this.loading = true
        this.$store.dispatch("ChangePassword", {
         "username":  this.$store.state.username[0].UserName,
         "oldPassword": this.oldpassword,
         "newPassword": this.newpassword
        })
        .then((success)=>{
         console.log(success);
         this.loading = false
         alert("Password successfully changed");
         this.$router.push('/')
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
     color: #5F5D5D;
}
.users{
  background-color: #CAD8E6;
  height: 100%;
  background-size: cover;
}
</style>