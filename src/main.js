import Vue from 'vue'
import App from './App.vue'

import Vuelidate from 'vuelidate'

//Plugins
Vue.use(Vuelidate)

import './assets/scss/main.scss'

new Vue({
  el: '#app',
  render: h => h(App)
})
