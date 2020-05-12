<template>
  <div id="menu">
    <nav>
      <ul>
        <li>
         <router-link to="/Einfürung"> <div> Einfürung </div>  </router-link> 
        </li>
        <li>
          <router-link to="/Kommentare"> Kommentare </router-link>
        </li>
        <li>
          <router-link to="/Datentypen"> Datentypen </router-link>
        </li>
        <li>
          <router-link to="/Operatorn"> Operatorn </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    send: function() {}
  }
};
</script>

<style scoped>
#menu {
  display: flex;
}
nav {
  height: 100vh;
  width: fit-content;

  background-color: seashell;
}
#start {
  padding: 4rem;
}
ul {
  padding: 4rem;
  display: flex;
  flex-direction: column;
  list-style: none;
}
li {
  padding: 1rem;
}
</style>
