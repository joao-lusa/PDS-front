<template>
 <v-container>
    <h1>Editar exame {{nome}}</h1>
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
                <v-btn color="#E7B126" dark class="btn" @click="atualizarExames">
                  Editar
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
import { api } from '@/services'

export default {
  name:"ExameEditaId",
  data(){
    return{
      exame: {
        jejum: "",
        nome: "",
        preco: "",
        sigla: "",
        idFuncionario: window.localStorage.id,
      },
      nome: "",
      erros: []
    };
  },
  methods: {
    getExames(){
      api.get(`/exames/${window.localStorage.idExame}`).then(response =>{
        this.nome = response.data.nome
        this.exame.nome = response.data.nome;
        this.exame.preco = response.data.preco;
        this.exame.sigla = response.data.sigla;
        this.exame.jejum = response.data.jejum;
      });
    },
    atualizarExames(){
      api.put(`/exames/${window.localStorage.idExame}`, this.exame).then(() => {
        this.$store.dispatch("getExame");
        this.$router.push({name:"home"})
      }).catch(erro => {
         this.erros.push(erro.response.data.message)
      });
    }
  },
  created(){
    this.getExames();
  },
}
</script>

<style>

</style>