<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>PetShow</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text :to="{ name: 'Home' }" exact>Início</v-btn>
      <v-btn text :to="{ name: 'About' }">Sobre</v-btn>
      <v-btn text :to="{ name: 'AnimalList' }">Animais</v-btn>
      <v-btn text :to="{ name: 'VeterinarianList' }">Veterinários</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer color="primary" app>
      <span class="white--text">&copy; 2025 PetShow</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>