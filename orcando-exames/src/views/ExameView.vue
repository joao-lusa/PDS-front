<template>
  <v-container fluid>
    <h1>Cadastre seus exames</h1>
    <ExamesForm/>
  </v-container>
</template>

<script>
import ExamesForm from "../components/ExamesForm.vue"
export default {
  name:"ExameView",
  components:{
    ExamesForm
  },
}
</script>

<style>

</style>
