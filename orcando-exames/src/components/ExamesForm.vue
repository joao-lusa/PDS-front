<template>
   <v-container>
    <v-card height="450" color="#F5F2F2" elevation="5" class="card">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="12" md="12">
                <v-text-field
                  v-model="exame.nome"
                  label="Nome do exame"
                  required
                ></v-text-field>
              </v-col>
               <v-col cols="12" md="12">
                <v-text-field
                  v-model="exame.preco"
                  label="preço"
                  required
                ></v-text-field>
              </v-col>
               <v-col cols="12" md="12">
                <v-text-field
                  v-model="exame.sigla"
                  :counter="3"
                  label="Silga"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                 <v-text-field
                  v-model="exame.jejum"
                  :counter="3"
                  label="Jejum"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="12">
                <v-btn color="success" dark class="btn" @click.prevent="criarExame">
                  Cadastrar
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
    </v-card>
    <ErroNotificacao :erros="erros"/>
  </v-container>
</template>

<script>
import { api } from '@/services';

export default {
  name:"ExamesForm",
  data(){
    return {
      exame: {
        nome: "",
        preco: "",
        sigla: "",
        jejum: "",
        idFuncionario: ""
      },
      erros: [],
    };
  },
  methods: {
    formatarExame(){
      this.exame.idFuncionario = window.localStorage.id
    },
    criarExame(){
      this.formatarExame();
      api.post("/exames", this.exame).then(() => {
        this.$store.dispatch("getExames");
        this.$router.push({name:"home"})
      }).catch(erro => {
        this.erros.push(erro.response.data.message)
      });
    },
  },
};
</script>

<style>

</style>