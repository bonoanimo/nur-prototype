<template>
  <b-nav tabs fill>
    <b-nav-item> <router-link to="/">Hlavní stránka</router-link></b-nav-item>
    <b-nav-item>
      <router-link to="/locations">Lokace</router-link>
    </b-nav-item>
    <b-nav-item>
      <router-link to="/tracer">Trasovac</router-link></b-nav-item
    >
    <b-nav-item>
      <router-link to="/information">Informace</router-link></b-nav-item
    >
  </b-nav>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  //   ,
  //   props: {
  //     data: JSON
  //   }
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.nav {
  margin-bottom: 30px;
  border: solid 1px black;
}
</style>
