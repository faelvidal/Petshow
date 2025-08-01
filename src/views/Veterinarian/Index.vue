<template>
  <div class="veterinarian-container">
    
    <message-display />
    
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'VeterinarianIndex',
  
}
</script>

<style scoped>
.veterinarian-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>