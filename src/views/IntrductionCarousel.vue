<template>
    <div class="carousel">
        <el-carousel height="80vh">
            <el-carousel-item v-for="item in data" :key="item.id">
                <el-image :src="item.imageUrl" fit="fill">
                </el-image>
                <div class="content" v-if="item.content != null">
                    <div class="pic">
                        {{ item.content.pic }}
                    </div>
                    <div class="title">
                        {{ item.content.title }}
                    </div>
                    <div class="description">
                        {{ item.content.description }}
                    </div>
                    <div class="learn">
                        Learn More >
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


const data = ref([{
    id: 1,
    imageUrl: 'https://www.vaporesso.com/hubfs/imgs/2022/index/banner/fun-with-banner.jpg?v=1.4',
    content: null
},
{
    id: 2,
    imageUrl: 'https://www.vaporesso.com/hubfs/imgs/2022/pro/series/xros3nano/x3nano-pc.jpg',
    content: {
        pic: 'XROS 3',
        title: 'NEW iTank 2 Edition',
        description: '2800mAh Ultra High Density Battery | MAX 80W | SSS Leak Resistant Tech COREX Heating Tech | GTX Coil Platform',
        learnMoreUrl: ''
    }
}, {
    id: 3,
    imageUrl: 'https://www.vaporesso.com/hubfs/imgs/2022/pro/series/gen200-itank2/banner/pc-Banner-gen%20200.jpg',
    content: {
        pic: 'XROS 3',
        title: 'NEW iTank 2 Edition',
        description: '2800mAh Ultra High Density Battery | MAX 80W | SSS Leak Resistant Tech COREX Heating Tech | GTX Coil Platform',
        learnMoreUrl: ''
    }
}, {
    id: 4,
    imageUrl: 'https://www.vaporesso.com/hubfs/imgs/2022/index/banner/xros3cmf-pc-banner.jpg',
    content: {
        pic: 'XROS 3',
        title: 'NEW iTank 2 Edition',
        description: '2800mAh Ultra High Density Battery | MAX 80W | SSS Leak Resistant Tech COREX Heating Tech | GTX Coil Platform',
        learnMoreUrl: ''
    }
}])


</script>
<style lang="scss" scoped>
.carousel {
    background-color: black;

    .content {
        color: white;
        // height: 50vh;
        position: absolute;
        top: 50%;
        left: 30%;
        transform: translate(-50%, -30%);

        .pic {
            font-size: 30px;
        }

        .title {
            font-weight: bold;
            font-size: 40px;
            margin-top: 20px;
        }

        .description {
            line-height: 20px;
            font-size: 15px;
            color: #FFFFFF;
            margin-top: 40px;
        }

        .learn {
            margin-top: 40px;

            &:hover {
                color: #04da04;
            }
        }
    }

    .description {}
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