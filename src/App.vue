<template>
  <!-- 顶部导航栏 -->
  <nav class="nav" v-show="navShow">
    <div class=" nav_icon" @click="home">
      <img src="/icon.png" alt="">
      <div>Cxpller</div>
    </div>
    <div class="nav_view">
      <div v-for="item in navItem" class="nav_item" @click="jump(item)">
        {{ item.name }}
      </div>
    </div>
  </nav>
  <!-- <div :style="{ height: navAbsolute ? '56px' : '' }"></div> -->
  <router-view />
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { userStore } from '~/store';
import { useRoute, useRouter } from 'vue-router';
import './style/global.less'

const route = useRoute();
const router = useRouter();

const navItem = reactive({
  home: {
    name: '首页', value: 'home'
  },
  blog: {
    name: '博客', value: 'blog'
  },
  notes: {
    name: '笔记', value: 'notes'
  },
  goals: {
    name: '目标', value: 'goals'
  },
  about: {
    name: '关于', value: 'about'
  },
  links: {
    name: '友链', value: 'links'
  }
})

const jump = (item) => {
  router.push('/' + item.value);
}

watch(route, v => {
  showNav(v.path);
});

const navShow = ref(false)
const navAbsolute = ref(false)

// 当前页面是否需要nav
const showNav = e => {
  let navStr = userStore().data.notNav.indexOf(e);
  navShow.value = navStr == -1;
  // let absStr = userStore().data.navAbsolute.indexOf(e);
  // navAbsolute.value = absStr == -1;
};
</script>

<style lang="less">
@import "./style/global.less";

body {
  margin: 0;
  padding: 0;

  .nav {
    width: 100%;
    height: 56px;
    line-height: 56px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 40px;
    background-color: rgba(248, 248, 248, 0.848);
    box-shadow: 0 0 10px 1px #dedede;
    user-select: none;
    z-index: 999;

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
        color: @theme_color;
        margin-left: 6px;
      }
    }

    .nav_view {
      display: flex;

      .nav_item {
        font-size: 14px;
        cursor: pointer;
        margin: 0 20px;
      }
    }
  }
}
</style>
