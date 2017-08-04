// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Home from '@/components/Home'
// import router from '@/router/index'

Vue.config.productionTip = false

require('../assets/css/common.css')

/* eslint-disable no-new */
new Vue({
  // router,
  render: h => h(Home)
}).$mount('#app')
