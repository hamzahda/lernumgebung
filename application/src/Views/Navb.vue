<template>
  <div id="menu">
    <nav>
      <ul>
        <div class="logo">Python Lernen</div>
        <li>
          <router-link to="/">Einfürung</router-link>
        </li>
        <li>
          <router-link to="/comments">Kommentare</router-link>
        </li>
        <li>
          <router-link to="/vars">Datentypen</router-link>
        </li>
        <li>
          <router-link to="/Operatorn">Operatorn</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
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
.logo {
  display: flex;
  font-size: 1.5rem;
}
</style>
