<template>
  <div>
    <div id="home">
      <button @click="add">送信</button>
      <div v-for="{data, index} in $store.state.user" :key="index"></div>
      <p>{{data.name}}</p>
      <p>{{data.age}}</p>
      <button @click="changeUser">変更</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    add() {
      var db = firebase.firestore();
      db.collection("users")
        .add({
          name: "太郎",
          age: 20
        })
        .then(doc => {
          console.log(doc);
        });
    },

    changeUser() {
      this.$store.dispatch("changeUserAction", {
        user: this.users
      });
    },
    get() {
      var db = firebase.firestore();
      db.collection("users")
        .get()
        .then(query => {
          query.forEach(doc => {
            var data = doc.data();
            this.users.push(data);
          });
        });
    }
  },
  created() {
    this.get();
  }
};
</script>
