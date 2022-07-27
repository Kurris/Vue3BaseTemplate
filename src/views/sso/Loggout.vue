<template></template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
	console.log('access_token')
	localStorage.removeItem('access_token')
})
</script>
<style lang="scss" scoped>
</style>
