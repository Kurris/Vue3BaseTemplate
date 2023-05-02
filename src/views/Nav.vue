<template>
    <div class="nav">
        <div class="brand">
            <el-image style="width: 140px; height: 40px"
                src="https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg" :zoom-rate="1.2"
                :initial-index="4" fit="cover" />
        </div>

        <div class="main-nav">
            <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" menu-trigger="hover"
                :ellipsis="false" background-color="#111111" text-color="#fff" active-text-color="#fff"
                @select="handleSelect">
                <el-menu-item index="1">PRODUCTS</el-menu-item>
                <el-menu-item index="2">PLATFORM</el-menu-item>
                <el-menu-item index="3">VAPORESSO LAB</el-menu-item>
                <el-menu-item index="4">COMMUNITY</el-menu-item>
                <el-menu-item index="5">
                    <template #default>
                        SUPPORT
                    </template>
                </el-menu-item>
                <el-sub-menu index="7" :popper-offset="3" popper-class="ligy-popper">
                    <template #title>Workspace</template>
                    <template #default>
                        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                            background-color="#212123" text-color="#fff" active-text-color="#fff" @select="handleSelect">
                            <el-menu-item index="1">PRODUCTS</el-menu-item>
                            <el-menu-item index="2">PLATFORM</el-menu-item>
                            <el-menu-item index="3">VAPORESSO LAB</el-menu-item>
                            <el-menu-item index="4">COMMUNITY</el-menu-item>
                            <el-menu-item index="5">
                                <template #default>
                                    SUPPORT
                                </template>
                            </el-menu-item>
                        </el-menu>
                    </template>
                </el-sub-menu>
            </el-menu>
        </div>


        <div class="user-operator">
            <el-icon class="icon">
                <LocationInformation />
            </el-icon>
            <el-icon class="icon">
                <ShoppingBag />
            </el-icon>
            <el-icon class="icon">
                <Search />
            </el-icon>
            <el-avatar class="icon" :size="21" src="https://empty" @error="errorHandler">
                <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
            <span style="color: white;margin-left: 5px;">EN</span>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import WarningTitle from './WarningTitle.vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const errorHandler = () => true
</script>
<style lang="scss" scoped>
.el-menu--horizontal {
    border-bottom: none
}

.el-menu--horizontal>.el-menu-item {
    border-bottom: none;
}

.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
}



.nav {
    display: flex;
    height: 64px;
    align-items: center;
    justify-content: space-between;
    background-color: #111111;


    .brand {
        width: 250px;
        display: flex;
        justify-content: end;
    }

    .user-operator {
        width: 250px;
        display: flex;
        align-items: center;

        .icon {
            margin-left: 20px;
            color: white;
            font-size: 21px;
        }
    }
}
</style>