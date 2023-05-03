<template>
    <div class="carousel">
        <el-carousel height="80vh">
            <el-carousel-item v-for="item in sources" :key="item">
                <el-image :src="item" fit="fill" />
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


const sources = ref(new Array(...['https://www.vaporesso.com/hubfs/imgs/2022/index/banner/fun-with-banner.jpg?v=1.4',
    'https://www.vaporesso.com/hubfs/imgs/2022/pro/series/luxe-xr-max/pc/pc-banner.png',
    'https://www.vaporesso.com/hubfs/imgs/2022/pro/series/xros3nano/x3nano-pc.jpg',
    'https://www.vaporesso.com/hubfs/imgs/2022/pro/series/gen200-itank2/banner/pc-Banner-gen%20200.jpg',
    'https://www.vaporesso.com/hubfs/imgs/2022/index/banner/xros3cmf-pc-banner.jpg']))


</script>
<style lang="scss" scoped>
.carousel {
    background-color: black;
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