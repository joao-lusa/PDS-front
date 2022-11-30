<template>
  <v-container>
    <h1>Editar Funcionario</h1>
    <FuncionarioForm>
      <v-btn class="btn" color="#E7B126" dark @click.prevent="atualizarFuncionario">Cadastrar</v-btn>
    </FuncionarioForm>
    <ErroNotificacao :erros="erros"/>
  </v-container>
</template>

<script>
import FuncionarioForm from "../components/FuncionarioForm.vue"
import {api} from "@/services.js"

export default {
  name:"FuncionarioEditarView",
  components:{
    FuncionarioForm
  },
  data(){
    return{
      erros: [],
    }
  },
  methods:{
    atualizarFuncionario(){
      api.put(`/funcionario/${this.$store.state.usuario.id}`, this.$store.state.usuario).then(() =>{
        this.$store.dispatch("getUsuario");
        this.$router.push({name:"home"})
      }).catch(erro => {
        this.erros.push(erro.response.data.message)
      });
    }
  }
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