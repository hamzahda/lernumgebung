<template>
<div id="app">
  <Navb/>
  <router-view/>
</div>
</template>

<script>

import Navb from "./Views/Navb.vue";

export default {
  name: "App",
  components:{
    Navb
  }
};
</script>


<style>
.topic {
  display: flex;
  overflow-y: scroll;

  height: 100vh;
  padding: 2rem;
}
#app{
  display: flex;
}
.topic{
  flex: 1;
  background-color: #F8F8FF   ;
}

h1{
  color:grey  ;
}
h2{
  font-size: 1.5rem;
  color: seagreen;
}
.hinweis{
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