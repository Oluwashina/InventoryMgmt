<template>
     <v-app id="inspire" class="back">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-10"  color="rgba(255, 255, 255, 0.8)">
                <v-card-text class="text-center">
                <v-img src="/LogoSvg.svg" max-width="100"
      max-height="100" aspect-ratio="1" class="mx-auto"></v-img>
                </v-card-text>
                <v-snackbar v-model="snackbar" :timeout="4000" top color="error">
                  <span>Invalid Credentials...</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Username"
                    v-model="username"
                    prepend-inner-icon="mdi-account"
                    type="text" single-line outlined
                    color="#013919"  
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="password"
                    prepend-inner-icon="mdi-lock"
                    type="password" single-line outlined
                    color="#013919"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-text class="text-center">
                <v-btn color="#013919" class="white--text" v-on:click="login()">Login
                    <v-icon right>mdi-login</v-icon>
                </v-btn>
              </v-card-text>
              <v-card-text class="text-center">
                  <v-btn text color="#013919" class="forgotSize" router-link to="/forgot">Forgot Password? Click HERE</v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row> 
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import axios from 'axios'
import router from '@/router'
export default {
    data: () => ({
      drawer: null,
      username: '',
      password: '',
      snackbar: false
    }),
    methods:{
      login(){
        this.$store.dispatch("Login", {
          "username": this.username,
          "password": this.password
        })
        .then((success)=>{
          console.log(success);
          if(success.roleId[0] == "Storekeeper"){
            this.$router.push('/storekeeper');
          }
          else if(success.roleId[0] == "Admin"){
            this.$router.push('/admin');
          }
          else{
            this.$router.push('/create');
          }
        })
        .catch((error)=>{
          console.log(error);
          this.snackbar = true;
        });
     
      }
    }
}
</script>


<style scoped>
.back{
background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(/manufacturing-header-icon.svg) ;
background-size: cover;
}
.forgotSize{
    text-transform: capitalize;
}
.v-card:not(.v-sheet--tile) {
    border-radius: 10px;
}
.icon-large{
    font-size: 80px;
}

</style>