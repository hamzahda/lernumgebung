<template>
<div id="app">
  <Navb/>
  <router-view/>
</div>
</template>

<script>
import Navb from "./Views/Navb";
export default {
  name: "App",
  components:{
    Navb
  }

};
</script>


<style>
#app{
  display: flex;
}
.topic{
  flex: 1;
  background-color: #F8F8FF   ;
}
code{
  font-size: 1rem;
  color: seagreen;
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
.teil{
    font-family: Helvetica;
  color: #303030;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 1px;
}






</style>