import Vue from 'vue'
import Vuex from 'vuex'
import { api } from "@/services.js"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    login: false,
    usuario: {
      id: "",
      nome: "",
      login: "",
      senha: "",
      cpf: "",
      email: "",
      telefone: ""
    },
    exames: null
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_EXAME(state, payload){
      state.exames = payload;
    },
    ADD_EXAME(state, payload){
      state.exames.unshit(payload);
    }
  },
  actions: {
    getExames(context) {
      api.get(`/exames`).then(response => {
        context.commit("UPDATE_EXAME", response.data);
      })
    },
    getUsuario(context) {
      return api.get(`/funcionario/${window.localStorage.id}`).then(response => {
        context.commit("UPDATE_USUARIO", response.data);

        context.commit("UPDATE_LOGIN", true);
      })
    },
    criarUsuario(context, payload) {
      context.commit("UPDATE_USUARIO", { id: payload.id });
      return api.post("/funcionario", payload);
    },
    logarUsuario(context, payload) {
      return api.login({
        login: payload.login,
        senha: payload.senha
      }).then(response => {
        window.localStorage.token = `Bearer ${response.data.token}`
        window.localStorage.id = response.data.id
      })
    },
    deslogarUsuario(context) {
      context.commit("UPDATE_USUARIO", {
        id: "",
        nome: "",
        login: "",
        senha: "",
        cpf: "",
        email: "",
        telefone: ""
      });
      window.localStorage.removeItem("token")
      context.commit("UPDATE_LOGIN", false);
    }
  },
})
