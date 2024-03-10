<template>
    <div class="d-flex justify-space-around">
        <div class="my-4 d-flex flex-column align-center">
            <v-img :width="200" :aspect-ratio="1" src="/public/crazygames.jpeg" alt="Crazy games" cover></v-img>

            <NuxtLink to="https://www.crazygames.com/" target="_blank">
                Crazy games
            </NuxtLink>
        </div>
        <div class="my-4 d-flex flex-column align-center">
            <v-img :width="200" :aspect-ratio="1" src="/public/miniplay.jpeg" alt="Miniplay" cover></v-img>

            <NuxtLink to="https://www.miniplay.com/mario-bros-games" target="_blank">
                Miniplay
            </NuxtLink>
        </div>
    </div>




</template>