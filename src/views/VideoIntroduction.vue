<template>
    <div class="video-mask" @click="go">
        <el-icon class="arrow" :style="{ bottom: arrowPosition + '%' }">
            <Bottom />
        </el-icon>
        <video class="vi" autoplay loop muted playsinline
            poster="https://www.vaporesso.com/hubfs/imgs/2022/index/xros_3_base.png">
            <source src="https://www.vaporesso.com/hubfs/imgs/2022/index/XORS_3_welcome.mp4">
        </video>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';


const go = () => {
    console.log('go');
    document.querySelector('#nav')?.scrollIntoView(true)
}


const arrowPosition = ref(3)

setInterval(() => {

    if (arrowPosition.value == 3) {
        arrowPosition.value--
        arrowPosition.value--
    } else {
        arrowPosition.value++
        arrowPosition.value++
    }
}, 500);



</script>
<style lang="scss" scoped>
.video-mask {
    height: 79vh;
    background-color: rebeccapurple; //#000000;

    &:hover {
        cursor: pointer;
    }

    .vi {
        width: 100%;
    }
}

.arrow {
    color: white;
    font-size: 32px;
    position: fixed;
    left: 50%;
    transform: translate(-50%, -2%);
    transition: bottom 0.3s ease-in;
}
</style>