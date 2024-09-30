import Xbox from '@/views/XboxView.vue';
<template>
    <div class="container mt-5">
      <h1>Video Juegos - Xbox</h1>
      <div class="row">
        <div v-for="(game, index) in XboxGames" :key="index" class="col-md-4 mb-4">
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
    name: "XboxGames",
    data() {
      return {
        XboxGames: [
          {
            name: "Legacy of Kain: Soul Reaver 1 & 2 Remastered",
            image: "https://s.pacn.ws/1/p/19z/legacy-of-kain-soul-reaver-1-2-remastered-827679.10.jpg?v=skd69m&width=800&crop=800,1015",
            year: 2024,
            consoleImage: "https://s.pacn.ws/1/p/19z/legacy-of-kain-soul-reaver-1-2-remastered-827679.10.jpg?v=skd69m&width=800&crop=800,1015", 
          },
          {
            name: "Like a Dragon: Pirate Yakuza in Hawaii",
            image: "https://s.pacn.ws/1/p/19y/like-a-dragon-pirate-yakuza-in-hawaii-827131.10.jpg?v=sk8tjj",
            year: 2025,
            consoleImage: "https://s.pacn.ws/1/p/19y/like-a-dragon-pirate-yakuza-in-hawaii-827131.10.jpg?v=sk8tjj", 
          },
          {
            name: "Nikoderiko: The Magical World",
            image: "https://s.pacn.ws/1/p/18w/nikoderiko-the-magical-world-808465.10.jpg?v=seujnh",
            year: 2024,
            consoleImage: "https://s.pacn.ws/1/p/18w/nikoderiko-the-magical-world-808465.10.jpg?v=seujnh", 
          },
          {
            name: "Mount & Blade II: Bannerlord",
            image: "https://m.media-amazon.com/images/I/819elEvPHlL._AC_SL1500_.jpg",
            year: 2022,
            consoleImage: "https://m.media-amazon.com/images/I/819elEvPHlL._AC_SL1500_.jpg", 
          },
          {
            name: "Atelier Yumia: The Alchemist of Memories & the Envisioned Land",
            image: "https://s.pacn.ws/1/p/19o/atelier-yumia-the-alchemist-of-memories-the-envisioned-land-822485.6.jpg?v=sk3h2f",
            year: 2025,
            consoleImage: "https://s.pacn.ws/1/p/19o/atelier-yumia-the-alchemist-of-memories-the-envisioned-land-822485.6.jpg?v=sk3h2f", 
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
  