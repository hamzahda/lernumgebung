<template>
  <div id="app">
    <Header />
    <div class="flex">
      <Navb v-if="this.getRoutePath" />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navb from "./Views/Navb.vue";
import Header from "./Views/Header";
export default {
  name: "App",
  components: {
    Navb,
    Header
  },
  computed: {
    getRoutePath() {
      if (this.$route.path != "/login") {
        if (this.$route.path != "/signup") {
          return true;
        }
      }
    }
  },
  data: () => {
    return {
      isAuth: false
    };
  },
  methods: {},
};
</script>


<style>
.topic {
  display: flex;
  overflow-y: hidden;

  height: 100%;
  padding: 2rem;
}
.flex {
  display: flex;
}
.topic {
  flex: 1;
  background-color: #f8f8ff;
}

h1 {
  color: grey;
}
h2 {
  font-size: 1.5rem;
  color: seagreen;
}
.hinweis {
  padding: 1rem;
}
.text {
  font-family: Helvetica;
  color: #303030;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
}
code {
  margin: 2rem;
}
pre {
  background-color: gray;
  padding: 0.5rem;
  width: 49vw;
}
.string {
  color: orange;
}

.comment {
  color: thistle;
}

.content {
}
.imgc{
  text-align: center;
}
</style>