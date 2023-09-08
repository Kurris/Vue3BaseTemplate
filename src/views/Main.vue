<template>
    <div class="store-container">
        <div class="header">
            店家:xxx
            <Time />
        </div>

        <el-menu router :default-active="$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect"
            background-color="#444b75" text-color="white" active-text-color="orange">
            <el-menu-item index="/main/shoplist">收银台</el-menu-item>
            <el-menu-item index="/main/checkin">商品入库</el-menu-item>
            <el-menu-item index="3">商品管理</el-menu-item>
            <el-menu-item index="4">销售流水</el-menu-item>
            <el-menu-item index="/main/base">基础数据</el-menu-item>
        </el-menu>
        <router-view />
    </div>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount, reactive } from "vue";
import Time from "@/views/Time.vue";
// import { useFullscreen } from '@vueuse/core'

// const { isFullscreen, enter, exit, toggle } = useFullscreen()

const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}


onBeforeMount(() => {
    // toggle().then(x => {
    //     console.log(x)
    // }).catch(err => {
    //     console.log(err)
    // })
})

</script>
<style lang="scss" scoped>
.store-container {
    height: 100vh;

    .header {
        display: flex;
        justify-content: space-between;
        align-content: center;


        color: white;

        padding : {
            left: 20px;
            right: 20px;
        }

        background-color: #444b75;
        height: 35px;
        line-height: 35px;

        border-bottom: 0.3px solid white;
    }
}
</style>
