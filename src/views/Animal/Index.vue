<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <!-- Abas para navegação -->
          <v-tabs v-model="tab">
            <v-tab to="/animais">Listar Animais</v-tab>
            <v-tab to="/animais/cadastrar">Cadastrar Animal</v-tab>
          </v-tabs>
          
          <!-- Área de conteúdo -->
          <v-card-text>
            <router-view></router-view>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AnimalIndex',
  data() {
    return {
      tab: null
    }
  }
}
</script>