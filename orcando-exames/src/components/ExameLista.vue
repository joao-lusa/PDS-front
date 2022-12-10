<template>
  <v-container >
    <v-row justify="center">
        <v-card height="385" width="500" color="#F5F2F2" elevation="5" class="card" >
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
                <th >
                  Adicionar
                </th>
              </tr>
            </thead>
              <tbody>
                <tr
                v-for="exame in exames" :key="exame.id"
                >
                  <td class="p">{{ exame.nome }}</td>
                  <td>{{ `${exame.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}` }}</td>
                  <td> 
                    <v-btn color="success" dark class="btn" @click.prevent="examePrecicar(exame.id)">
                      Adicionar
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-row>
        <v-container class="max-pagina">
          <v-row justify="center">
            <v-col cols="6">
              <v-container class="max-width">
                <v-pagination
                  v-model="page"
                  :length="totalPage"
                ></v-pagination>
              </v-container>
            </v-col>
          </v-row>
      </v-container>

      <v-container>
        <v-row justify="center">
          <v-card height="400" width="500" outlined color="#F5F2F2" class="card">
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
                  </tr>
                </thead>
                <tbody>
                  <tr
                  v-for="exame in examesPrecifica" :key="exame.id"
                  >
                    <td>{{ exame.nome }}</td>
                    <td>{{ `R$${exame.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}` }}</td>
                  </tr>
                  <tr>
                    <td>Valor Total</td>
                    <td>{{`${valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
    </v-row>
  </v-container>
  </v-container>
</template>

<script>
import {api} from "@/services.js"
import { serialize } from "@/helpers.js";

export default {
  name:"ExameLista",
  data(){
    return {
      exames: null,
      examesPorPagina: 7,
      totalPage:0,
      page: 1,
      examesPrecifica: [],
      valorTotal: 0,
    };
  },
  computed: {
    url(){
      const query = serialize(this.$route.query);
      return `/exames?pagina=${this.page}&qtd=${this.examesPorPagina}${query}`
    },
  },
  methods: {
    getExames(){
      api.get(this.url).then(response => {
        this.totalPage = Number(response.data.totalPages)
        this.exames = response.data.content;
      });
    },
    examePrecicar(id){
      api.get(`/exames/${id}`).then(response => {
          this.examesPrecifica.push(response.data);
           this.valorTotal += response.data.preco;
      })
    },
  },
  watch: {
    url(){
      this.getExames();
    }
  },
  created(){
    this.getExames();
  }
}
</script>

<style scoped>
.p{
  max-width: 15ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.max-pagina{
  max-width: 50%;
}
@media screen and (max-width: 502px){
  .max-pagina{
    max-width: none;
}
}
</style>