<template>
  <div id="login">
    <div id="form">
      <h2>Einloggen</h2> <div>Noch nicht angemeldet?  <a href="/signup">Anmelden</a></div>
      <b-form-input class="form" v-model="user.name" placeholder="Ihre name"></b-form-input>
      <b-form-input class="form" v-model="user.pword" placeholder="Ihre pword"></b-form-input>
      <button type="submit" @click="login">login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => {
    return {
      user: {
        name: "",
        pword: ""
      }
    };
  },
  methods: {
    login: function(){
      this.$store.dispatch("login", this.user)
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
* {
  margin: 1rem;
}

#login {
  height: 100vh;
  display: flex;
  justify-content: center;
}
#form {
  margin-top: 8rem;
  padding: 1rem;
}

.form {
  padding: 1rem;
}
button {
  padding: 0.5rem;
  width: 100%;
  border-style: none;
  border-radius: 0.1rem;
  background-color: steelblue;
}
</style>
