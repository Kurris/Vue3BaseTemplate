<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" :ellipsis="false" mode="horizontal"
        background-color="#212123" text-color="#fff" active-text-color="#04da04" @select="handleSelect">
        <el-menu-item index="1">A</el-menu-item>
        <el-menu-item index="2">B</el-menu-item>
        <el-menu-item index="3">C</el-menu-item>
        <el-menu-item index="4">S</el-menu-item>
        <el-menu-item index="5">
            <template #default>
                SUPPORT
            </template>
        </el-menu-item>
    </el-menu>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style scoped lang="scss">
.el-menu--horizontal {
    border-bottom: none
}

.el-menu--horizontal>.el-menu-item {
    border-bottom: none;
}

.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
}

.el-menu-item {
    &:hover {
        background-color: #212123 !important;
        color: #04da04 !important;
    }

    &.is-active {
        background-color: #212123 !important;
    }
}
</style>