import Vue from 'vue'
import App from './App.vue'
import VueCut from '../lib/'

Vue.config.productionTip = false
Vue.use(VueCut)

new Vue({
  render: h => h(App),
}).$mount('#app')
