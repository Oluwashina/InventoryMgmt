<template>
<div class="viewassets">
        <StoreNav/>
        <v-container>
             <v-row>
          <v-col
            cols="12"
            sm="8"
            md="6" v-for="assets in View" :key="assets.id">

            <v-card class="elevation-3 mb-5">

                <v-card-text>
                    <p>{{assets.Item_Name}}</p>
                </v-card-text>

                <v-card-text>
                    <p>{{assets.Item_Desc}}</p>
                </v-card-text>

                <v-card-text>
                    <P>{{assets.location}}</P>
                </v-card-text>
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

         }
     },
     computed:{
         View(){
             return this.$store.state.viewassets
         }
     }
    
}
</script>




<style scoped>

</style>