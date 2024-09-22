<template>
  <div class="container mt-5">
    <h1>Video Juegos - {{ consola }}</h1>
    <div class="row">
      <div v-for="(game, index) in games" :key="index" class="col-md-4 mb-4">
        <div class="card h-100">
          <img :src="game.image" class="card-img-top" alt="game" />
          <div class="card-body">
            <h5 class="card-title">{{ game.name }}</h5>
            <button class="btn btn-primary" @click="showDetail(game)">Ver Detalle</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="selectedGame" class="modal fade show d-block" tabindex="-1" style="background: rgba(0, 0, 0, 0.5);">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedGame.name }}</h5>
            <button type="button" class="btn-close" @click="closeDetail"></button>
          </div>
          <div class="modal-body">
            <p><strong>Año de lanzamiento:</strong> {{ selectedGame.year }}</p>
            <img :src="selectedGame.consoleImage" alt="console" class="img-fluid" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeDetail">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoJuegos",
  data() {
    return {
      // List of games for demonstration
      games: [
        {
          name: "Game 1",
          image: "https://via.placeholder.com/150",
          year: 2020,
          consoleImage: "https://via.placeholder.com/50",
        },
        {
          name: "Game 2",
          image: "https://via.placeholder.com/150",
          year: 2019,
          consoleImage: "https://via.placeholder.com/50",
        },
        {
          name: "Game 3",
          image: "https://via.placeholder.com/150",
          year: 2018,
          consoleImage: "https://via.placeholder.com/50",
        },
        {
          name: "Game 4",
          image: "https://via.placeholder.com/150",
          year: 2021,
          consoleImage: "https://via.placeholder.com/50",
        },
        {
          name: "Game 5",
          image: "https://via.placeholder.com/150",
          year: 2022,
          consoleImage: "https://via.placeholder.com/50",
        },
      ],
      selectedGame: null,
    };
  },
  computed: {
    // Retrieve the console type from the route parameter
    consola() {
      return this.$route.params.consola.charAt(0).toUpperCase() + this.$route.params.consola.slice(1);
    },
  },
  methods: {
    // Display game details in the modal
    showDetail(game) {
      this.selectedGame = game;
    },
    // Close the game detail modal
    closeDetail() {
      this.selectedGame = null;
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}
.modal-dialog {
  max-width: 600px;
}
</style>
