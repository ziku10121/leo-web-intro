import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 引入全局樣式
import "@/styles/tailwind/index.css";
import "@/styles/global.scss";

const app = createApp(App);

// plugin
app.use(router);

app.mount("#app");
