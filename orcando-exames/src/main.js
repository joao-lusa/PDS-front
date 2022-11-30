import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import ErroNotificacao from './components/ErroNotificacao.vue'

Vue.config.productionTip = false

Vue.component("ErroNotificacao", ErroNotificacao);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
