<script setup>
import HelloWorld from "@/components/common/HelloWorld/index.vue";

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
            linkUrl: "#",
            imgSrc: "#",
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
            describe: "",
            altText: "Desk",
            linkUrl: "#",
            imgSrc: "#",
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
            imgSrc: "#",
          },
          {
            title: "Mouse",
            describe: `Logitech`,
            altText: "Mouse",
            linkUrl: "#",
            imgSrc: "#",
          },
          {
            title: "Speaker",
            describe: "Logitech",
            altText: "Speaker",
            linkUrl: "#",
            imgSrc: "#",
          },
          {
            title: "Keyboard",
            describe: "Logitech",
            altText: "Keyboard",
            linkUrl: "#",
            imgSrc: "#",
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
            describe: "Insta360 Flow",
            altText: "MacBook",
            linkUrl: "#",
            imgSrc: "../../assets/imgs/Insta360_Flow.webp",
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
                    <div
                      class="flex-shrink-0 ml-4"
                      style="min-height: 1px; width: 50px"
                    >
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
