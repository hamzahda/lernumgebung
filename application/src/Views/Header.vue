<template>
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="info" fixed>
      <b-navbar-brand href="#">Lernen</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right v-if="this.getRoutePath">
            <template v-slot:button-content>
              <em>Konto</em>
            </template>
            <b-dropdown-item href="#" @click="$bvModal.show('bv-modal-example')">Profile</b-dropdown-item>
            <b-dropdown-item @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
      <b-modal id="bv-modal-example" hide-footer>
        <template v-slot:modal-title>Kid stats</template>
        <div class="d-block text-center"></div>
        <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close</b-button>
      </b-modal>
    </b-navbar>
  </nav>
</template>
<script>
export default {
  methods: {
    logout: function() {
      this.$store.dispatch("logout");
      this.$router.push("login");
    }
  },
  data: () => {
    return {};
  },
  computed: {
    getRoutePath() {
      if (this.$route.path != "/login") {
        if (this.$route.path != "/signup") {
          return true;
        }
      }
    }
  }
};
</script>