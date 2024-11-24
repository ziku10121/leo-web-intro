import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "url";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      vue({
        template: {
          transformAssetUrls: {
            // 將 ion-icon 設定為自定義元素
            "ion-icon": "src",
          },
          compilerOptions: {
            isCustomElement: (tag) => tag === "ion-icon",
          },
        },
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        dts: false, // 不生成 TypeScript 生明文件
        eslintrc: {
          enabled: false, //1.true:用予生成eslint配置 2.false避免重複生成消耗
          filepath: "./.eslintrc-auto-import.json",
          globalsPropValue: false, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
      }),
    ],
    base: env.VITE_APP_ENV === "production" ? "./" : "/",
    assetsInclude: ['**/*.png'],
    resolve: {
      alias: {
        /*
        如果你在使用 CommonJS 模塊（例如使用 require），並且不需要處理 URL，則使用 path.resolve。
        如果你在使用 ESM 模塊（例如使用 import），並且需要處理 import.meta.url，則使用 fileURLToPath。
       */
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    server: {
      port: 3000,
      // host: "172.20.10.12",
      strictPort: false, // port被占用時嘗試下一個端口
      open: true, // 是否自動開啟瀏覽器
    },
  };
});
