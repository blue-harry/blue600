<template>
  <!-- 电脑版首页 -->
  <v-container class="d-none d-sm-flex flex-column align-start">
    <div v-for="(item, index) in items" :key="index" class="ma-8">
      <v-card flat>
        <div class="text-h5 mb-3">
          {{ item.title }}
        </div>
        <div
          v-for="(p, index1) in item.text"
          :key="index1"
          class="mb-2"
          v-html="p"
        ></div>
      </v-card>
    </div>
  </v-container>

  <!-- 手机版首页 -->
  <v-container class="d-sm-none">
    <div v-for="(item, index) in items" :key="index" class="mb-8">
      <v-card flat class="my-5">
        <div class="text-h5 mb-3">
          {{ item.title }}
        </div>
        <div
          v-for="(p, index1) in item.text"
          :key="index1"
          class="mb-2"
          v-html="p"
        ></div>
      </v-card>
    </div>
  </v-container>
</template>
<script setup>
/**
 *
 * 首页没有“了解详情”链接
 */
const items = [
  {
    title: "Vue/Vuetify前端开发(初级、中级)",
    text: [
      "- Vue/Vuetify 开发经验",
      "- 爱学习求进步，乐于向经验丰富的程序员请教，在项目中快速成长",
      "- 文字功底好，文案写作能力强，能编写高质量的培训材料",
      "- 普通话标准，适合录制客户培训视频者优先",
      "- 英文文档阅读能力强者优先",
      "- 职位空缺 3 人",
    ],
  },
  {
    title: "微信小程序开发(中级)",
    text: [
      "- 3年以上专职微信小程序开发经验，暂不招收初级开发工程师",
      "- 拥有大型复杂项目开发经验者优先",
      "- 我们为优秀的小程序开发者提供业余时间接单开发机会，待遇优厚",
      "- 职位空缺 2 人",
    ],
  },
  {
    title: "MongoDB工程师(高级)",
    text: [
      "- 为前端提供 CRUD 操作接口",
      "- 编写 aggregation 脚本",
      "- 熟悉 mongosh 进行系统管理",
      "- 具有实际项目建模经验者优先",
      "- 只招收高级工程师，一经录用待遇从优，暂不招收初中级工程师",
      "- 职位空缺 2 人",
    ],
  },
  {
    title: "有意者请联系右上角的客服热线",
  },
];
</script>
