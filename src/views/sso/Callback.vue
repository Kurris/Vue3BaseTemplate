<template></template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { oidcStore } from '@/stores/oidcStore'
const router = useRouter()
const store = oidcStore()

onBeforeMount(async () => {
	try {
		let user = await store.userCallbackManager.signinRedirectCallback()
		localStorage.setItem(store.accessTokenKey, user.access_token)
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
