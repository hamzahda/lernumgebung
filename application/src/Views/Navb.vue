<template>
  <div id="menu">
    <nav>
      <ul>
        <li>
          <router-link to="/">Einfürung</router-link>
        </li>
        <li>
          <router-link to="/Ausgabe">Ausgabe</router-link>
        </li>
        <li>
          <router-link to="/Kommentare">Kommentare</router-link>
        </li>
        <li>
          <router-link to="/Datentypen">Datentypen</router-link>
        </li>
        <li>
          <router-link to="/Operatoren">Operatoren</router-link>
        </li>
        <li>
          <router-link to="/ifelse">Fluss Kontrolle</router-link>
        </li>
        <li>
          <router-link to="/Schleifen">Schleifen</router-link>
        </li>
        <li>
          <router-link to="/Arrays">Arrays</router-link>
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
  height: 100%;
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
