<script setup>
import { useRoute } from "vue-router";

const props = defineProps({
  title: {
    type: String,
    default: "Default Title",
  },
  isLogo: {
    type: Boolean,
    default: false,
  },
});
const isGoBack = ref(window.history.length > 1);
const router = useRouter(); //獲取路由實例
const route = useRoute(); //獲取當前路由實例

const goPage = (pathName) => {
  router.push({ name: pathName });
};
</script>
<template>
  <nav
    class="mx-auto flex max-w-[600px] items-center px-4 my-6"
    :class="isLogo ? 'justify-between' : 'justify-center'"
  >
    <a v-if="isLogo" class="shrink-0 text-primary" href="/"></a>
    <ul class="flex">
      <li class="transform hover:scale-105 duration-200">
        <a
          class="px-4 py-3 text-primary text-md text-center rounded-md hover:text-breeze transition-colors duration-200"
          :class="route.name === 'Home' ? 'bg-cityLight' : ''"
          href="/"
          @click.prevent="goPage('Home')"
        >
          Home
        </a>
      </li>
      <li class="transform hover:scale-105 duration-200">
        <a
          class="px-4 py-3 text-primary text-md text-center rounded-md hover:text-breeze transition-colors duration-200"
          :class="route.name === 'About' ? 'bg-cityLight' : ''"
          href="/about"
          @click.prevent="goPage('About')"
        >
          About
        </a>
      </li>
      <li class="transform hover:scale-105 duration-200">
        <a
          class="px-4 py-3 text-primary text-md text-center rounded-md hover:text-breeze transition-colors duration-200"
          :class="route.name === 'Gear' ? 'bg-cityLight' : ''"
          href="/gear"
          @click.prevent="goPage('Gear')"
        >
          Gear
        </a>
      </li>
      <li class="transform hover:scale-105 duration-200">
        <a
          class="px-4 py-3 text-primary text-md text-center rounded-md hover:text-breeze transition-colors duration-200"
          :class="route.name === 'Portfolio' ? 'bg-cityLight' : ''"
          href="/portfolio"
          @click.prevent="goPage('Portfolio')"
        >
          Portfolio
        </a>
      </li>
    </ul>
    <div
      v-if="isLogo"
      class="ml-auto flex h-8 w-8 items-center justify-center md:ml-0"
    >
      <div class="relative">
        <button
          class="relative flex h-8 w-8 cursor-default items-center justify-center rounded-lg"
          id="headlessui-listbox-button-:r0:"
          type="button"
          aria-haspopup="listbox"
          aria-expanded="false"
          data-headlessui-state=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
            class="w-5 h-5 text-secondary hover:text-primary cursor-pointer transition-colors text-secondary"
          >
            <path
              fill-rule="evenodd"
              d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
@import "./style.scss";
</style>
