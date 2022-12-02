<template>
  <v-container>
    <v-row justify="center">
      <v-card height="500" width="500" color="#F5F2F2" elevation="5" class="card">
        <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                  Nome
              </th>
              <th class="text-left">
                Valor
              </th>
              <th>
                Adicionar
              </th>
            </tr>
          </thead>
            <tbody>
              <tr
              v-for="exame in exames" :key="exame.id"
              >
                <td class="p">{{ exame.nome }}</td>
                <td>{{ `R$${exame.preco}` }}</td>
                <td> 
                  <v-btn
                    color="#E7B126" 
                    dark
                    class="btn"
                    @click.prevent="mandarExameEditar(exame.id)"
                  >
                    Editar
                  </v-btn>
                  <v-btn color="red" dark class="deletar" @click="deletarExame(exame.id)">
                  Excluir
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card>
    </v-row>
    <v-container class="pagina">
      <v-row justify="center">
        <v-col cols="8">
          <v-container class="max-width">
            <v-pagination
              v-model="page"
              :length="totalPage"
            ></v-pagination>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import {api} from "@/services.js"
import { serialize } from "@/helpers.js";


export default {
  name: "ExameListaEditar",
   data(){
    return {
      exames: null,
      examesPorPagina: 7,
      totalPage:0,
      page: 1
    };
  },
  computed: {
    url(){
      const query = serialize(this.$route.query);
      return `/exames?pagina=${this.page}&qtd=${this.examesPorPagina}${query}`
    }
  },
  methods: {
    getExames(){
      api.get(this.url).then(response => {
        this.totalPage = Number(response.data.totalPages)
        this.exames = response.data.content;
      });
    },
    deletarExame(id){
      const confirmar = window.confirm("Deseja remover este Exame?");
      if(confirmar){
        api.delete(`/exames/${id}`).then(() => {
          this.getExames();
        }).catch(error => {
          console.log(error.response)
        });
      }
    },
    mandarExameEditar(id){
      window.localStorage.idExame = id
      this.$router.push({ name: "exameEditar" });
    }
  },
  watch: {
    url(){
      this.getExames();
    }
  },
  created(){
    this.getExames();
  }
};
</script>

<style scoped>
.btn{
  margin-right: 5px;
}
.p{
  max-width: 15ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.pagina{
  max-width: 50%;
}
@media screen and (max-width: 502px){
  .pagina{
    margin-top: 175px;
  }
  .btn{
    margin-bottom: 5px;
    margin-top: 5px;
  } 
  .deletar{
    margin-bottom: 5px;
  }
  .pagina{
    max-width: none;
  }
}
</style>
