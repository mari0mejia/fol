<template>
  <div id="app">
    <site-header></site-header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <span v-if="loggedIn"
        ><router-link to="/about">Chat with Us</router-link> |</span
      >
      <span v-if="!loggedIn">
        <router-link to="/login">Login</router-link> |
      </span>
      <span v-if="!loggedIn">
        <router-link to="/register">Register</router-link> |
      </span>
      <span v-if="loggedIn">
        <router-link to="/secret">Trial Course</router-link>
      </span>
    </div>
    <router-view />
  </div>
</template>
<script>
import SiteHeader from "./components/Site-Header";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "App",
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  data() {
    return {
      user: firebase.auth().currentUser(),
      loggedIn: false,
    };
  },
  components: {
    "site-header": SiteHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
