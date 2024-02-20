<template>
  <!-- 电脑版 -->
  <v-container class="d-none d-sm-flex flex-column">
    <div class="d-flex justify-space-around">
      <div class="my-4 d-flex flex-column align-center">
        <!-- Flappybird -->
        <div class="text-h6 text-center mb-2">1. FLAPPYBIRDCITY</div>
        <NuxtLink to="/flappybird" target="_blank">
          <v-img :width="200" :aspect-ratio="1" src="/flappybird/icon.png" alt="FlappyBird"></v-img>
        </NuxtLink>
      </div>

      <div class="d-flex justify-space-around">
        <div class="my-4 d-flex flex-column align-center">
          <!-- Pong -->
          <div class="text-h6 text-center mb-2">2. PONG2PLAYER</div>
          <NuxtLink to="/pong" target="_blank">
            <v-img :width="200" :aspect-ratio="1" src="/pong/icon.png" alt="Pong"></v-img>
          </NuxtLink>
        </div>
      </div>
    </div>
  </v-container>

  <!-- 手机版 -->
  <v-container class="d-sm-none">
    <div class="d-sm-flex justify-space-around">
      <div class="my-4 d-flex flex-column align-center">
        <!-- Flappybird -->
        <div class="text-sm-h6 text-center mb-2">1. FLAPPYBIRDCITY</div>
        <NuxtLink to="/flappybird" target="_blank">
          <v-img :width="200" :aspect-ratio="1" src="/flappybird/icon.png" alt="FlappyBird"></v-img>
        </NuxtLink>
      </div>

      <div class="d-sm-flex justify-space-around">
        <div class="my-4 d-flex flex-column align-center">
          <!-- Pong -->
          <div class="text-sm-h6 text-center mb-2">2. PONG2PLAYER</div>
          <NuxtLink to="/pong" target="_blank">
            <v-img :width="200" :aspect-ratio="1" src="/pong/icon.png" alt="Pong"></v-img>
          </NuxtLink>
        </div>
      </div>
    </div>
  </v-container>
</template>
