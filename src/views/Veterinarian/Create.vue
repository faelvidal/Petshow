<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>Cadastrar Novo Veterinário</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="saveVeterinarian">
              <v-text-field v-model="veterinarian.name" label="Nome Completo" required></v-text-field>
              <v-text-field v-model="veterinarian.crmv" label="CRMV" required></v-text-field>
              <v-text-field v-model="veterinarian.specialty" label="Especialidade"></v-text-field>
              <v-text-field v-model="veterinarian.phone" label="Telefone"></v-text-field>
              <v-text-field v-model="veterinarian.email" label="E-mail" type="email"></v-text-field>
              
              <v-btn color="primary" type="submit">Salvar</v-btn>
              <v-btn text to="/veterinarians">Cancelar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'VeterinarianCreate',
  data() {
    return {
      veterinarian: {
        name: '',
        crmv: '',
        specialty: '',
        phone: '',
        email: ''
      }
    }
  },
  methods: {
    saveVeterinarian() {
      // Implementar lógica para salvar o veterinário
      console.log('Veterinário salvo:', this.veterinarian)
      this.$router.push('/veterinarians')
    }
  }
}
</script>