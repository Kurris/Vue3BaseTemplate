<template>
    <div class="good-container">
        <el-row justify="center">
            <el-col :span="10" :xs="15">
                <Good title="POD" imageUrl="https://www.vaporesso.com/hubfs/imgs/2022/index/pc/pod-bg.png" />
            </el-col>
            <el-col :span="10" :xs="15">
                <Good title="POD MOD" imageUrl="https://www.vaporesso.com/hubfs/imgs/2022/index/type/podmod.png" />
            </el-col>
            <el-col :span="10" :xs="15">
                <Good title="TANK MOD" imageUrl="https://www.vaporesso.com/hubfs/imgs/2022/index/type/tankmod.png" />
            </el-col>
            <el-col :span="10" :xs="15">
                <Good title="PEN STYLE" imageUrl="https://www.vaporesso.com/hubfs/imgs/2022/index/type/penstyle.png" />
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import Good from './Good.vue';
// https://www.vaporesso.com/hubfs/imgs/2022/index/pc/pod-bg.png
// https://www.vaporesso.com/hubfs/imgs/2022/index/type/podmod.png
//https://www.vaporesso.com/hubfs/imgs/2022/index/type/tankmod.png
//https://www.vaporesso.com/hubfs/imgs/2022/index/type/penstyle.png
</script>
<style lang="scss" scoped>
.good-container {
    background-color: black;

    padding: {
        top: 8%;
        bottom: 8%;
    }
}
</style>