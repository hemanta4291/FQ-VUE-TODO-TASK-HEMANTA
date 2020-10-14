<template>
  <v-container>
   <v-row>
    <v-col>
      <v-text-field
      label="Main input"
      :rules="rules"
      v-model="todoText"
      hide-details="auto"
      @keydown.enter="submit"
    ></v-text-field>
    </v-col>
   </v-row>
    <v-row>
      <v-col>

        <v-simple-table>
          <tbody>
            <tr
              v-for="(item, index) in data"
              :key="index"
            >
              <td>{{ item.name }}</td>
              <v-btn
              class="ma-2"
              color="primary"
              @click="ViewItem(item)"
                >
                  View
                </v-btn>
             <v-btn
             class="ma-2"
              color="error"
              @click="deleteItem(index)"
            >
              Delete
            </v-btn>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '../store'
  export default {
    name: 'HelloWorld',

    data(){
      return {
        todoText: '',
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      
      }
    },
    computed:{
      data(){
        return store.data
      }
    },
    methods:{
      submit(){
          store.data.push({
            name:this.todoText
          })
          this.todoText = ''
          console.log(this.todoText)
        },
      deleteItem(index){
        this.data.splice(index,1)
      },
      ViewItem(item){
        this.$router.push({ name: 'Details' })
        store.details = item.name
        localStorage.setItem('details', item.name);
      }
    }
  }
</script>
