import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;
const config = {
  apiKey: "AIzaSyD4gMoi7w_-s8JCtOzanPtrT-hzZYjud48",
  projectId: "test-f36fd",
  authDomain: "test-f36fd.firebaseapp.com",
  detabaseURL: "https://test-f36fd.firebaseio.com",
  storageBucket: "test-f36fd.appspot.com",
};

firebase.initializeApp(config);
export default firebase;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
