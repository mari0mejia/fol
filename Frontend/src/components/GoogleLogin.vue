<template>
  <div class="login-container">
    <button @click="loginSubmit" class="loginBtn loginBtn--google">
      Login with Google
    </button>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  methods: {
    loginSubmit() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithRedirect(provider).catch(console.log);
    },
  },
};
</script>

<style lang="scss">
.login-container {
  width: 100%;
  text-align: center;
  padding-top: 50px;
  button {
    width: 50%;
    background-color: #4e37fc;
    color: white;
    font-weight: bold;
    font-size: 18pt;
    padding: 20px;
    margin-bottom: 20px;
    border: none;
    box-shadow: #00000040 0px 5px 10px;
    cursor: pointer;
    &:hover {
      background-color: #7562ff;
    }
  }

  /* Google */
  .loginBtn--google {
    /*font-family: "Roboto", Roboto, arial, sans-serif;*/
    background: #dd4b39;
  }
  .loginBtn--google:before {
    border-right: #bb3f30 1px solid;
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png")
      6px 6px no-repeat;
  }
  .loginBtn--google:hover,
  .loginBtn--google:focus {
    background: #e74b37;
  }
}
</style>