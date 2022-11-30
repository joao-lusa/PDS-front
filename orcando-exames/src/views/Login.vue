<template>
  <v-container class="login" fluid>
    <v-card height="400" color="grey lighten-4" elevation="5" class="card">
      <v-col cols="12" md="12">
        <h2>LOGIN</h2>
      </v-col>
      <v-form v-model="valid">
        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="login.login"
                :counter="10"
                label="Nome de login"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="12">
              <v-text-field
                v-model="login.senha"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :type="show1 ? 'text' : 'password'"
                label="Senha"
                hint="Pelo menos 8 caracteres"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-btn 
                color="success" 
                class="btn" 
                max-width="200"
                width="200"
                @click.prevent="logar">
                Entrar
              </v-btn>
            </v-col>
              <ErroNotificacao :erros="erros"/>

          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      show1: false,
      valid: false,
      login: {
        login: "",
        senha: "",
      },
      erros: [],
    };
  },
  methods: {
    logar() {
      this.erros = []
      this.$store.dispatch("logarUsuario", this.login)
      .then(() => {
        this.$store.dispatch("getUsuario");
        this.$router.push({ name: "home" });
      }).catch(erro => {
        this.erros.push(erro.response.data.message)
      });
    }
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
}
.btn{
  margin-left: 26%;
}
.login {
  max-width: 500px;
  margin: 0px auto;
  padding: 0 20px;
}
.card {
  margin-top: 20%;
}
@media screen and (max-width: 959px){
  .btn{
    margin-left: 15%;
  }
}
</style>