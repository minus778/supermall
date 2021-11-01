<template>
  <nav-bar class="nav">
    <div slot="center">购物街</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "HomeNavBar",
  components: {
    NavBar,
  },
};
</script>

<style>
.nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  text-align: center;
  background-color: pink;
  color: white;
}
</style>