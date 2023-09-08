<template>
    <div class="checkIn-container">
        <el-card class="card" @click="open(CheckInType.Scan)">扫码入库</el-card>
        <el-card class="card" style="background-color: ;" @click="open(CheckInType.Import)">导入入库</el-card>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';


const state = reactive({
    showScan: false,
    showImport: false
})

enum CheckInType {
    Scan = 1,
    Import = 2,
}

/**
 * 打开类型界面处理
 * @param type 
 */
const open = (type: CheckInType) => {
    if (type == CheckInType.Scan) {
        state.showScan = true
    }

    if (type == CheckInType.Import) {
        state.showImport = true
    }
}


</script>

<style lang="scss" scoped>
.checkIn-container {
    height: 100vh;

    display: flex;
    justify-content: space-evenly;
    align-items: center;


    .card {
        width: 25%;
        height: 50%;
        transform: translateY(- (60px + 35.5px));


        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 50px;
        cursor: pointer;
    }
}
</style>