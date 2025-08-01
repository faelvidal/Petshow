<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Cadastrar Novo Animal</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="saveAnimal">
              <v-text-field v-model="animal.name" label="Nome" required></v-text-field>
              <v-text-field v-model="animal.species" label="Espécie" required></v-text-field>
              <v-text-field v-model="animal.breed" label="Raça"></v-text-field>
              <v-text-field v-model="animal.age" label="Idade" type="number"></v-text-field>
              <v-textarea v-model="animal.notes" label="Observações"></v-textarea>
              
              <v-btn color="primary" type="submit">Salvar</v-btn>
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
  name: 'AnimalCreate',
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
  methods: {
    saveAnimal() {
      // Implementar lógica para salvar o animal
      console.log('Animal salvo:', this.animal)
      this.$router.push('/animals')
    }
  }
}
</script>