import Vue from 'vue'
import VueRouter from 'vue-router'
import Funcionario from '../views/FuncionarioView.vue'
import examesView from '../views/ExameView.vue'
import examesEditar from '../views/ExameEditarView.vue'
import exameEditaId from '../views/ExameEditaId.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import FuncionarioEditar from "../views/FuncionarioEditarView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/funcionario',
    name: 'Funcionario',
    component: Funcionario
  },
  {
    path: "/FuncionarioEditar",
    name: "FuncionarioEditar",
    component: FuncionarioEditar
  },
  {
    path: '/exame',
    name: 'Exames',
    component: examesView
  },
  {
    path: '/exameEditar',
    name: 'ExamesEditar',
    component: examesEditar,
  },
  {
    path: '/exameEditarId',
    name: 'exameEditar',
    component: exameEditaId,
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: "/home",
    name: 'home',
    component: Home,
    meta: {
      login: true, 
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
