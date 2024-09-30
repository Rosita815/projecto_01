<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img :src="logo" alt="logo" class="img-fluid" style="max-height: 50px;">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/noticias">Noticias</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Video Juegos
            </a>
            <ul class="dropdown-menu color" aria-labelledby="navbarDropdown">
              <li><router-link class="dropdown-item" to="/playStation5">PlayStation 5</router-link></li>
              <li><router-link class="dropdown-item" to="/xbox">Xbox</router-link></li>
              <li><router-link class="dropdown-item" to="/nintendo">Nintendo</router-link></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contacto">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted } from 'vue';
import Dropdown from 'bootstrap/js/dist/dropdown';
import LogoJuego from '@/assets/LogoJuego.png';

export default {

  data() {
    return {
      logo: LogoJuego
    };
  },

  name: "NavBar",
  mounted() {
    onMounted(() => {
      const dropdownElementList = [].slice.call(document.querySelectorAll('.dropdown-toggle'));
      dropdownElementList.map(function (dropdownToggleEl) {
        return new Dropdown(dropdownToggleEl);
      });
    });
  }
};

</script>

<style scoped>
.navbar, .color{
  background-color: #00eaff;
}
.navbar-brand {
  font-weight: bold;
}

li {
  font-size: 25px;
}
</style>

