<template>
  <v-container>
    <h1>Editar Funcionario</h1>
    <FuncionarioFormEditar/>
    <ErroNotificacao :erros="erros"/>
  </v-container>
</template>

<script>
import FuncionarioFormEditar from "../components/FuncionarioFormEditar.vue"

export default {
  name:"FuncionarioEditarView",
  components:{
    FuncionarioFormEditar
  },
  data(){
    return{
      erros: [],
    }
  },
}
</script>

<style>
 h1{
    text-align: center;
  }
  .btn{
    margin-left: 10px;
  }
</style>