<template>
  <div id="about">
    <chat v-if="loggedIn"></chat>
  </div>
</template>

<script>
import Chat from "../components/Chat.vue";
import firebase from "firebase";
export default {
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
      loggedIn: false,
    };
  },
  components: {
    Chat: Chat,
  },
};
</script>

<style lang="scss" scoped>
</style>
