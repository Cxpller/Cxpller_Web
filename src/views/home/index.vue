<template>
    <div class="view">
        <img class="background_img"
            :style="{ transform: onSearch ? 'scale(1.2)' : '', filter: onSearch ? 'blur(4px)' : '' }"
            src="@img/VRChat_1.png" alt="" draggable="false">
        <div class="search"
            :style="{ top: onSearch ? '45%' : '20%', width: onSearch ? '350px' : '280px', height: onSearch ? '60px' : '50px', backgroundColor: onSearch ? 'rgba(255, 255, 255, 0.6)' : '' }">
            <div class="search_icon">
                <img src="@img/home/google.svg" alt="" draggable="false">
            </div>
            <el-input :class="['search_input', onSearch ? 'placeholderClass' : '']" v-model="search_input" clearable
                :placeholder="onSearch ? '请输入搜索内容' : '点击搜索'" :style="{ placeholder: onSearch ? 'color:#fff' : '' }"
                @focus="focusSearch()" @blur="blurSearch()" />
            <div class="search_to">

            </div>
        </div>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

const onSearch = ref(false)
const search_input = ref()

const focusSearch = () => {
    onSearch.value = true
}
const blurSearch = () => {
    onSearch.value = false
}
</script>
  
<style lang="less" scoped>
.view {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .background_img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 0.6s;
        user-select: none;
    }

    // 居中收缩框
    .search {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border: 1px solid #f6f6f6;
        z-index: 5;
        display: flex;
        transition: 0.6s;

        .search_icon {
            width: 55px;
            height: 100%;
            border-right: 1px solid #f6f6f6;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 24px;
                height: 24px;
                transform: translateX(1px)
            }

        }

        .search_input {
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

        .search_to {}
    }
}
</style>