<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        {{text}}

        <v-btn
              class="ma-2"
              color="primary"
              @click="back"
              to="/"
                >
                  back
                </v-btn>
       </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '../store'
  export default {
    name: 'Details',

    data: () => ({
      
    }),
    computed:{
      text(){
        return store.details
      }
    },
  }
</script>
