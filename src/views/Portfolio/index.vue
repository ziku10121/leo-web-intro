<script setup>
//TODO: 完善作品集與修改
const portfolioListData = [
  {
    title: "HSC",
    subTitle: "企業乘車票券電子化",
    describe:
      "參與日本乘車券電子化推行專案，專案核心是整合票券公司/券商的系統，實現乘車券的電子化。合作企業可透過平台為員工發行電子乘車券，員工只需使用手機即可輕鬆搭乘計程車服務。 ",
    linkUrl: "https://google.com.tw",
    works: [
      "解決 BUG、優化共五十幾個項目，提升系統穩定性及改善用戶體驗。",
      "開發QRCode方式轉讓車票。",
      "解決各統系統與瀏覽器相容性問題，保證用戶體驗穩定。",
    ],
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      "HTML / CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "Vue3.js",
      "Vite",
    ],
  },
  {
    title: "TShop 2.0",
    subTitle: "輕量ERP系統",
    describe:
      "協助多集團、多公司、多品牌、多店舖管理 ，擁有帳務結帳、大數據分析、發票管理等營運平台，並支持多語、多裝置使用。",
    linkUrl: "#",
    works: [
      "解開發 CURD、多語系、表單驗證、分頁管理功能。",
      "創建可重用性元件，提供開發同仁套用開發。",
      "優化前端操作性、效能。",
    ],
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      "HTML / CSS",
      "JavaScript",
      "Bootstrap",
      "Vue3.js",
      "Vite",
      "Pinia",
      "i18n",
      "VeeValidate",
    ],
  },
  {
    title: "MenuSync",
    subTitle: "AI點餐服務系統",
    describe:
      "MenuSync是一個菜單掃描AI辨識系統，可以附加在KIOSK、POS機器上。此系統提供菜單設計及AI辨識系統參數調整，提供客戶快速而簡易的製作AI辨識菜單、簡易又方便設置AI辨識參數。",
    linkUrl: "#",
    works: [
      "負責網頁前端電腦版的切版、設計，與後端討論API格式相關事項。",
      "使用mqtt通訊溝通、串接API資料，測試並修改菜單設計與AI辨識的參數設定系統。",
    ],
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML / CSS", "JavaScript", "Quasar", "Vue3.js", "WebRTC"],
  },
  {
    title: "Handwash",
    subTitle: "智慧洗手廣告機 ",
    describe:
      "Hand Sanitizer Signage Station是一個廣告結合量測溫度系統，可以整合多台DKS-2150的廣告資訊。提供廣告資訊介面更換功能，並提供即時性更換，方便使用者一機多控的操作。",
    linkUrl: "#",
    works: [
      "負責網頁前端電腦版的切版、設計，與後端討論API格式相關事項。 ",
      "使用mqtt通訊溝通、串接API資料， 測試並修改廣告機後台系統。",
    ],
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML / CSS", "JavaScript", "Quasar", "Vue3.js"],
  },
  {
    title: "長效單前台系統",
    subTitle: "前台",
    describe:
      "提供客戶進行長效單下單，並隨時可看到當前條件單的狀態，與操作此單狀態。並可檢查此單歷程。同時可查詢歷史條件單紀錄。",
    linkUrl: "#",
    works: [
      "負責網頁前端電腦版的切版、設計與RWD。",
      "與後端討論API格式相關事項。",
      "使用websock接收資料、串接API資料。",
      "測試並修改電腦與手機板長校單系統。",
    ],
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML / CSS", "Bootstrap", "JavaScript", "jQuery", "MSSQL"],
  },
  {
    title: "長效單後台系統",
    subTitle: "後台",
    describe: "主要提供後台人員查詢單筆交易單的詳細資訊與歷程。",

    linkUrl: "#",
    works: [
      "維護舊有網站，優化及除錯，提升使用者操作。",
      "負責網頁頁面切版與設計，串接API資料。",
    ],
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML / CSS", "Bootstrap", "JavaScript", "jQuery", "MSSQL"],
  },
  {
    title: "帳戶總覽、資產總覽",
    subTitle: "客製化單一頁面",
    describe: "",
    linkUrl: "#",
    works: [
      "在微軟Dynamic 365系統上，iframe出客製化頁面。",
      "負責網頁的切版、設計。 撰寫API、串接API資料。",
    ],
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=2969&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML / CSS", "Bootstrap", "JavaScript", "Vue3.js", "C#", "MSSQL"],
  },
];
</script>

<template>
  <div class="mx-auto max-w-[576px] px-6 pt-6 md:pt-12 pb-16">
    <h3 class="text-2xl font-bold py-5 md:py-6">My Portfolio</h3>

    <div class="flex flex-col gap-5">
      <template v-for="portfolio in portfolioListData">
        <div
          class="flex flex-col items-start md:max-w-xl border border-black rounded-md shadow-sm hover:shadow-lg portfolio-card portfolio-effects"
        >
          <a :href="portfolio.linkUrl" target="_blank">
            <div class="flex flex-col md:flex-row md:max-w-xl">
              <div class="w-100 md:h-40 md:w-2/5">
                <img
                  class="w-full md:rounded-ee-md"
                  :src="portfolio.imgSrc"
                  alt="IMG"
                />
              </div>
              <div
                class="w-full flex flex-col justify-between leading-normal p-4 md:w-3/5"
              >
                <h5
                  class="flex items-center mb-1 text-2xl font-bold tracking-tight inline-block"
                >
                  <span>
                    {{ portfolio.title }}
                  </span>
                  <ion-icon name="logo-github" class="ps-2"> </ion-icon>
                </h5>
                <h6 class="mb-2 text-md font-bold tracking-tight">
                  {{ portfolio.subTitle }}
                </h6>
                <p v-if="portfolio.describe" class="font-normal">
                  {{ portfolio.describe }}
                </p>
                <ul v-if="portfolio.works">
                  <li v-for="work in portfolio.works">{{ work }}</li>
                </ul>
              </div>
            </div>
          </a>
          <div class="flex flex-wrap gap-2 px-3 pb-3">
            <div
              class="flex items-center px-2 py-1 text-sm font-medium text-center rounded-lg card-tag duration-300"
              v-for="tag in portfolio.tags"
            >
              {{ tag }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
