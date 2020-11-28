import '../node_modules/bulma/css/bulma.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import store from './store/store';


Vue.use(Buefy);
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
