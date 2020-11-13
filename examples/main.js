import Vue from 'vue'
import App from './App.vue'
import UfButton from '../packages/button/index'
Vue.config.productionTip = false
Vue.use(UfButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
