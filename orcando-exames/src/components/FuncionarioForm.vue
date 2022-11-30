<template>
  <v-container>
    <v-card color="#F5F2F2" elevation="5" class="card">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="nome"
                  :counter="10"
                  label="Nome Completo"
                  required
                ></v-text-field>
              </v-col>
               <v-col cols="12" md="6">
                <v-text-field
                  v-model="login"
                  :counter="10"
                  label="Nome de login"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="senha"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :type="show1 ? 'text' : 'password'"
                  label="Senha"
                  hint="Pelo menos 8 caracteres"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="cpf"
                  :counter="10"
                  label="CPF"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="email"
                  :counter="10"
                  label="Email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="telefone"
                  :counter="10"
                  label="Telefone"
                  required
                ></v-text-field>
              </v-col>
              <slot></slot>
              <v-btn class="btn" color="red" dark @click.prevent="limparForm">Limpar</v-btn>
            </v-row>
          </v-container>
        </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { mapFields } from "@/helpers.js";

export default {
  name:"FuncionarioFrom",
  data(){
    return {
      show1: false,
      limpar: ""
    } 
  },
  computed:{
    ...mapFields({
      fields: [
       "nome",
       "login",
       "senha", 
       "cpf", 
       "email", 
       "telefone"
      ],
      base: "usuario",
      mutation: "UPDATE_USUARIO"
    })
  },
  methods:{
    limparForm(){
      this.nome = this.limpar
      this.login = this.limpar
      this.senha = this.limpar
      this.cpf = this.limpar
      this.email = this.limpar
      this.telefone = this.limpar
    }
  },
  created(){
    this.senha = this.limpar
  }
}
</script>

<style scoped>
  .card{
    height: 350px !important;
  }
  .btn{
    margin-left: 10px;
  }
  @media screen and (max-width: 959px){
   .card{
      height: 650px !important;
    }
  }
</style>