<template>
    <div class="shoplist-container">
        <div class="scanCode">
            <el-input v-model="price.code" ref="code" placeholder="请输入商品名称/条码" style="width: 455px;height: 50px;"
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
            :header-row-style="{ color: 'black', fontSize: '20px', fontWeight: '900' }" show-summary sum-text="合计">
            <el-table-column prop="date" align="center" label="商品名称/条码" width="250">
                <template #default="scope">
                    <span style="color: black;font-weight: bold;font-size: 15px;">{{ scope.row.name }}</span>
                    <p>{{ scope.row.date }}</p>
                </template>
            </el-table-column>
            <el-table-column prop="name" align="center" label="单位" width="100" />
            <el-table-column prop="price" align="center" label="单价" width="100" />
            <el-table-column prop="qty" align="center" label="数量" width="300">
                <template #default="scope">
                    <el-input-number v-model="scope.row.qty" :min="1" />
                </template>
            </el-table-column>
            <el-table-column prop="amount" align="center" label="金额" width="120">
                <template #default="scope">
                    {{ scope.row.qty * scope.row.price }}
                </template>
            </el-table-column>
            <el-table-column fixed="right" align="center" label="删除">
                <template #default="scope">
                    <el-icon style="color: red;font-size: 30px;cursor: pointer; " @click="removeItem(scope.row)">
                        <Delete />
                    </el-icon>
                </template>
            </el-table-column>
        </el-table>

        <div class="bottom-button">
            <el-button type="warning" style="width: 300px;height: 100px;font-size: 30px;font-weight: bold;"
                @click="dialogTableVisible = true">结账</el-button>
        </div>


        <el-dialog v-model="dialogTableVisible" :show-close="false" width="1000px">
            <template #header="{ close, titleId, titleClass }">
                <div style="display: flex;justify-content: space-between;align-items: center;">
                    <h4 :id="titleId" :class="titleClass">结账确认</h4>
                    <el-button type="danger" @click="close">
                        <el-icon class="el-icon--left">
                            <CircleCloseFilled />
                        </el-icon>
                        Close
                    </el-button>
                </div>
            </template>
            <el-table :data="gridData">
                <el-table-column property="date" label="Date" width="150" />
                <el-table-column property="name" label="Name" width="200" />
                <el-table-column property="qty" label="qty" />
            </el-table>

            <div style="width: 100%;margin-top: 30px;display: flex;justify-content: center;">
                <el-button type="warning" style="width: 800px;height: 100px;font-size: 30px;font-weight: bold;"
                    @click="dialogTableVisible = true">结账</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { onStartTyping } from '@vueuse/core'
const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const gridData = [
    {
        date: '2016-05-02',
        name: 'John Smith',
        qty: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-04',
        name: 'John Smith',
        qty: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-01',
        name: 'John Smith',
        qty: 'No.1518,  Jinshajiang Road, Putuo District',
    },
    {
        date: '2016-05-03',
        name: 'John Smith',
        qty: 'No.1518,  Jinshajiang Road, Putuo District',
    },
]
const price = reactive({
    code: ''
})

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const code = ref()
onStartTyping(() => {
    if (!code.value.active)
        code!.value.focus()
})

const handleClick = () => {
    console.log(price.code)
    price.code = ''
}

const tableData = ref([
    {
        date: '2016-05-03',
        name: 'Tom1',
        price: 2,
        amount: 2,
        qty: 1,
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-03',
        name: 'Tom1',
        price: 5,
        amount: 5,
        qty: 1,
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-02',
        name: 'Tom2',
        price: 9.2,
        amount: 9.2,
        qty: 2,
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: 'Tom3',
        price: 3,
        amount: 3,
        qty: 3,
        zip: 'CA 90036',
        tag: 'Home',
    },
    {
        date: '2016-05-01',
        name: 'Tom4',
        price: 20,
        amount: 20,
        qty: 4,
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

    sums[0] = '合计'
    let amountCol = columns.find(x => x.property == 'amount')
    let i = columns.indexOf(amountCol)

    const qtys: number[] = data.map(item => Number(item['qty']))
    const prices: number[] = data.map(item => Number(item['price']))
    if (!qtys.every(x => Number.isNaN(x)) && !prices.every(x => Number.isNaN(x))) {

        const amounts: number[] = []
        for (let index = 0; index < qtys.length; index++) {
            const qty: number = qtys[index];
            const price: number = prices[index];
            amounts[index] = qty * price
        }
        sums[i] = `RMB ${amounts.reduce((prev, curr) => {
            const value = Number(curr)
            if (!Number.isNaN(value)) {
                return prev + curr
            } else {
                return prev
            }
        }, 0)}`
    }

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