<script setup>
const isInterset = ref(true);
const isEducation = ref(false);
const isWork = ref(true);

const interestData = ref([
  {
    title: "健身",
    icon: "barbell-outline",
    text: " - 健身房鍛鍊身體，以保持身體的健康和活力。",
  },
  {
    title: "動畫",
    icon: "images-outline",
    text: " - 特別喜愛穿越、科幻和運動類型的題材。",
  },
  {
    title: "遊戲",
    icon: "game-controller-outline",
    text: " - 即時戰略和沙盒類的冒險生存遊戲。",
  },
]);
const skillData = ref([
  {
    title: "前端",
    itemList: ["HTML / CSS / JavaScript（ES6+）", "Vue.js"],
  },
  {
    title: "前端函式庫經驗",
    itemList: [
      "Bootstrap / Tailwind CSS",
      "chart.js / c3.js",
      "i18n",
      "Pinia",
      "VeeValidate",
    ],
  },
  {
    title: "資料庫",
    itemList: ["MySQL / MSSQL", "Postgres"],
  },
  {
    title: "後端",
    itemList: ["C# - ASP.NET Web API", "Node.js"],
  },
  {
    title: "其他",
    itemList: ["Git / GitHub", "Figma"],
  },
]);
const educationData = ref([
  {
    schoolName: "國立高雄科技大學",
    degree: "碩士學位",
    major: "資訊管理研究所",
    studyStartDate: "2018/09",
    studyEndDate: "2020/06",
  },
  {
    schoolName: "私立樹德科技大學",
    degree: "學士學位",
    major: "資訊管理系",
    studyStartDate: "2014/09",
    studyEndDate: "2018/06",
  },
]);
const workData = ref([
  {
    companyName: "騰雲科技",
    linkUrl: "https://turn2cloud.com",
    companyImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJuOg1scyTdOXKc4qEj2We0MnC0X4H1BCioweX8e7pPU8u8KvPzwJxu3froQCwLl1qpk&usqp=CAU",
    jobTitle: "資深前端工程師",
    startDate: "2023/05",
    endDate: "Now",
    contentList: [
      "開發ERP系統、B2B訂貨平台：Bootstrap CSS、Element Plus、Vue3、Vite進行需求開發導入多語系、表單驗證功能。",
      "創建可重用元件，提升畫面一致性與內部元件的可維護性。",
      "前端技術文檔撰寫：透過深入開發與詳細文檔撰寫，幫助新成員快速上手、提升開發效率，並確保專案的穩定性。",
      "跨部門溝通，與UI/UX設計師透過Figma進行有效溝通。與後端工程師協作將資料交換的準確且順利。",
      "版控與部屬：使用Git專案版控、AWS Amplify自動化部屬、VM上架設IIS。",
      "指導初階開發工程師了解最佳實務和現代技術，進一步增強團隊的技能。",
    ],
  },
  {
    companyName: "鴻翊國際",
    linkUrl: "https://datavan.com.tw/",
    companyImg: "https://datavan.com.tw/images/logo.svg",
    jobTitle: "軟體工程師",
    startDate: "2022/07",
    endDate: "2024/03",
    contentList: [
      "開發零售業相關AI點餐系統、餐飲系統：利用JavaScript、Vue3、Quasar框架開發系統。",
      "使用Figma工具設計UI/UX與系統規劃、切版和版面建置。",
      "撰寫後端Node-red與資料庫溝通。",
    ],
  },
  {
    companyName: "SYSTEX精誠資訊",
    linkUrl: "https://tw.systex.com/",
    companyImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6J8J3iGLOK6u0M3RimbGpQMLzyOCZ2O-Jw&s",
    jobTitle: "程式分析師",
    startDate: "2021/05",
    endDate: "2022/05",
    contentList: [
      "開發海外長效單交易系統前後台系統：JavaScript、JQuery、Bootstrap、Vue3進行開發。",
      "跨部門溝通與後端工程師協作將資料交換的準確且順利。",
      "使用 ASP.NET Web API 與 MSSQL 資料庫進行整合，開發高效的 API。",
      "微軟商務應用平台：使用 Dynamic365 製作客戶需求的 客製化CRM管理系統。",
    ],
  },
]);
</script>

<template>
  <div class="mx-auto max-w-[576px] px-6 pt-6 md:pt-12 pb-16">
    <!-- About -->
    <div class="about md:gap-4 mb-6">
      <h3 class="text-3xl font-bold mb-4">About</h3>
      <div class="flex flex-col gap-3">
        <p>
          大家好！我是Leo。我是擁有豐富經驗的前端工程師，主要擅長工具Vue框架開發。
        </p>
        <p>
          我從小對電腦和科技充滿濃厚的好奇心，這份熱情成為我投身科技領域的動力。如今，我是一位專業的前端工程師，專注於網站性能優化，致力於提供優質的用戶體驗。
        </p>
        <div class="mb-4">
          <p class="mb-2 md:mb-4">
            除了工作之餘，我平常生活也離不開以下幾件事：
          </p>
          <div v-if="isInterset" class="interest-container">
            <div v-for="interest in interestData" class="flex items-top mt-2">
              <div class="mr-3 text-xl interest-icon">
                <ion-icon :name="interest.icon"></ion-icon>
              </div>
              <div>
                <span class="font-bold text-md interest-title">{{
                  interest.title
                }}</span>
                <span>{{ interest.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Skill -->
    <div class="skill md:gap-4 mb-6">
      <h3 class="text-3xl font-bold mb-4">Skill</h3>
      <div class="flex flex-wrap justify-between gap-3">
        <div class="skill-card" v-for="skill in skillData">
          <h4>{{ skill.title }}</h4>
          <ul>
            <li v-for="item in skill.itemList">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Education -->
    <div v-if="isEducation" class="education md:gap-4 mb-6">
      <h3 class="text-3xl font-bold mb-4">Education</h3>
      <div>
        <div class="flex flex-col text-lg" v-for="education in educationData">
          <div class="school-name mb-1">
            {{ education.schoolName }}
          </div>
          <div class="school-info flex mb-4">
            {{
              `${education.degree},${education.major}，${education.studyStartDate}~${education.studyEndDate} `
            }}
          </div>
        </div>
      </div>
    </div>
    <!-- Work -->
    <div v-if="isWork" class="work">
      <h3 class="text-3xl font-bold mb-4">Work</h3>
      <ul v-for="work in workData">
        <li class="mb-5 md:mb-6 work-card hover:scale-105 duration-100">
          <a
            class="flex flex-col p-5 border border-lake"
            style="border-radius: 24px"
            target="_blank"
            :href="work.linkUrl"
          >
            <div class="flex justify-between items-center w-full mb-3">
              <div class="flex items-center gap-3">
                <img
                  class="rounded-full border"
                  style="width: 50px; height: 50px"
                  :alt="work.companyName"
                  :aria-label="work.companyName"
                  :src="work.companyImg"
                />
                <div class="flex flex-col">
                  <div class="work-jobTitle font-bold">
                    {{ work.jobTitle }}（{{ work.companyName }}）
                  </div>
                </div>
              </div>
              <div class="work-period">
                <span class="work-date">{{
                  `${work.startDate} ~ ${work.endDate}`
                }}</span>
              </div>
            </div>
            <template v-if="work.contentList">
              <ul class="ms-4" v-for="content in work.contentList">
                <li>
                  {{ content }}
                </li>
              </ul>
            </template>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.interest-container {
  .interest-icon {
    color: var(--color-green);
  }
  .interest-title {
    color: var(--color-green);
  }
}
</style>
