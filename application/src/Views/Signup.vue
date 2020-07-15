<template>
  <div id="login">
    <form id="form" @submit.prevent="register">
      <div id="notif" v-if="notif"> check powrds </div>
      <h2>Anmelden</h2>
      <b-form-input
        class="form"
        v-model="user.name"
        placeholder="Ihre Name"
      ></b-form-input>
      <b-form-input
        class="form"
        v-model="user.pword"
        placeholder="Ihre pwort"
      ></b-form-input>
      <b-form-input
        class="form"
        v-model="rPword"
        placeholder="pwort bestätigen"
      ></b-form-input>
      <button type="submit">Bestätigen</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data: () => {
    return {
      user: {
        name: "",
        pword: "",
        score:0,
        scores:[]      
        },
      rPword: "",
      notif : false
    };
  },
  methods: {
    register: function() {
      let info = this.user;
        this.$store.dispatch("signup", info)
        this.$router.push("/login")
    },
    
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
