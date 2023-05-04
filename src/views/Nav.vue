<template>
    <div class="nav">
        <div class="brand">
            <el-image style="width: 140px; height: 40px" src="https://www.vaporesso.com/hubfs/imgs/2022/com/logo.png"
                :zoom-rate="1.2" :initial-index="4" fit="fill" />
        </div>

        <div class="main-nav">
            <el-menu :default-active="activeIndex2" class="el-menu-demo" :ellipsis="false" background-color="#111111"
                mode="horizontal" text-color="#fff" active-text-color="#fff" menu-trigger="hover">
                <el-sub-menu index="1" :popper-offset="3" popper-class="ligy-popper">
                    <template #title>
                        <span>PRODUCTS</span>
                    </template>
                    <NavChild />
                </el-sub-menu>
                <el-sub-menu index="2" :popper-offset="3" popper-class="ligy-popper">
                    <template #title>
                        <span>PLATFORM</span>
                    </template>
                    <NavChild />
                </el-sub-menu>
                <el-sub-menu index="3" :popper-offset="3" popper-class="ligy-popper">
                    <template #title>
                        <span>VAPORESSO LAB</span>
                    </template>
                    <NavChild />
                </el-sub-menu>
                <el-sub-menu index="4" :popper-offset="3" popper-class="ligy-popper">
                    <template #title>
                        <span>COMMUNITY</span>
                    </template>
                    <NavChild />
                </el-sub-menu>
                <el-sub-menu index="5" :popper-offset="3" popper-class="ligy-popper">
                    <template #title>
                        <span>SUPPORT</span>
                    </template>
                    <NavChild />
                </el-sub-menu>
                <el-sub-menu index="6" :popper-offset="3" popper-class="ligy-popper">
                    <template #title>
                        <span>Workspace</span>
                    </template>
                    <NavChild />
                    <NavChildDetail />
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

            <el-dropdown>
                <span class="multi-lang">
                    <el-avatar class="icon" :size="21" src="https://www.vaporesso.com/hubfs/imgs/lg/icon/en.png">
                        <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
                    </el-avatar>
                    <span style="margin-left: 10px;">EN</span>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>English</el-dropdown-item>
                        <el-dropdown-item>Français </el-dropdown-item>
                        <el-dropdown-item>Россия</el-dropdown-item>
                        <el-dropdown-item>Portugal</el-dropdown-item>
                        <el-dropdown-item>عربي</el-dropdown-item>
                        <el-dropdown-item>Indonesia</el-dropdown-item>
                        <el-dropdown-item>Español</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import NavChild from './NavChild.vue';
import NavChildDetail from './NavChildDetail.vue';

const activeIndex2 = ref('1')
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

        .multi-lang {
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            border: unset !important;
            margin-left: 20px;
            outline: none !important;
        }
    }
}

.el-sub-menu {
    &.is-opened {
        .el-sub-menu__title {

            span,
            svg {
                color: #04da04;
            }
        }
    }

    :deep(svg) {
        font-size: 0px !important;
    }
}
</style>