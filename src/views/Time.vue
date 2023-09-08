<template>
    <div class="time-container">
        <div v-if="obj.year > 0">
            <div>星期{{ weeks[obj.week] }} {{ obj.year }}-{{ fixData(obj.month) }}-{{ fixData(obj.day) }} {{ fixData(obj.hour)
            }}:{{
    fixData(obj.minute)
}}:{{
    fixData(obj.second) }}</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

const weeks = ['日', '一', '二', '三', '四', '五', '六']

const obj = reactive({
    year: 0,
    month: 0,
    day: 0,
    hour: 0,
    minute: 0,
    second: 0,
    week: 0
})

const fixData = (num: number) => {
    if (num < 10) {
        return '0' + num
    }
    return num
}

setInterval(() => {
    let date = new Date();

    obj.year = date.getFullYear();  // 年
    obj.month = date.getMonth() + 1;  // 月（注意要加1）
    obj.day = date.getDate();  // 日
    obj.hour = date.getHours();  // 时
    obj.minute = date.getMinutes();  // 分
    obj.second = date.getSeconds();  // 秒

    // 获取当前星期
    obj.week = date.getDay();  // 星期（0表示星期日，1表示星期一，以此类推）
}, 1000)

</script>

<style lang="scss" scoped></style>