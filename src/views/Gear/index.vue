<script setup>
//TODO:等待完善Gear資料

const gearData = ref([
  {
    category: "Work",
    data: [
      {
        title: "PC",
        itemsData: [
          {
            title: "MacBook Pro",
            describe: "Apple M3 Pro (18G)",
            altText: "MacBook",
            linkUrl: "https://www.apple.com/tw/",
            imgSrc: "/src/assets/imgs/gear/MacBook_Pro.png",
          },
        ],
      },
      {
        title: "Office Furniture",
        itemsData: [
          {
            title: "Chair",
            describe: "人體工學椅",
            altText: "Chair",
            linkUrl: "/",
            imgSrc: "/",
          },
          {
            title: "Desk",
            describe: "IKEA LAGKAPTEN/ADILS 120x60",
            altText: "Desk",
            linkUrl:
              "https://www.ikea.com.tw/zh/products/home-workspace/home-desks/lagkapten-adils-spr-49416875",
            imgSrc: "/src/assets/imgs/gear/Desk.png",
          },
          {
            title: "Desk Shelf",
            describe: "實木",
            altText: "Desk Shelf",
            linkUrl: "#",
            imgSrc: "#",
          },
        ],
      },
      {
        title: "Desktop",
        itemsData: [
          {
            title: "Screen",
            describe: `BenQ 27"`,
            altText: "Screen",
            linkUrl: "#",
            imgSrc: "/src/assets/imgs/gear/Screen.png",
          },
          {
            title: "Mouse",
            describe: `Logitech G102`,
            altText: "Mouse",
            linkUrl:
              "https://store.logitech.tw/products/g102-%E7%AC%AC%E4%BA%8C%E4%BB%A3-rgb%E7%82%AB%E5%BD%A9%E9%81%8A%E6%88%B2%E6%BB%91%E9%BC%A0?_pos=1&_sid=863659efa&_ss=r",
            imgSrc: "/src/assets/imgs/gear/Mouse.png",
          },
          {
            title: "Speaker",
            describe: "Logitech Z200(白)",
            altText: "Speaker",
            linkUrl:
              "https://www.logitech.com/zh-tw/products/speakers.html?srsltid=AfmBOorWECmlmD8SQMCy5rPH0aICbaSKNFWD1Hn8D7JjhVVzQbWq2bA7",
            imgSrc: "/src/assets/imgs/gear/Speaker.png",
          },
          {
            title: "Keyboard",
            describe: "darkFlash GD108(星空藍)",
            altText: "Keyboard",
            linkUrl: "https://www.darkflash.tw/product/gd108",
            imgSrc: "/src/assets/imgs/gear/Keyboard.png",
          },
        ],
      },
    ],
  },
  {
    category: "We Media",
    data: [
      {
        title: "Camera Equipment",
        itemsData: [
          {
            title: "Stabilizer",
            describe: "Insta360 Flow(創作者套裝)",
            altText: "Stabilizer",
            linkUrl:
              "https://store.insta360.com/product/flow?c=2221&from=search-bar-recommend",
            imgSrc: "../../assets/imgs/gear/Insta360_Flow.png",
          },
        ],
      },
    ],
  },
]);

function getImageUrl(relativePath) {
  return new URL(relativePath, import.meta.url).href;
}
</script>

<template>
  <div class="mx-auto max-w-[576px] px-6 pt-6 md:pt-8 pb-16">
    <div class="text-center">
      Here's all the gear I use. Last updated in November 2024.
    </div>

    <div class="w-full">
      <div class="flex flex-col" v-for="gearItem in gearData">
        <h3 class="text-2xl font-bold mt-6 mb-4">{{ gearItem.category }}</h3>
        <div
          class="mb-4 divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          v-for="gear in gearItem.data"
        >
          <details class="group">
            <summary
              class="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-gray-100 bg-gray-900"
            >
              {{ gear.title }}
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
            <div
              class="flex flex-col gap-3 border-t border-t-gray-100 p-4 text-secondary-500"
            >
              <div class="space-y-4 w-full" v-for="childItem in gear.itemsData">
                <a
                  :href="childItem.linkUrl"
                  target="_blank"
                  class="block w-full px-4 py-3 border rounded-lg bg-gray-100 hover:bg-gray-300 duration-200"
                >
                  <div class="flex items-center">
                    <div class="flex-grow">
                      <h4 class="text-md font-bold text-link-item-title">
                        {{ childItem.title }}
                      </h4>
                      <p class="text-sm text-link-item-subtitle">
                        {{ childItem.describe }}
                      </p>
                    </div>
                    <div class="flex-shrink-0 ml-4" style="min-height: 20px">
                      <img
                        alt="Picture"
                        loading="lazy"
                        width="50"
                        height="50"
                        decoding="async"
                        :src="getImageUrl(childItem.imgSrc)"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
