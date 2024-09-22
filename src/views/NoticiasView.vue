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
          image: "https://via.placeholder.com/150",
          title: "Noticia 1",
          content: "Este es el contenido de la noticia 1.",
        },
        {
          image: "https://via.placeholder.com/150",
          title: "Noticia 2",
          content: "Este es el contenido de la noticia 2.",
        },
        {
          image: "https://via.placeholder.com/150",
          title: "Noticia 3",
          content: "Este es el contenido de la noticia 3.",
        },
      ],
    };
  },
};
</script>
