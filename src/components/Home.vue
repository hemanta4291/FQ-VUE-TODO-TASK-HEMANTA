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

        <v-data-table :headers="headers" :items="itemsWithIndex" :items-per-page="5">

            <template v-slot:item="row">
            
              <tr class="table-custom">
               <td class="flex">
               <v-checkbox
                  v-model="row.item.done"
                  hide-details
                  class="shrink mr-2 mt-0"
                ></v-checkbox>
               <p :class="{ done : row.item.done}">{{ row.item.name }}</p>
              </td>
              <td><v-btn
              class="ma-2"
              color="secondary"
              @click="edit(row.item.name,row.item.index)"
                >
                  Edit
                </v-btn>
                <v-btn
              class="ma-2"
              color="primary"
              @click="ViewItem(row.item.name)"
                >
                  View
                </v-btn>
             <v-btn
             class="ma-2"
              color="error"
              @click="deleteItem(row.item.index)"
            >
              Delete
            </v-btn></td>
              
              </tr>
          </template>
         
        </v-data-table>
      </v-col>




      <v-dialog
        v-model="dialog"
        max-width="500px"
      >
        <v-card>
          <v-card-title>
            Edit
          </v-card-title>
          <v-card-text>
            <v-text-field
          label="Main input"
          :rules="rules"
          v-model="todoeditText"
          hide-details="auto"
          @keydown.enter="update"
        ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn
              color="primary"
              text
              @click="dialog = false"
            >
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-container>
</template>

<script>
import { store } from '../store'
  export default {
    name: 'HelloWorld',

    data(){
      return {
        todoIndex: null,
        todoeditText:'',
        dialog:false,
        textDecoration: false,
        todoText: '',
        headers: [
                    { text: 'Name', value: 'Name' },
                    { text: 'Action', value: 'Action'},
                ],
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
      
      }
    },
    computed:{
      itemsWithIndex() {
        return this.data.map(
          (data, index) => ({
            ...data,
            index: index
          }))
      },
      data(){
        return store.data
      }
    },
    methods:{
      submit(){
          store.data.push({
            name:this.todoText,
            done:false
          })
          this.todoText = ''
         console.log(this.data)
        },
        // edit
        edit(item,index){
          this.todoeditText = item
          this.todoIndex = index
          console.log(item)
          this.dialog = true
        },
        //update
        update(){
          store.data.splice(this.todoIndex , 1, {name:this.todoeditText,done:false})
          this.todoeditText = ''
          this.dialog = false
         
        },
        deleteItem(index){
          store.data.splice(index,1)
        },
        ViewItem(item){
          this.$router.push({ name: 'Details' })
          store.details = item
          localStorage.setItem('details', item);
        }
    }
  }
</script>

<style>
.done{
  text-decoration: line-through;
}
.table-custom td{
   width: 50%
}

.table-custom .flex {
    display: flex;
    align-items: center;
}

.table-custom .flex p{
  margin-bottom:0;
}

</style>
