<template>
  <div id="app">
    <Header />
    <div class="flex">
      <Navb />
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
  }
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
</style>