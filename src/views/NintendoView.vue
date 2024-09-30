import Nintendo from '@/views/NintendoView.vue';
<template>
    <div class="container mt-5">
      <h1>Video Juegos - Nintendo</h1>
      <div class="row">
        <div v-for="(game, index) in nintendo" :key="index" class="col-md-4 mb-4">
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
      <div v-if="selectedGame" class="modal fade show d-flex align-items-center justify-content-center" tabindex="-1" style="background: rgba(0, 0, 0, 0.5);">
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
    name: "NintendoGames",
    data() {
      return {
        nintendo: [
          {
            name: "Luigi's Mansion",
            image: "https://m.media-amazon.com/images/I/81bGvhtiuHL._AC_SL1500_.jpg",
            year: 2018,
            consoleImage: "https://m.media-amazon.com/images/I/81bGvhtiuHL._AC_SL1500_.jpg", 
          },
          {
            name: "Super Mario Bros",
            image: "https://m.media-amazon.com/images/I/8177Ba7g0JL._AC_SL1500_.jpg",
            year: 1985,
            consoleImage: "https://m.media-amazon.com/images/I/8177Ba7g0JL._AC_SL1500_.jpg", 
          },
          {
            name: "The Legend of Zelda: Echoes of Wisdom",
            image: "https://m.media-amazon.com/images/I/81Qd2ZX+ysL._AC_SL1500_.jpg",
            year: 2024,
            consoleImage: "https://m.media-amazon.com/images/I/81Qd2ZX+ysL._AC_SL1500_.jpg", 
          },
          {
            name: "Super Smash Bros. Ultimate",
            image: "https://m.media-amazon.com/images/I/91dJvdtPajL._AC_SL1500_.jpg",
            year: 2018,
            consoleImage: "https://m.media-amazon.com/images/I/91dJvdtPajL._AC_SL1500_.jpg", 
          },
          {
            name: "Monster Hunter Rise",
            image: "https://m.media-amazon.com/images/I/91XE-EMDJaL._AC_SL1500_.jpg",
            year: 2021,
            consoleImage: "https://m.media-amazon.com/images/I/91XE-EMDJaL._AC_SL1500_.jpg", 
          },
        ],
        selectedGame: null,
      };
    },
    methods: {
      showDetail(game) {
        this.selectedGame = game;
      },
      closeDetail() {
        this.selectedGame = null;
      },
    },
  };
  </script>
  
  
  <style scoped>
  .container h1{
    text-align: center;
   }
   h1 {
     font-weight: bolder;
     font-size: 50px;
   }
   .card-body{
    text-align: center;
   }
   .card-title{
     font-weight: bolder;
   }
   .custom-title {  
    font-weight: bolder;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  
  }
  .modal-dialog {
    max-width: 600px;
  }
  .modal-content{
    text-align: center;
    background-image: url("https://img.freepik.com/vector-gratis/tema-galaxia-color-verde_1308-37644.jpg?t=st=1727666168~exp=1727669768~hmac=a0b10551c9d0c942b219731c630a6efe1d58045f0b1a5b51e8d51cce4f78e22a&w=1380") !important;
  }
  .modal-body img{
    width: 100px;
  }
  
  h5{
    font-weight: bolder;
  }
  </style>
  