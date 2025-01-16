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
            imgSrc: "https://firebasestorage.googleapis.com/v0/b/leoli-6f812.appspot.com/o/MacBook_Pro.png?alt=media&token=d4b42d17-dd4d-48c2-a374-e761ab08ca2c",
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
            imgSrc: "https://firebasestorage.googleapis.com/v0/b/leoli-6f812.appspot.com/o/Desk.png?alt=media&token=ca1cd1a2-cedf-4ab9-a4a7-7f13c1350b7e",
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
            imgSrc: "https://firebasestorage.googleapis.com/v0/b/leoli-6f812.appspot.com/o/Screen.png?alt=media&token=e79e7ba0-5e78-4937-b6f0-1b3bc40ac6c5",
          },
          {
            title: "Mouse",
            describe: `Logitech G102`,
            altText: "Mouse",
            linkUrl:
              "https://store.logitech.tw/products/g102-%E7%AC%AC%E4%BA%8C%E4%BB%A3-rgb%E7%82%AB%E5%BD%A9%E9%81%8A%E6%88%B2%E6%BB%91%E9%BC%A0?_pos=1&_sid=863659efa&_ss=r",
            imgSrc: "https://firebasestorage.googleapis.com/v0/b/leoli-6f812.appspot.com/o/Mouse.png?alt=media&token=fc2a1b59-5ebc-4e0a-99df-a766bb89af7d",
          },
          {
            title: "Speaker",
            describe: "Logitech Z200(白)",
            altText: "Speaker",
            linkUrl:
              "https://www.logitech.com/zh-tw/products/speakers.html?srsltid=AfmBOorWECmlmD8SQMCy5rPH0aICbaSKNFWD1Hn8D7JjhVVzQbWq2bA7",
            imgSrc: "https://firebasestorage.googleapis.com/v0/b/leoli-6f812.appspot.com/o/Speaker.png?alt=media&token=87f0b30d-7896-4148-9898-c47d98b782cc",
          },
          {
            title: "Keyboard",
            describe: "darkFlash GD108(星空藍)",
            altText: "Keyboard",
            linkUrl: "https://www.darkflash.tw/product/gd108",
            imgSrc: "https://firebasestorage.googleapis.com/v0/b/leoli-6f812.appspot.com/o/Keyboard.png?alt=media&token=c3081490-371b-4bcf-9219-b4f68c9c686f",
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
          class="mb-4 overflow-hidden rounded-sm border border-black shadow-md card"
          v-for="gear in gearItem.data"
        >
          <details class="group">
            <summary
              class="flex cursor-pointer list-none items-center justify-between p-4 text-lg hover:font-bold card-title"
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
              class="flex flex-col gap-3 border-t border-t-black p-4 text-secondary-500 card-content"
            >
              <div class="space-y-4 w-full card-item" v-for="childItem in gear.itemsData">
                <a
                  :href="childItem.linkUrl"
                  target="_blank"
                  class="block w-full px-4 py-3 border border-gray-900 rounded-lg duration-200"
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
