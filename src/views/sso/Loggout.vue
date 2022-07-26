<template></template>
<script lang="ts" setup>
import { accessTokenKey } from '@/lib/oidcConfig'
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
	console.log(accessTokenKey)
	localStorage.removeItem(accessTokenKey)
})
</script>
<style lang="scss" scoped></style>
