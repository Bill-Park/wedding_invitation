import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { analytics } from './boot/firebase'
import VueClipboard from 'vue-clipboard2'
import Meta from 'vue-meta'

Vue.config.productionTip = false
Vue.prototype.$analytics = analytics
VueClipboard.config.autoSetContainer = true // add this line
Vue.use(VueClipboard)
Vue.use(Meta)

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
}).$mount('#app')
