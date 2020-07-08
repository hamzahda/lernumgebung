<template>
  <div id="menu">
    <nav>
      <ul>
        <li>
          <router-link to="/">Einfürung</router-link>
        </li>
        <li>
          <router-link to="/gabe">Ein und Ausgabe</router-link>
        </li>
        <li>
          <router-link to="/comments">Kommentare</router-link>
        </li>
        <li>
          <router-link to="/vars">Datentypen</router-link>
        </li>
        <li>
          <router-link to="/oprators">Operatorn</router-link>
        </li>
        <li>
          <router-link to="/ifelse">Fluss Kontroll</router-link>
        </li>
                <li>
          <router-link to="/for">For Schleife</router-link>
        </li>
                <li>
          <router-link to="/oprators">While Schleife</router-link>
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
