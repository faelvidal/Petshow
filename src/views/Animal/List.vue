<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Lista de Animais
            <v-spacer></v-spacer>
            <v-btn color="primary" to="/animals/create">Novo Animal</v-btn>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="animals"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editAnimal(item.id)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteAnimal(item.id)">
                mdi-delete
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AnimalList',
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nome', value: 'name' },
        { text: 'Espécie', value: 'species' },
        { text: 'Raça', value: 'breed' },
        { text: 'Idade', value: 'age' },
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      animals: [
        
        { id: 1, name: 'Rex', species: 'Cachorro', breed: 'Labrador', age: 3 },
        { id: 2, name: 'Mimi', species: 'Gato', breed: 'Siamês', age: 2 },
      ]
    }
  },
  methods: {
    editAnimal(id) {
      this.$router.push({ name: 'AnimalEdit', params: { id } })
    },
    deleteAnimal(id) {
      
      console.log('Excluir animal', id)
    }
  }
}
</script>