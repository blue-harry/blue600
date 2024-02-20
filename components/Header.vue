<template>
  <!-- 顶部菜单 -->
  <v-banner sticky style="z-index: 10">
    <v-toolbar flat dark prominent class="d-flex bg-white">
      <template v-slot:prepend>
        <nuxt-link
          to="/"
          class="text-decoration-none text-h6 text-primary font-weight-bold"
        >
          <v-tooltip text="Click Go Back Homepage">
            <template v-slot:activator="{ props }">
              <div v-bind="props">HOME</div>
            </template>
          </v-tooltip>
        </nuxt-link>
      </template>

      <v-spacer></v-spacer>

      <div class="d-none d-sm-flex justify-space-around w-50 ml-12">
        <v-menu open-on-hover v-for="(item, index) in navItems" :key="index">
          <template v-slot:activator="{ props }">
            <div v-bind="props">
              <v-hover v-slot="{ isHovering, props }">
                <div
                  v-bind="props"
                  class="text-primary text-h6 font-weight-bold"
                  :class="{ 'text-deep-purple-accent-3': isHovering }"
                >
                  {{ item.navTitle }}
                </div>
              </v-hover>
            </div>
          </template>
          <v-card width="350">
            <v-list lines="two">
              <v-list-item
                v-for="(menuItem, index1) in item.navMenu"
                :key="index1"
              >
                <template v-slot:prepend>
                  <v-icon :icon="menuItem.icon"></v-icon>
                </template>
                <nuxt-link :to="menuItem.link" class="text-decoration-none">
                  <v-list-item-title class="text-black">
                    {{ menuItem.title }}</v-list-item-title
                  >
                  <v-list-item-subtitle>
                    {{ menuItem.subtitle }}
                  </v-list-item-subtitle>
                </nuxt-link>
              </v-list-item>
            </v-list>
          </v-card>
        </v-menu>
        <!--  -->
      </div>

      <!-- 手机小屏幕下拉菜单 -->
      <v-btn
        color="primary"
        variant="outlined"
        rounded="xl"
        size="small"
        class="d-sm-none"
        id="mobile-activator"
        >MENU</v-btn
      >

      <v-menu activator="#mobile-activator">
        <v-card min-width="280">
          <v-list>
            <v-list-item prepend-icon="mdi-home">
              <nuxt-link to="/" class="text-decoration-none">
                <v-list-item-title class="text-black">
                  返回首页</v-list-item-title
                >
              </nuxt-link></v-list-item
            >
            <v-divider></v-divider>
            <v-list-group
              v-for="(item, index) in navItems"
              :key="index"
              :value="item.navTitle"
            >
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :title="item.navTitle"
                  @click.stop=""
                ></v-list-item>
              </template>

              <v-list-item
                v-for="(menuItem, index1) in item.navMenu"
                :key="index1"
              >
                <template v-slot:prepend>
                  <v-icon :icon="menuItem.icon"></v-icon>
                </template>
                <nuxt-link :to="menuItem.link" class="text-decoration-none">
                  <v-list-item-title class="text-black">
                    {{ menuItem.title }}</v-list-item-title
                  >
                </nuxt-link>
              </v-list-item>
            </v-list-group>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar>
  </v-banner>
</template>
<script setup>
/**
 *
 * 菜单项，和页面路由
 *
 */
const navItems = [
  {
    navTitle: "Coding",
    navMenu: [
      {
        icon: "mdi-language-javascript",
        title: "Javascript",
        subtitle: "JS code",
        link: "/javascript",
      },
      {
        // icon: "mdi-account-cog-outline",
        icon: "mdi-language-kotlin",
        title: "Kotlin",
        subtitle: "Kl code",
        link: "/job",
      },
    ],
  },

  {
    navTitle: "Games",
    navMenu: [
      {
        icon: "mdi-cart-outline",
        title: "Games With Vanilla Javascript",
        subtitle: "2D Games Developed With Pure Javascript and HTML5 ",
        link: "/games2D",
      },

      {
        icon: "mdi-baguette",
        title: "Games With Playcanvus",
        subtitle: "3D Games Developed With Playcanvus Game Engine",
        link: "/games3D",
      },
    ],
  },

  {
    navTitle: "Links",
    navMenu: [
      {
        icon: "mdi-lotion-outline",
        title: "Links",
        subtitle: "美业连锁机构 | 统一管理和调配 | 支持连锁门店有限业务差异化",
        link: "/links",
      },
      {
        icon: "mdi-hospital-box-outline",
        title: "美容保健大品牌",
        subtitle:
          "大品牌服务机构 | 量身定制数字化方案 | 实现品牌战略和管理目标",
        link: "/job",
      },
    ],
  },
]
</script>
