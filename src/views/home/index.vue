<template>
    <div class="view">
        <img :class="[onSearch ? 'search_background_img' : 'background_img']" src="@img/VRChat_background.png"
            draggable="false">
        <transition name="changeSearch">
            <div v-show="onChangeSearch" :class="[onSearch ? 'on_change_search' : 'change_search']">
                <img @click="changeSeach('google')" src="@img/home/google.svg" draggable="false">
                <img @click="changeSeach('bing')" src="@img/home/bing.svg" draggable="false">
                <img @click="changeSeach('baidu')" src="@img/home/baidu.svg" draggable="false">
            </div>
        </transition>
        <div :class="[onSearch ? 'on_search' : 'search']">
            <div class="search_icon" @click="onChangeSearch = !onChangeSearch;">
                <img v-show="nowSeachCore == 'google'" src="@img/home/google.svg" draggable="false">
                <img v-show="nowSeachCore == 'bing'" src="@img/home/bing.svg" draggable="false">
                <img v-show="nowSeachCore == 'baidu'" src="@img/home/baidu.svg" draggable="false">
            </div>
            <el-input :class="['search_input', onSearch ? 'placeholderClass' : '']" v-model="search_input" clearable
                :placeholder="onSearch ? '请输入搜索内容' : '点击搜索'" @focus="focusSearch()" @blur="blurSearch()"
                @keydown.enter="search()" ref="searchFocus" />
            <div :class="[onSearch ? 'on_search_to' : 'search_to']" @click="search">
                <img src="@img/home/search.svg" draggable="false">
            </div>
        </div>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';

const onSearch = ref(false)
const search_input = ref()

const onChangeSearch = ref(false)
const nowSeachCore = ref('google')
const changeSeachValue = ref('https://www.google.com/search?q=')
const searchUrl = { 'google': 'https://www.google.com/search?q=', 'bing': 'https://cn.bing.com/search?q=', 'baidu': 'https://www.baidu.com/s?ie=UTF-8&wd=' }

const searchFocus = ref(null)

// 聚焦
const focusSearch = () => {
    onSearch.value = true
}
const blurSearch = () => {
    setTimeout(() => {
        if ((search_input.value == '' || search_input.value == undefined) && !onChangeSearch.value) {
            onSearch.value = false
        }
    }, 100);
}

// 搜索框聚焦
const onFocus = () => {
    searchFocus.value.focus()
}

// 搜索
const search = () => {
    if (search_input.value != '' || search_input.value != undefined) {
        window.open(changeSeachValue.value + search_input.value, '_blank')
    }
}

// 选择搜索
const changeSeach = (value) => {
    nowSeachCore.value = value
    changeSeachValue.value = searchUrl[value]
    onChangeSearch.value = false
    if (onSearch.value) {
        onFocus()
    }
}
</script>
  
<style lang = "less" scoped>
.view {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;

    .background_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.6s;
        user-select: none;
    }

    .search_background_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.6s;
        user-select: none;
        transform: scale(1.2);
        filter: blur(4px);
    }

    .change_search {
        width: 180px;
        height: 36px;
        border-radius: 10px;
        border: 1px solid #f6f6f6be;
        position: absolute;
        top: 25%;
        left: 50%;
        transition: 0.6s;
        transform: translate(-50%);
        display: flex;
        align-items: center;
        justify-content: space-around;

        img {
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
    }

    .on_change_search {
        width: 180px;
        height: 36px;
        border-radius: 10px;
        border: 1px solid #f6f6f6be;
        position: absolute;
        top: 50%;
        left: 50%;
        transition: 0.6s;
        transform: translate(-50%);
        display: flex;
        align-items: center;
        justify-content: space-around;

        img {
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
    }

    .changeSearch-leave-active {
        transition: all .6s;
    }

    .changeSearch-leave-to {
        transform: translateX(1500px);
        opacity: 0;
    }

    .search {
        position: absolute;
        top: 20%;
        left: 50%;
        width: 280px;
        height: 50px;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        border: 1px solid #f6f6f6be;
        z-index: 5;
        display: flex;
        transition: 0.6s;
    }

    .on_search {
        position: absolute;
        top: 45%;
        left: 50%;
        width: 350px;
        height: 55px;
        box-shadow: 0 0 20px 6px rgba(50, 50, 50, 0.3);
        transform: translate(-50%, -50%);
        border-radius: 10px;
        border: 1px solid #f6f6f6be;
        z-index: 5;
        display: flex;
        transition: 0.6s;
        background-color: #f6f6f696;
    }

    .search_icon {
        width: 55px;
        height: 100%;
        border-right: 1px solid #f6f6f6;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;

        img {
            width: 22px;
            height: 22px;
            transform: translateX(1px)
        }
    }

    .search_input {
        z-index: 2;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;

        &:deep(.el-input__wrapper) {
            background-color: unset;
            box-shadow: unset;
        }

        &:deep(.el-input__inner) {
            color: #f9f9f9;
        }
    }

    .placeholderClass {
        ::placeholder {
            transition: 0.6s;
            color: #fff;
        }
    }

    .search_to {
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;

        img {
            width: 30px;
            height: 30px;
        }
    }

    .on_search_to {
        height: 100%;
        width: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;

        img {
            width: 30px;
            height: 30px;
        }
    }
}
</style>