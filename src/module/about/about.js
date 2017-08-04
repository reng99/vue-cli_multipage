import Vue from 'vue'
import About from '@/components/About'

Vue.config.productionTip = false

require('../../assets/css/common.css')

new Vue({
  render: h => h(About)
}).$mount('#about')
