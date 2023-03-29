<template>
  <!-- 顶部导航栏 -->
  <nav class="nav">
    <div class="nav_icon" @click="home">
      <img src="../public/icon.png" alt="">
      <div>Cxpller</div>
    </div>
    <div class="nav_view">
      <div v-for="item in navItem" class="nav_item" @click="jump(item)">
        {{ item.name }}
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup>
import { reactive } from "vue";
import router from "./router";
console.log(router);
const navItem = reactive({
  home: {
    name: '首页', value: 'home'
  }
})

const jump = item => {
  console.log(item);
  // router.push('/common/index');
}
</script>

<style lang="less">
body {
  margin: 0;
  padding: 0;

  .nav {
    width: 100%;
    height: 56px;
    line-height: 56px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 40px;
    background-color: #f8f8f8;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: 0 0 10px 1px #dedede;
    user-select: none;

    .nav_icon {
      display: flex;
      align-items: center;
      cursor: pointer;

      img {
        width: 30px;
        height: 30px;
      }

      div {
        font-size: 22px;
        font-weight: bold;
        color: #f58f98;
        margin-left: 6px;
      }
    }

    .nav_view {
      .nav_item {
        font-size: 14px;
        cursor: pointer;
      }
    }
  }
}
</style>
