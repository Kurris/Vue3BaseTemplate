<template>
    <div class="good-container">
        <el-row justify="center">
            <el-col :span="10" :xs="15">
                <Good />
            </el-col>
            <el-col :span="10" :xs="15">
                <Good />
            </el-col>
            <el-col :span="10" :xs="15">
                <Good />
            </el-col>
            <el-col :span="10" :xs="15">
                <Good />
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import Good from './Good.vue';
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