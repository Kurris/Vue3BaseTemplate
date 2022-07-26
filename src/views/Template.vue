<template>
	<div class="container">
		<span style="font-size: 50px"> A template for vue{{ version }} </span>
		<el-button type="primary" style="line-height: 25px; margin: 20px" @click="increase">+</el-button>

		<div class="logout" v-if="state.profile != ''">
			<el-button type="primary" @click="signOut">退出登录</el-button>
		</div>
		<pre>{{ state.profile }}</pre>
	</div>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount, reactive } from 'vue'
import { getMenus } from '@/net/api/test'
import { userSignInMgr } from '@/lib/oidcConfig'
import { ElMessageBox } from 'element-plus'

const version = ref(3)
const state = reactive({
	profile: '',
})

const increase = async () => {
	await getMenus()
	version.value++
}

const signOut = () => {
	ElMessageBox.confirm('您是否要退出登录?', '提醒', {
		confirmButtonText: '确定退出',
		cancelButtonText: '取消',
		type: 'warning',
	})
		.then(() => {
			userSignInMgr.signoutRedirect()
		})
		.catch(() => { })
}

onBeforeMount(() => {
	userSignInMgr.getUser().then(user => {
		if (user) {
			state.profile = ''
			state.profile += '你已经成功登录\r\n\r\n' + JSON.stringify(user.profile, null, 4)
		} else {
			state.profile = ''
		}
	})
})
</script>
<style lang="scss" scoped>
.container {
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: center;
	align-items: center;
}
</style>
