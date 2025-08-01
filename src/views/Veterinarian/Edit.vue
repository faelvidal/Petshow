<template>
  <div class="veterinarian-edit">
    <h1>Editar Veterinário</h1>
    
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label>Nome</label>
        <input v-model="form.name" type="text" class="form-control" required>
      </div>
      
      <div class="form-group">
        <label>CRMV</label>
        <input v-model="form.crmv" type="text" class="form-control" required>
      </div>
      
      <div class="form-group">
        <label>Especialidade</label>
        <input v-model="form.specialty" type="text" class="form-control" required>
      </div>
      
      <button type="submit" class="btn btn-primary">Salvar</button>
      <router-link :to="{ name: 'VeterinarianList' }" class="btn btn-secondary">
        Cancelar
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  name: 'VeterinarianEdit',
  props: ['id'], // Recebe o ID da rota
  data() {
    return {
      form: {
        name: '',
        crmv: '',
        specialty: ''
      }
    }
  },
  async created() {
    // Carrega os dados do veterinário para edição
    // const vet = await api.getVeterinarian(this.id);
    // this.form = { ...vet };
  },
  methods: {
    async submitForm() {
      try {
        // Aqui você faria a chamada à API para atualizar o veterinário
        // await api.updateVeterinarian(this.id, this.form);
        this.$router.push({ name: 'VeterinarianList' });
      } catch (error) {
        console.error('Erro ao atualizar veterinário:', error);
      }
    }
  }
}
</script>