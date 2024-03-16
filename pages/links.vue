<template>
    <!-- <v-container>
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
    </v-container> -->


    <!-- 电脑版 -->
    <v-container class="d-none d-sm-flex flex-column">
        <div class="text-center text-h4 mb-6">
            These are my favourite websites!
        </div>

        <div class="d-flex justify-space-around">
            <div class="my-4 d-flex flex-column align-center">
                <v-img :width="200" :aspect-ratio="1" src="/public/links/crazygames.jpeg" alt="Crazy games" cover></v-img>

                <NuxtLink to="https://www.crazygames.com/" target="_blank">
                    Crazy games
                </NuxtLink>
            </div>

            <div class="my-4 d-flex flex-column align-center">
                <v-img :width="200" :aspect-ratio="1" src="/public/links/miniplay.jpeg" alt="Miniplay" cover></v-img>

                <NuxtLink to="https://www.miniplay.com/mario-bros-games" target="_blank">
                    Miniplay
                </NuxtLink>
            </div>
        </div>
    </v-container>
    
    <!-- 手机版 -->
    <v-container class="d-sm-none">
        <div class="text-center text-h5 text-sm-h3 mb-8">
            These are my favourite websites!
        </div>

        <div class="d-sm-flex justify-space-around">
            <div class="my-4 d-flex flex-column align-center">
                <v-img :width="200" :aspect-ratio="1" src="/public/links/crazygames.jpeg" alt="Crazy games" cover></v-img>

                <NuxtLink to="https://www.crazygames.com/" target="_blank">
                    Crazy games
                </NuxtLink>
            </div>

            <div class="my-4 d-flex flex-column align-center">
                <v-img :width="200" :aspect-ratio="1" src="/public/links/miniplay.jpeg" alt="Miniplay" cover></v-img>

                <NuxtLink to="https://www.miniplay.com/mario-bros-games" target="_blank">
                    Miniplay
                </NuxtLink>
            </div>
        </div>
    </v-container>
</template>