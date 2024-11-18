<script setup>
// TODO:所有樣式調整配色
// TODO:修改Latest Blogs資料、修改Media連結
const name = ref("Leo Li");
const country = ref("Taiwan");
const city = ref("Chiayi");
const mediaData = ref([
  {
    name: "logo-github", // ion-icon name
    blank_url: "https://github.com/ziku10121", // link URL
    isActive: true, // 是否啟動
  },
  {
    name: "logo-instagram",
    blank_url: "",
    isActive: true,
  },
  { name: "logo-youtube", blank_url: "", isActive: true },
  {
    name: "mail-outline",
    blank_url: "mailto:ziku10121@gmail.com",
    isActive: true,
  },
  {
    name: "logo-medium",
    blank_url: "https://medium.com/@ziku10121",
    isActive: true,
  },
]);
const postList = ref([
  {
    postUrl:
      "https://medium.com/leo-li/box-sizing-%E7%9B%92%E5%AD%90%E6%A8%A1%E5%9E%8B-80418e7d2c65",
    postName: "Box Sizing",
    describe: "每個Box裡有三種行為",
    altText: "Box-Sizing",
    imgSrc: "/src/assets/imgs/post/Box_Sizing.png",
  },
]);
</script>

<template>
  <div class="mx-auto max-w-[576px] px-6 pt-12 pb-16">
    <!-- Profile -->
    <div class="flex flex-col items-center space-y-2">
      <img
        alt="Leo's profile picture"
        loading="lazy"
        width="145"
        height="145"
        decoding="async"
        class="rounded-full text-center border"
        src="../../assets/imgs/white-profile.JPG"
      />
      <div class="text-center">
        <h2 class="text-2xl font-bold">{{ name }}</h2>
      </div>
      <div class="text-center">
        <h5 class="text-l font-bold"></h5>
        <div class="flex gap-1">
          <div class="flex items-center">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <h5 class="text-l font-bold">{{ city }}，{{ country }}</h5>
        </div>
      </div>
    </div>
    <!-- Media List -->
    <div class="flex justify-evenly items-center w-full py-3 mb-3">
      <template v-for="media in mediaData">
        <a
          v-if="media.isActive"
          class="flex items-center justify-center text-4xl hover:text-gray-200"
          :href="media.blank_url"
          target="_blank"
        >
          <ion-icon :name="media.name"></ion-icon>
        </a>
      </template>
    </div>

    <!-- Article -->
    <div class="w-full">
      <div
        class="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
      >
        <details class="group" open>
          <summary
            class="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-gray-100 bg-gray-900"
          >
            Latest Blogs
            <div class="text-secondary-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="block h-5 w-5 transition-all duration-300 group-open:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </summary>
          <div class="border-t border-t-gray-100 p-4 text-secondary-500">
            <div class="space-y-4 w-full">
              <a
                v-for="post in postList"
                :href="post.postUrl"
                target="_blank"
                class="block w-full px-4 py-3 border rounded-lg bg-gray-100 hover:bg-gray-300 duration-200"
              >
                <div class="flex items-center">
                  <div class="flex-grow multi-line">
                    <h4 class="text-md font-bold text-link-item-title">
                      {{ post.postName }}
                    </h4>
                    <p
                      class="text-sm text-link-item-subtitle"
                      v-if="post.describe"
                    >
                      {{ post.describe }}
                    </p>
                  </div>
                  <div
                    class="flex-shrink-0 ml-4"
                    style="min-height: 1px; width: 50px"
                    v-if="post.imgSrc || post.altText"
                  >
                    <img
                      :src="post.imgSrc"
                      :alt="post.altText"
                      loading="lazy"
                      width="50"
                      height="50"
                      decoding="async"
                      style="color: transparent"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </details>
      </div>
    </div>

    <!-- Article -->
  </div>
</template>
<style lang="scss" scoped>
.multi-line {
  display: -webkit-box; // 必須搭配
  -webkit-box-orient: vertical; // 垂直排列子元素
  overflow: hidden; // 隱藏超出容器的內容
  -webkit-line-clamp: 2; // 顯示的行數
}
</style>
