<template>
  <div class="home"></div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Home",
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
  components: {},
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
.wrapper {
  text-align: center;
  max-width: 728px;
  margin: 0 auto;
  header {
    button {
      background-color: rgb(211, 211, 87);
      padding: none;
    }
    background-color: #3aaf4d;
    height: 10vh;
    min-height: 50px;
    color: white;
    position: fixed;
    width: 100%;
    max-width: 728px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 99;
    padding: 10px;
    box-sizing: border-box;
  }
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    background-color: #3aaf4d;

    main {
      padding: 10px;
      height: 75vh;
      margin: 10vh 0 10vh;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      &::-webkit-scrollbar {
        width: 0.25rem;
      }
      &::-webkit-scrollbar-track {
        background: #1e1e24;
      }
      &::-webkit-scrollbar-thumb {
        background: #6649b8;
      }
    }
    form {
      height: 10vh;
      position: fixed;
      bottom: 0;
      background-color: rgb(24, 23, 23);
      width: 100%;
      max-width: 728px;
      display: flex;
      font-size: 1.5rem;
      button {
        width: 20%;
        background-color: rgb(56, 56, 143);
      }
      input {
        line-height: 1.5;
        width: 100%;
        font-size: 1.5rem;
        background: rgb(58, 58, 58);
        color: white;
        outline: none;
        border: none;
        padding: 0 10px;
      }
    }
  }
  button {
    background-color: #282c34; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    font-size: 1.25rem;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  button,
  input {
    color: #fff;
    border: none;
  }
  p {
    max-width: 500px;
    margin-bottom: 12px;
    line-height: 24px;
    padding: 10px 20px;
    border-radius: 25px;
    position: relative;
    color: white;
    text-align: center;
  }
  .message {
    display: flex;
    align-items: center;
    &.received {
      p {
        background: #e5e5ea;
        color: #000;
      }
    }
    &.sent {
      flex-direction: row-reverse;
      p {
        color: #fff;
        background: #0b93f6;
        align-self: flex-end;
      }
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 2px 5px;
    }
    p {
      max-width: 500px;
      margin-bottom: 12px;
      line-height: 24px;
      padding: 10px 20px;
      border-radius: 25px;
      position: relative;
      color: #fff;
      text-align: center;
    }
  }
}
</style>