<template>
<div class="viewassets">
        <StoreNav/>
        <v-container>
        <h2 class="subheading mx-5 my-2 header-color">BATCH ASSET</h2>
        <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
                  <span>Assets successfully added..</span>
                     <v-btn text color="white" @click="snackbar = false">Close</v-btn>
                </v-snackbar>
         <v-row>
          <v-col
            cols="12"
            sm="12"
            md="12">
             <v-card class="elevation-1" color="white">
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        sm="12"
                        md="12">
                        <p>Kindly upload a csv format eg 'assets.csv' and follow this format Name, Description, Quantity, Categories, Location, Serial Numbers, Brought By, Received By,Status, Comment etc.. or download the template below as a guide.</p>
                    </v-col>
                </v-row>
                 <v-row>
                    <v-col
                        cols="12"
                        sm="12"
                        md="12">
                        <a href="/assets.csv" download>Download Template</a>
                    </v-col>
                 </v-row>
                 <v-row>
                    <v-col
                        cols="12"
                        sm="6"
                        md="6">
                    <v-file-input
                            accept=".csv"
                            placeholder="Choose File e.g 'assets.csv'"
                            color="#5F5D5D" 
                            @change="loadTextFromFile($event)"
                            outlined dense
                        ></v-file-input>
                    </v-col>
                 </v-row>
                    <v-card-text>
                    <v-btn color="#1976D2" class="white--text mb-8" :loading="loading" v-on:click="Create()">Create Asset
                    </v-btn>
              </v-card-text>
                 </v-container>
             </v-card>
          </v-col>
         </v-row>

        </v-container>
</div>
    
</template>


<script>
import StoreNav from '../components/StoreNav'
export default {
 components: {
        StoreNav
     },
     data(){
         return{
             file: '',
             snackbar:  false,
             loading: false
         }
     },
     methods:{
        loadTextFromFile(ev) {
        console.log(ev)
        this.file = ev;
        console.log(this.file);
    //    const reader = new FileReader();
    //    reader.readAsText(ev);
    //    console.log(reader);
        },
        Create(){
         this.loading = true;
         this.$store.dispatch("BatchAsset", {
           csvDoc: this.file
        })
        .then((success)=>{
           console.log(success);
           this.loading = false
           this.snackbar = true;
        })
        .catch((error)=>{
           console.log(error);
        });
     }
    }
}
</script>


<style scoped>
.viewassets{
   background-color: #CAD8E6;
  background-size: cover;
  height: 100%;
}
.header-color{
     color:#5F5D5D;
}
</style>