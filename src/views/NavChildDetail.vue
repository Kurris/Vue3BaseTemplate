<template>
    <div class="nav-child-detail">
        <el-card class="box">
            <el-image class="pic" src="https://www.vaporesso.com/hubfs/imgs/Tank/xros-pod/cate-xrospod.png" fit="fill" />
        </el-card>
        <span>
            产品名称
        </span>
        <p style="font-size: 13px;color: #04da04;">
            Learn More
        </p>
    </div>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.nav-child-detail {

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: {
        top: 25px;
        bottom: 25px;
    }

    .box {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 168px;
        width: 168px;
        border-radius: 12%;

        &:hover {
            cursor: pointer;
        }

        .pic {
            width: 160px;
            height: 160px;
            transition-property: all;
            transition-timing-function: ease-in;
            transition-delay: 0;
            transition-duration: 0.2s;


            &:hover {
                transform: scale(1.1);
            }
        }
    }
}


span {
    color: white;
    font-size: 13px;
    text-align: center;
    margin-top: 15px;
}
</style>