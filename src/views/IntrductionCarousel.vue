<template>
    <el-carousel height="80vh">
        <el-carousel-item v-for="item in 4" :key="item">
            <el-image src="https://pic1.zhimg.com/v2-d58ce10bf4e01f5086c604a9cfed29f3_r.jpg?source=1940ef5c" fit="fill" />
        </el-carousel-item>
    </el-carousel>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
.carousel {
    height: 75vh;
}

:deep(.el-carousel__container) {
    .el-icon {
        font-size: 64px;
    }

    .el-carousel__arrow {
        background-color: unset;

        &:hover {
            background-color: unset;

        }
    }
}

:deep(.el-carousel__indicator) {
    .el-carousel__button {
        height: 3px;
        width: 64px;
    }
}
</style>