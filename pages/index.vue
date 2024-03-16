<template>
  <!-- 电脑版 -->
  <v-container class="d-none d-sm-flex flex-column">
    <div class="text-center text-h4 mb-6">
      This is my home page!
    </div>

    <div class="d-flex flex-column justify-space-around">
      <!-- <div class="my-4 d-flex flex-column align-center">
        <v-img :width="200" :aspect-ratio="1" src="/public/flappybird.png" alt="FlappyBird" cover></v-img>
        <div class="text-h6 text-center mb-2">Flappy Bird</div>
      </div>

      <div class="my-4 d-flex flex-column align-center">
        <v-img :width="200" :aspect-ratio="1" src="/public/pong.png" alt="Pong"></v-img>
        <div class="text-h6 text-center mb-2">Pong</div>
      </div> -->

      <div class="my-4 d-flex flex-column align-center">
        <img width=100% src="/public/home/coding.jpeg" alt="FlappyBird" />
        <div class="text-h6 text-center mb-2">Learn coding</div>
      </div>

      <div class="my-4 d-flex flex-column align-center">
        <img width=100% src="/public/home/flappy.jpeg" alt="FlappyBird" />
        <div class="text-h6 text-center mb-2">Games</div>
      </div>

      <div class="my-4 d-flex flex-column align-center">
        <img width=100% src="/public/home/links.jpeg" alt="FlappyBird" />
        <div class="text-h6 text-center mb-2">Links</div>
      </div>

    </div>
  </v-container>

  <!-- 手机版 -->
  <v-container class="d-sm-none">
    <div class="text-center text-h5 text-sm-h3 mb-8">
      This is my home page!
    </div>

    <div class="d-sm-flex justify-space-around">
      <div class="my-4 d-flex flex-column align-center">
        <img width=100% src="/public/home/coding.jpeg" alt="FlappyBird" />
        <div class="text-sm-h6 text-center mb-2">Learn coding</div>
      </div>

      <div class="my-4 d-flex flex-column align-center">
        <img width=100% src="/public/home/flappy.jpeg" alt="Pong" />
        <div class="text-sm-h6 text-center mb-2">Games</div>
      </div>
    </div>
    <div class="my-4 d-flex flex-column align-center">
      <img width=100% src="/public/home/links.jpeg" alt="Pong" />
      <div class="text-sm-h6 text-center mb-2">links</div>
    </div>

  </v-container>
</template>
