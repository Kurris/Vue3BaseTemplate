<template>
    <div class="good">
        <el-card class="box-card"
            :style="{ 'background-image': `url(${imageUrl})`, 'background-repeat': 'no-repeat', 'background-size': 'cover' }">
            <div class="title">
                {{ title }}
            </div>
            <div class="description">
                Satisfaction And Convenience
            </div>
            <div class="learn">
                Learn More >
            </div>
        </el-card>
    </div>
</template>
<script lang="ts" setup>

const props = defineProps<{
    title: String,
    imageUrl: String
}>()


</script>
<style lang="scss" scoped>
.box-card {
    height: 33vw;
    margin: 18px;
    border: unset;
    border-radius: 1.56vw;
    display: flex;
    justify-content: center;
    background-color: black;

    &:hover {
        cursor: pointer;
    }

    .title {
        text-align: center;
        color: white;
        font-size: 30px;
        font-weight: bold;
    }

    .description {
        text-align: center;
        color: #cccac8;
        font-size: 20px;
        margin-top: 10px;
    }

    .learn {
        text-align: center;
        margin-top: 25px;
        color: white;

        &:hover {
            color: #04da04;
        }
    }
}
</style>