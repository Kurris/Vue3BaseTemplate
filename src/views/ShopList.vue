<template>
    <div class="shoplist-container">
        <div class="scanCode">
            <el-input v-model="state.code" ref="code" placeholder="请输入商品名称/条码" style="width: 455px;height: 50px;"
                @keydown.enter="handleClick">
                <template #prepend>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-upc-scan" viewBox="0 0 16 16">
                        <path
                            d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5zM3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
                    </svg>
                </template>
            </el-input>
        </div>

        <el-table :data="tableData" empty-text="等待您的购买哦~" :summary-method="getSummaries"
            :header-row-style="{ color: 'black', fontSize: '20px', fontWeight: '900' }">
            <el-table-column prop="date" align="center" label="商品名称/条码" width="250">
                <template #default="scope">
                    <span style="color: black;font-weight: bold;font-size: 15px;">{{ scope.row.name }}</span>
                    <p>{{ scope.row.date }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="name" align="center" label="单位" width="100" />
            <el-table-column prop="state" align="center" label="单价" width="100" />
            <el-table-column prop="address" align="center" label="数量" width="300">
                <template #default="scope">
                    <el-input-number v-model="scope.row.address" :min="1" />
                </template>
            </el-table-column>
            <el-table-column prop="city" align="center" label="金额" width="120" />
            <el-table-column fixed="right" align="center" label="删除">
                <template #default="scope">
                    <el-icon style="color: red;font-size: 30px;cursor: pointer; " @click="removeItem(scope.row)">
                        <Delete />
                    </el-icon>
                </template>
            </el-table-column>
        </el-table>

        <div class="bottom-button">
            <el-button type="warning" style="width: 300px;height: 100px;font-size: 30px;font-weight: bold;">结账</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { onStartTyping } from '@vueuse/core'


const state = reactive({
    code: ''
})

const code = ref()
onStartTyping(() => {
    if (!code.value.active)
        code!.value.focus()
})

const handleClick = () => {
    console.log(state.code)
    state.code = ''
}

const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom1',
        state: 'California',
        city: 'Los Angeles',
        address: 1,
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-03',
        name: 'Tom1',
        state: 'California',
        city: 'Los Angeles',
        address: 1,
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom2',
        state: 'California',
        city: 'Los Angeles',
        address: 2,
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom3',
        state: 'California',
        city: 'Los Angeles',
        address: 3,
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom4',
        state: 'California',
        city: 'Los Angeles',
        address: 4,
        zip: 'CA 90036',
        tag: 'Office',
    },

])


const removeItem = (item) => {
    console.log('remove', item)
    let i = tableData.value.indexOf(item);
    if (i > -1) {
        tableData.value.splice(i, 1)
    }

}

const getSummaries = (param: any) => {
    console.log('param', param)
    const { columns, data } = param
    const sums: string[] = []
    columns.forEach((column, index) => {
        if (index === 0) {
            sums[index] = 'Total Cost'
            return
        }
        const values = data.map((item) => Number(item[column.property]))
        if (!values.every((value) => Number.isNaN(value))) {
            sums[index] = `$ ${values.reduce((prev, curr) => {
                const value = Number(curr)
                if (!Number.isNaN(value)) {
                    return prev + curr
                } else {
                    return prev
                }
            }, 0)}`
        } else {
            sums[index] = 'N/A'
        }
    })

    return sums
}

</script>

<style lang="scss" scoped>
.shoplist-container {
    .scanCode {
        margin: {
            top: 25px;
            bottom: 25px;
            right: 50px;
        }

        display: flex;
        justify-content: end;
    }

    .bottom-button {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }



}
</style>