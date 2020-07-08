<template>
  <div id="login">
    <form id="form" @submit.prevent="register">
      <div id="notif" v-if="notif"> check powrds </div>
      <h2>register</h2>
      <b-form-input
        class="form"
        v-model="user.name"
        placeholder="Enter name"
      ></b-form-input>
      <b-form-input
        class="form"
        v-model="user.pword"
        placeholder="Enter pword"
      ></b-form-input>
      <b-form-input
        class="form"
        v-model="rPword"
        placeholder="Repeat your pword"
      ></b-form-input>
      <button type="submit">register</button>
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
        },
      rPword: "",
      notif : false
    };
  },
  methods: {
    register: function() {
      let info = this.user;
        this.$store.dispatch("signup", info);
        this.$router.push("/login");
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
