<template>
  <div>
    <!-- Logged in
    <div v-if="loggedIn">Yes</div>
    <div v-else>No</div>
    <button class="but" @click="signOut">Sign out</button> -->
    <section class="header">
      <h1>Fruits Of Love</h1>
      <h2>Yoga University</h2>
      <p>Where we help you become the best you can be</p>
      <button class="btn-bgstroke">Get to Know Us</button>
      <br />
      <button v-if="isLoggedIn" class="btn-bgstroke" @click="signOut">
        Sign Out
      </button>
    </section>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "top-header",
  mounted() {
    this.setupFirebase();
  },
  computed: {
    isLoggedIn() {
      return this.loggedIn;
    },
  },
  methods: {
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          console.log("signed in");
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          console.log("signed out", this.loggedIn);
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    },
  },
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>

<style lang="scss">
div {
  color: inherit;
}
@import url(https://fonts.googleapis.com/css?family=Lato:400,300,100,700,900);

* {
  padding: 0;
  margin: 0;
}
h1,
h2,
p,
a {
  margin: 0;
  padding: 0;
  font-family: "Lato";
}

h1 {
  font-size: 2.8em;
  padding: 10px 0;
  font-weight: 800;
}

p {
  font-size: 1.1em;
  font-weight: 100;
  letter-spacing: 5px;
}
body {
  background-color: rgb(211, 211, 87);
}

.header {
  width: 100%;
  padding: 60px 0;
  text-align: center;
  background: #3aaf4d;
  color: white;
}

.btn-bgstroke {
  font-size: 20px;
  display: inline-block;
  border: 1px solid white;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 300;
  margin-top: 30px;
}

.btn-bgstroke:hover {
  background-color: white;
  color: #33cccc;
}
</style>