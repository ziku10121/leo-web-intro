<script setup>
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
    companyName: "騰雲科技服務有限公司",
    linkUrl: "https://turn2cloud.com",
    companyImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJuOg1scyTdOXKc4qEj2We0MnC0X4H1BCioweX8e7pPU8u8KvPzwJxu3froQCwLl1qpk&usqp=CAU",
    jobTitle: "資深前端工程師",
    workStartDate: "2023/05",
    workEndDate: "Now",
  },
  {
    companyName: "鴻翊國際股份有限公司",
    linkUrl: "https://datavan.com.tw/",
    companyImg: "https://datavan.com.tw/images/logo.svg",
    jobTitle: "軟體工程師",
    workStartDate: "2022/07",
    workEndDate: "2024/03",
  },
  {
    companyName: "SYSTEX精誠資訊",
    linkUrl: "https://tw.systex.com/",
    companyImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi6J8J3iGLOK6u0M3RimbGpQMLzyOCZ2O-Jw&s",
    jobTitle: "程式分析師",
    workStartDate: "2021/05",
    workEndDate: "2022/05",
  },
]);
</script>

<template>
  <div class="mx-auto max-w-[576px] px-6 pt-6 md:pt-12 pb-16">
    <!-- About -->
    <div class="about md:gap-4 mb-6">
      <h2 class="text-3xl font-bold mb-4">About</h2>
      <div class="flex flex-col gap-3">
        <p>大家好！我是Leo。目前生活在台北的一個北漂青年。</p>
        <p>
          我從小對電腦和科技充滿濃厚的好奇心，這份熱情成為我投身科技領域的動力。如今，我是一位專業的前端工程師，專注於前端開發與設計，並擁有三年相關經驗。
        </p>
        <div class="mb-4">
          <p class="mb-2 md:mb-4">
            除了工作之餘，我平常生活也離不開以下幾件事：
          </p>
          <div>
            <div v-for="interest in interestData" class="flex items-top mt-2">
              <div class="mr-3 text-xl">
                <ion-icon :name="interest.icon"></ion-icon>
              </div>
              <div>
                <span class="font-bold text-md">{{ interest.title }}</span>
                <span>{{ interest.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Education -->
    <div class="education md:gap-4 mb-6">
      <h2 class="text-3xl font-bold mb-4">Education</h2>
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
    <div class="work">
      <h2 class="text-3xl font-bold mb-4">Work</h2>
      <p class="mb-5">
        我專注於 JavaScript、Vue、ASP.NET Web API、網頁開發、UI/UX
        設計及產品設計，並持續深化現有的知識領域。同時，我也積極學習新事物，不僅限於工作領域，並拓展自己的視野與技能，保持對創新和變化的開放態度。
      </p>
      <ul v-for="work in workData">
        <li class="mb-5 md:mb-6">
          <a
            class="flex justify-between items-center p-2 rounded-lg hover:bg-gray-200 hover:text-gray-800"
            target="_blank"
            :href="work.linkUrl"
          >
            <div class="flex items-center gap-3">
              <img
                class="rounded-full border"
                style="width: 50px; height: 50px"
                :alt="work.companyName"
                :aria-label="work.companyName"
                :src="work.companyImg"
              />
              <div class="flex flex-col">
                <div class="font-bold">{{ work.jobTitle }}</div>
                <div>{{ work.companyName }}</div>
              </div>
            </div>
            <div class="work-period">
              {{ `${work.workStartDate} ~ ${work.workEndDate}` }}
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
