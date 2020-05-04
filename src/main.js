import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

import * as firebase from "firebase";
import {config} from './firebaseConfig'
import store from "./store";

Vue.use(Buefy)

Vue.config.productionTip = false

new Vue({
  router,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      store.dispatch("fetchUser", user);
    });
  },
  store,
  render: h => h(App)
}).$mount('#app')
