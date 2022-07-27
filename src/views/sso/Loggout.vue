<template></template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue'

onBeforeMount(() => {
	console.log('loggouted: call by identityserver iframe page')
	// localStorage.removeItem('access_token')
})
</script>
<style lang="scss" scoped>
</style>
