<template>
  <v-container fluid>
    <h1>Cadastre um novo funcionairo</h1>
    <FuncionarioForm/>
    <ErroNotificacao :erros="erros"/>
  </v-container>
</template>

<script>
import FuncionarioForm from "../components/FuncionarioForm.vue";

export default {
  name: "FuncionarioView",
  components: {
    FuncionarioForm,
  },
};
</script>

<style scoped>
  h1{
    text-align: center;
  }
</style>