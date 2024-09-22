<template>
  <div class="container mt-4">
    <h1>Video Juegos - {{ consola }}</h1>
    <div class="row">
      <div v-for="(game, index) in games" :key="index" class="col-md-4 mb-4">
        <div class="card">
          <img :src="game.image" class="card-img-top" alt="game" />
          <div class="card-body">
            <h5 class="card-title">{{ game.name }}</h5>
            <button class="btn btn-primary" @click="showDetail(game)">Ver Detalle</button>
          </div>
        </div>
      </div>
    </div>

    <div v-if="selectedGame" class="modal fade show d-block" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ selectedGame.name }}</h5>
            <button type="button" class="btn-close" @click="selectedGame = null"></button>
          </div>
          <div class="modal-body">
            <p>Año de lanzamiento: {{ selectedGame.year }}</p>
            <img :src="selectedGame.consoleImage" alt="console" class="img-fluid" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="selectedGame = null">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
