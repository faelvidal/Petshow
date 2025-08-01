<template>
  <div class="veterinarian-container">
    <!-- Componente para exibir mensagens -->
    <message-display />
    
    <!-- Rota aninhada será renderizada aqui -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'VeterinarianIndex',
  // Você pode adicionar lógica compartilhada por todas as sub-rotas aqui
}
</script>

<style scoped>
.veterinarian-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>