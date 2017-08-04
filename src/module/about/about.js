import Vue from 'vue'
import About from '@/components/About'

Vue.config.productionTip = false

new Vue({
  render: h => h(About)
}).$mount('#about')
