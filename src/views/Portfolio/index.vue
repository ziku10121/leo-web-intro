<script setup>
//TODO: 完善作品集與修改
const portfolioListData = [
  {
    name: "TShop 2.0",
    describe:
      "TSHOP系統主要協助企業高效地管理庫存，同時提供相關業務運營所需工具和資源。",
    linkUrl: "#",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML", "CSS", "Bootstrap", "Vue.js", "Vite", "JavaScript"],
  },
];
</script>

<template>
  <div class="mx-auto max-w-[576px] px-6 pt-6 md:pt-12 pb-16">
    <h3 class="text-2xl font-bold py-5 md:py-6">My Portfolio</h3>

    <div class="flex flex-col gap-5">
      <template v-for="portfolio in portfolioListData">
        <a
          :href="portfolio.linkUrl"
          class="flex flex-col items-center md:flex-row md:max-w-xl border border-black rounded-md shadow-sm hover:shadow-lg portfolio-card portfolio-effects"
        >
          <img
            class="object-cover w-full rounded-t-md h-48 md:h-60 md:w-48 md:rounded-none md:rounded-s-md"
            :src="portfolio.imgSrc"
            alt="IMG"
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight"
            >
              {{ portfolio.name }}
            </h5>
            <p class="mb-3 font-normal">
              {{ portfolio.describe }}
            </p>
            <div class="flex flex-wrap gap-2">
              <div
                class="flex items-center px-2 py-1 text-sm font-medium text-center rounded-lg card-tag duration-300"
                v-for="tag in portfolio.tags"
              >
                {{ tag }}
              </div>
            </div>
          </div>
        </a>
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped>

</style>
