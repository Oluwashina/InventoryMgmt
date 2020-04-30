<template>
     <v-app id="inspire" class="back">
      <v-container
      >
      <v-layout class="mt-3">
        <v-flex class="mb-3">
          <v-img src="/Icon125.svg" max-width="80"
      max-height="80" aspect-ratio="1" class="mx-auto"></v-img>
        </v-flex>
      </v-layout>
        <v-row
          align="center"
          justify="center"
        >
        
          <v-col
            cols="12"
            sm="8"
            md="5"
          >
            <v-card class="elevation-2">
                 <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Inventory Management System</v-toolbar-title>
                <v-spacer />
                      <v-icon>mdi-store</v-icon>  
                 </v-toolbar>
                <v-snackbar v-model="snackbar" :timeout="4000" top color="error">
                  <span>Invalid Credentials...</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
              <v-card-text>
                <v-form v-model="isValid">
                  <v-text-field
                    label="Username"
                    name="Username"
                    v-model="username"
                    prepend-icon="mdi-account"
                    type="text" required
                      :rules="[v => !!v || 'Username is required']"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    :append-icon="show1 ? 'visibility' : 'visibility_off'"
                    :type="show1 ? 'text' : 'password'"
                    @click:append="show1 = !show1" required
                     :rules="[v => !!v || 'Password is required']"
                  ></v-text-field>
                   <v-card-text class="text-right">
                     <v-btn text color="#1976D2" class="forgotSize" router-link to="/forgot">Forgot Password?</v-btn>
                 </v-card-text>
                </v-form>
              </v-card-text>
              <v-card-text class="text-center">
                <v-btn color="#1976D2" :loading="loading" :disabled="!isValid" class="white--text" v-on:click="login()">Login
                </v-btn>
              </v-card-text>     
            </v-card>
            <v-footer class="mt-4 footer">
          <div class="mx-auto">&copy; {{ new Date().getFullYear() }} Kayar Inc. All rights reserved.</div>
        </v-footer> 
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>


<script>
export default {
    data: () => ({
      drawer: null,
      isValid: true,
      show1: false,
      username: '',
      password: '',
      snackbar: false,
      loading: false
    }),
    methods:{
      login(){
        this.loading = true
        this.$store.dispatch("Login", {
          "username": this.username,
          "password": this.password
        })
        .then((success)=>{
          console.log(success);
          this.loading = false
          if(success.roleId[0] == "Storekeeper"){
            this.$router.push('/storekeeper');
          }
          else if(success.roleId[0] == "Admin"){
            this.$router.push('/admin');
          }
          else{
            this.$router.push('/users');
          }
        })
        .catch((error)=>{
          console.log(error);
          this.loading = false
          this.snackbar = true;
        });
     
      }
    }
}
</script>


<style scoped>
.back{
/* background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(/manage.svg) ; */
background-size: cover;
}
.forgotSize{
    text-transform: capitalize;
}
.v-card:not(.v-sheet--tile) {
    /* border-radius: 10px; */
}
.icon-large{
    font-size: 80px;
}
.footer{
    padding: 15px 20px;
    border-radius: 5px;
}
.theme--light.v-footer {
    border: 1px solid #d8dee2;
    background-color: #f9f9f9;
}
</style>