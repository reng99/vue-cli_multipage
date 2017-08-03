import Vue from 'vue'
import About from '../../components/About'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#about',
  template: '<About/>',
  components: { About }
})
