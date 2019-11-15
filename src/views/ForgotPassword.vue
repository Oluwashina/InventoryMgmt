<template>
  <v-app id="forgot" class="back">
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
            md="6"
          >
            <v-card class="elevation-10"  color="#D7E9FB">
                <v-card-text class="text-center">
                <v-img src="/Icon125.svg" max-width="100"
      max-height="100" aspect-ratio="1" class="mx-auto"></v-img>
                </v-card-text>
                <v-snackbar v-model="snackbar" :timeout="4000" top color="error">
                  <span>Invalid Credentials...</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>

                <v-card-text class="text-center">
                    <h1 class="forgot-color">Forgot Password</h1>
                    <p class="forgot-color size my-4">A verification email with link will be sent to the mailbox provided.
                       Kindly follow the link to proceed</p>               
                </v-card-text>

                <v-container>
                <v-card-text>
                    <v-form>
                  <v-text-field
                    label="Enter your email address"
                    v-model="email" :rules="emailRules" 
                    prepend-inner-icon="mdi-email"
                    type="text" single-line
                    solo required
                  ></v-text-field>
                    </v-form>
                </v-card-text>
                </v-container>
                <v-card-text class="text-center mb-3">
                <v-btn color="#1976D2" class="white--text" v-on:click="reset()">Reset
                </v-btn>
                </v-card-text>

                <v-list-item>
                 <v-btn text color="#1976D2" class="" router-link to="/">
                    <v-icon left>mdi-chevron-left</v-icon>
                        Back to Login
                </v-btn>
                </v-list-item>
        
              
       
            </v-card>
          </v-col>
        </v-row> 
      </v-container>
    </v-content>
  </v-app>
    
</template>

<script>
export default {
    data(){
        return{
            email: '',
            username: '',
            snackbar: false,
             emailRules: [
               v => !!v || 'E-mail is required',
               v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
        }
    },
    methods:{
        reset(){
        this.$store.dispatch("Reset", {
          "email": this.email
        })
        .then((success)=>{
            console.log(success);
             alert("Password sent to your email address!!!");
        })
        .catch((error)=>{
            console.log(error);
            this.snackbar = true;
        })
        }
    }
}
</script>

<style scoped>
.back{
background-image: linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)),url(/manufacturing-header-icon.svg) ;
background-size: cover;
}
.v-card:not(.v-sheet--tile) {
    border-radius: 28px;
}
.forgot-color{
 color:#5F5D5D;   
}
.size{
    font-size: 15px;
}
</style>