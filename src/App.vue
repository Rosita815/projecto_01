<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background-image: url("https://img.freepik.com/vector-gratis/diseno-fondo-videojuegos_23-2150286097.jpg?w=1060&t=st=1727662521~exp=1727663121~hmac=0ea991cf67863ea692e1f435ea70acfa53b9d040b1e490f91690e7f87e8d1fca");
  background-repeat: no-repeat;
  background-size: cover; 
  background-position: center; 
}
</style>
