<template>
  <v-container>
    <v-row>
      <v-col cols="12">
      <v-card
          class="pa-5 card"
          
        >
         <p>{{text}}</p>
        <v-btn
              class="ma-2"
              color="primary"
              to="/"
                >
                  back
                </v-btn>

                
        </v-card>

       
       
       </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '../store'
  export default {
    name: 'Details',
    computed:{
      text(){
        return store.details
      }
    },
  }
</script>

<style>

.card {
    display: flex !important; 
    align-items: center;
    justify-content: space-evenly;
}

</style>
