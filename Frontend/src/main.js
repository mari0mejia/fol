import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false


// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDe9dPHXRbI4I12vFhLibaFLOo4MP84Iow",
  authDomain: "vue-fol.firebaseapp.com",
  projectId: "vue-fol",
  storageBucket: "vue-fol.appspot.com",
  messagingSenderId: "772937979464",
  appId: "1:772937979464:web:5ea27b9f080dac15c72a7d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//make sure auth state change is correct
let app;
firebase.auth().onAuthStateChanged(nextobserver=>{
  console.log(nextobserver);
  if(!app){
    app=new Vue({
    router,
    store,
    render: h => h(App)
    }).$mount('#app')
  }
})

