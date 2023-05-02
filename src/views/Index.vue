<template>
	<div class="container">
		<mask />
	</div>
</template>
<script lang="ts" setup>
import { ref, onBeforeMount, reactive } from 'vue'
import Mask from './Mask.vue';

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
