import { defineStore } from "pinia";

export const userStore = defineStore({
  id: "user", // 必须指明唯一的pinia仓库的id
  state: () => ({
    data: {
      // 不需要导航栏的页面
      notNav: [''],
      // 不需要导航栏占位的页面
      navAbsolute: [''],
      // Dark
      
    },
  }),
});
