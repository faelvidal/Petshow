<template>
  <v-app>
    <!-- Barra de navegação -->
    <v-app-bar app color="teal lighten-2" dark>
      <v-toolbar-title>PetShow</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'Home' }" exact>Início</v-btn>
      <v-btn text :to="{ name: 'About' }">Sobre</v-btn>
      <v-btn text :to="{ name: 'AnimalList' }">Animais</v-btn>
      <v-btn text :to="{ name: 'VeterinarianList' }">Veterinários</v-btn>
    </v-app-bar>

    <!-- Conteúdo principal -->
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- Rodapé -->
    <v-footer color="teal lighten-2" dark app>
      <span class="white--text">&copy; 2025 PetShow</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
