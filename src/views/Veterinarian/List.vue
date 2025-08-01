<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Lista de Veterinários
            <v-spacer></v-spacer>
            <v-btn color="primary" to="/veterinarians/create">Novo Veterinário</v-btn>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="veterinarians"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editVeterinarian(item.id)">
                mdi-pencil
              </v-icon>
              <v-icon small @click="deleteVeterinarian(item.id)">
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
  name: 'VeterinarianList',
  data() {
    return {
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Nome', value: 'name' },
        { text: 'CRMV', value: 'crmv' },
        { text: 'Especialidade', value: 'specialty' },
        { text: 'Telefone', value: 'phone' },
        { text: 'Ações', value: 'actions', sortable: false },
      ],
      veterinarians: [
        // Exemplo de dados - substituir por chamada à API
        { id: 1, name: 'Dr. Silva', crmv: 'SP-12345', specialty: 'Clínico Geral', phone: '(11) 9999-8888' },
        { id: 2, name: 'Dra. Santos', crmv: 'SP-54321', specialty: 'Cirurgia', phone: '(11) 9777-6666' },
      ]
    }
  },
  methods: {
    editVeterinarian(id) {
      // Implementar edição
      console.log('Editar veterinário', id)
    },
    deleteVeterinarian(id) {
      // Implementar exclusão
      console.log('Excluir veterinário', id)
    }
  }
}
</script>