<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Editar Animal</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="updateAnimal">
              <v-text-field v-model="animal.name" label="Nome" required></v-text-field>
              <v-text-field v-model="animal.species" label="Espécie" required></v-text-field>
              <v-text-field v-model="animal.breed" label="Raça"></v-text-field>
              <v-text-field v-model="animal.age" label="Idade" type="number"></v-text-field>
              <v-textarea v-model="animal.notes" label="Observações"></v-textarea>
              
              <v-btn color="primary" type="submit">Atualizar</v-btn>
              <v-btn text to="/animals">Cancelar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AnimalEdit',
  props: ['id'],
  data() {
    return {
      animal: {
        name: '',
        species: '',
        breed: '',
        age: '',
        notes: ''
      }
    }
  },
  created() {
    // Buscar animal pelo ID e preencher o formulário
    this.fetchAnimal(this.id)
  },
  methods: {
    fetchAnimal(id) {
      // Implementar busca do animal por ID
      console.log('Buscar animal com ID:', id)
      // Exemplo com dados mockados
      this.animal = {
        id: id,
        name: 'Rex',
        species: 'Cachorro',
        breed: 'Labrador',
        age: 3,
        notes: 'Animal muito brincalhão'
      }
    },
    updateAnimal() {
      // Implementar lógica para atualizar o animal
      console.log('Animal atualizado:', this.animal)
      this.$router.push('/animals')
    }
  }
}
</script>