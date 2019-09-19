import Vue from 'nativescript-vue'
import App from './components/App'

import VueDevtools from 'nativescript-vue-devtools'
import store from './store'

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

var firebase = require("nativescript-plugin-firebase");
firebase
  .init({
    // Optionally pass in properties for database, authentication and cloud messaging,
    // see their respective docs.
  })
  .then(
    function(instance) {
      console.log("firebase.init done");
    },
    function(error) {
      console.log("firebase.init error: " + error);
    }
  );

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
