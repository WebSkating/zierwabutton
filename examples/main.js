import Vue from 'vue'
import App from './App.vue'
import ufcomponents from '../packages/index' //{ UfButton }
Vue.config.productionTip = false
Vue.use(ufcomponents)

new Vue({
  render: h => h(App),
}).$mount('#app')
