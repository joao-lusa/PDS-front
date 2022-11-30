<template>
  <v-container fluid class="busca">
    <v-row justify="center">
      <v-col cols="8" md="8" fluid>
        <v-text-field 
          label="Nome do exame"
          v-model="busca"
          required
        ></v-text-field>
      </v-col>  
      <v-col cols="4" md="4">
        <v-btn class="lupa"
          depressed 
          color="success" 
          @click.prevent="buscarExames">            
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name:"ExameBuscar",
  data(){
    return{
      busca: ""
    }
  },
  methods: {
    buscarExames() {
      this.$router.push({query: {nome: this.busca}});
    }
  }

}
</script>

<style scoped>
.busca {
  max-width: 500px;
  margin: 0px, auto;
  padding: 0 20px;
  margin-top: 40px;
}
.lupa{
  margin-top: 10px;
}

@media screen and (max-width: 960px){
  .lupa{
    margin-left: 40%;
    margin-top: 0px;
  }
  .col-md-8{
    padding: 0px;
  }
}
</style>