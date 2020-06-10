<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="info"  fixed>
      <b-navbar-brand href="#">Lernen</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template v-if="isAuth" v-slot:button-content>
              <em>Konto</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </nav>
</template>
<script>
export default {
  methods: {
    logout: () => {
      this.$store.dispatch('logout');
    },
    
  },
  data: () => {
    return {
      isAuth: true
    };
  }
};
</script>