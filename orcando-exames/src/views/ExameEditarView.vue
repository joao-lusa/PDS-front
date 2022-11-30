<template>
  <v-container fluid>
    <h1>Editar Exames</h1>
    <ExameBuscar/>

    <ExameListaEditar/>
  </v-container>
</template>

<script>
import ExameListaEditar from "../components/ExameListaEditar.vue";
import ExameBuscar from "../components/ExameBuscar.vue"

export default {
  name:"exameEditarView",
  components: {
    ExameListaEditar,
    ExameBuscar
  }
};
</script>

<style>
</style>