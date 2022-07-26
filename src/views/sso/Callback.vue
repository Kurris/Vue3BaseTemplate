<template></template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { userCallbackMgr, accessTokenKey } from '@/lib/oidcConfig'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'

const router = useRouter()

onBeforeMount(async () => {
	try {
		let user = await userCallbackMgr.signinRedirectCallback()
		localStorage.setItem(accessTokenKey, user.access_token)
		router.push({
			path: '/template',
		})
	} catch (error) {
		ElNotification({
			title: '登录异常',
			type: 'error',
			message: error as any,
		})
	}
})
</script>
<style lang="scss" scoped>
</style>
