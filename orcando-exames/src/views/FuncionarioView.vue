<template>
  <v-container fluid>
    <h1>Cadastre um novo funcionairo</h1>
    <FuncionarioFormEditar>
      <v-btn color="success" class="btn" @click="criarUsuario">
        Cadastrar
      </v-btn>
    </FuncionarioFormEditar>
    <ErroNotificacao :erros="erros"/>
  </v-container>
</template>

<script>
import FuncionarioFormEditar from "../components/FuncionarioFormEditar.vue";

export default {
  name: "FuncionarioView",
  components: {
    FuncionarioFormEditar,
  },
  data(){
    return{
      erros: [],
    }
  },
   methods: {
    async criarUsuario(){
      try{
        await this.$store.dispatch("criarUsuario", this.$store.state.usuario);
        await this.$store.dispatch("logarUsuario", this.$store.state.usuario);
      }
      catch(erro){
       this.erros.push(erro.response.data.message)
      }
    },
  },
  created(){
    this.limparForm()
  }
};
</script>

<style scoped>
  h1{
    text-align: center;
  }
  .btn{
    margin-left: 10px;
  }
</style>