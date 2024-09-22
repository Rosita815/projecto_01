<template>
  <div class="container mt-4">
    <h1>Noticias</h1>
    <div v-for="(news, index) in noticias" :key="index" class="card mb-3">
      <img :src="news.image" class="card-img-top" alt="news" />
      <div class="card-body">
        <h5 class="card-title">{{ news.title }}</h5>
        <p class="card-text">{{ news.content }}</p>
      </div>
    </div>
  </div>
</template>
