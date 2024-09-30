<template>
  <div class="container mt-5">
    <h1 class="mb-4">Noticias</h1>
    <div class="row">
      <div v-for="(news, index) in noticias" :key="index" class="col-md-4 mb-3">
        <div class="card h-100">
          <img :src="news.image" class="card-img-top" alt="news" />
          <div class="card-body">
            <h5 class="card-title">{{ news.title }}</h5>
            <p class="card-text">{{ news.content }}</p>
            <a :href="news.link" target="_blank" class="read-more">Leer más</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NoticiasView",
  data() {
    return {
      noticias: [
        {
          image: "https://i.blogs.es/19f05f/asdsadas/1200_800.jpeg",
          title: '"Es difícil hacer comentarios al respecto". Ni Final Fantasy ni Kingdom Hearts aparecen en Astro Bot, y su director dice que respeta "la elección de cada editor"',
          content: "El próximo DLC gratis de Astro Bot añadirá bots VIP al juego de Stellar Blade y Helldivers 2",
           link: "https://www.3djuegos.com/juegos/astro-bot-2024/noticias/dificil-hacer-comentarios-al-respecto-final-fantasy-kingdom-hearts-aparecen-astro-bot-su-director-dice-que-respeta-eleccion-cada-editor"
        },
        {
          image: "https://i.blogs.es/a81250/original/1200_800.jpeg",
          title: 'Olvídate de Horizon 3, está "muy lejos". Los creadores de Forbidden West lanzarán antes el MMO de Horizon, según Jason Schreier"',
          content: '"Horizon MMO es uno de los pocos que no ha sido cancelado o no ha salido ni ha fracasado, como lo hizo Concord", señala el popular periodista de Bloomberg',
           link: "https://www.3djuegos.com/juegos/horizon-forbidden-west/noticias/olvidate-horizon-3-esta-muy-lejos-creadores-forbidden-west-lanzaran-antes-mmo-horizon-jason-schreier"
        },
        {
          image: "https://i.blogs.es/ab7b7e/monster-hunter-wilds/1200_800.jpeg",
          title: "Todos piensan que Monster Hunter cambió para siempre con sus dos últimos juegos, excepto el jefe de la saga. Ryozo Tsujimoto dice que el éxito es culpa de un juego de PSP",
          content: "El futuro Monster Hunter Wilds será resultado de una fórmula que lleva 20 años evolucionando",
           link: "https://www.3djuegos.com/juegos/monster-hunter-wilds/noticias/todos-piensan-que-monster-hunter-cambio-para-siempre-sus-dos-ultimos-juegos-excepto-jefe-saga-ryozo-tsujimoto-dice-que-exito-culpa-juego-psp"
        },
      ],
    };
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
.card-title{
  font-weight: bolder;
}
</style>
