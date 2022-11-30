<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" color="cyan darken-4" app>
      <v-list-item to="/home" link>
        <v-list-item-content class="textoBranco">
          <v-list-item-title class="text-h7">
            <b>ORÇANDO EXAMES</b>
          </v-list-item-title>
          <v-list-item-title> Lab. São João </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <separador-navegacao titulo="Cadastrar"></separador-navegacao>

      <v-list dense nav v-if="$store.state.login">
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="textoBranco">{{
              item.title
            }}</v-list-item-title>
            <div class="separar"></div>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <separador-navegacao titulo="Editar"></separador-navegacao>

      <v-list dense nav v-if="$store.state.login">
        <v-list-item v-for="item in itemEdita" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon dark>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="textoBranco">{{
              item.title
            }}</v-list-item-title>
            <div class="separar"></div>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>

    <v-app-bar color="cyan darken-4" app>
      <v-app-bar-nav-icon dark @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title class="textoBranco">
        <v-icon class="atomo" size="40" dark>mdi-atom</v-icon>
        <v-item class="logo">LABORATÓRIO SÃO JOÃO</v-item>
      </v-toolbar-title>
      <v-spacer></v-spacer>
  
      <v-btn icon dark v-if="$store.state.login" @click.prevent="deslogar">
        <v-icon v-icon>mdi-logout-variant</v-icon>
      </v-btn>
      <v-btn icon dark to="/login" v-else link>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    
    </v-app-bar>

    <v-main>
      <v-container>
        <v-slide-x-transition mode="out-in">
          <router-view></router-view>
        </v-slide-x-transition>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SeparadorNavegacao from "./components/SeparadorNavegacao.vue";
export default {
  components: {
    SeparadorNavegacao,
  },
  data: () => ({
    drawer: true,
    items: [
      {
        title: "Funcionario",
        icon: "mdi-account-multiple-plus",
        to: "/funcionario",
      },
      {
        title: "Exame",
        icon: "mdi-clipboard-check-multiple-outline",
        to: "/exame",
      },
    ],
    itemEdita:[
      {
        title: "Funcionario",
        icon: "mdi-account-edit",
        to: "/FuncionarioEditar",
      },
      {
        title: "Exame",
        icon: "mdi-water-outline",
        to: "/exameEditar",
      }
    ]
  }),
  methods: {
    deslogar() {
      this.$store.dispatch("deslogarUsuario");
      this.$router.push("/login");
    }
  },
  created(){
    if(window.localStorage.token){
      this.$store.dispatch("getUsuario")
    }
  }
};
</script>

<style>
#inspire{
  background: none;
}
body{
  background-image: url("./assets/design.png");
  background-size: cover;
}
.separar {
  height: 35px;
}
.atomo{
  margin-bottom: 5px;
}
.textoBranco {
  color: #ffff !important;
}
</style>