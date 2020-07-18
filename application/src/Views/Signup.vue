<template>
  <div id="login">
    <form validate id="form" @submit.prevent="check">
      <div id="notif" v-if="notif"> Pworte sind nicht gleich </div>
      <h2>Anmelden</h2>
      <b-form-input
        class="form"
        v-model="user.name"
        placeholder="Ihre voll Name"
        required
      ></b-form-input>
      <b-form-input
        class="form"
        v-model="user.pword"
        placeholder="Ihr Pwort"
        type="password"
        required
      ></b-form-input>
      <b-form-input
        class="form"
        v-model="rpword"
        placeholder="Ihr Pwort bestätigen"
        type="password"
        required
      ></b-form-input>
      <button type="submit">Anmelden</button>
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
      rpword: "",
      notif : false
    };
  },
  methods: {
    check : function(){
      this.user.pword == this.rpword ? this.register() : alert('')
    },
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
