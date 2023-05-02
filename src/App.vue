<template>
	<div class="app">
		<el-affix :offset="0" :z-index="-200">
			<WarningTitle />
			<VideoIntroduction />
		</el-affix>
		<el-affix :offset="0" :z-index="200">
			<Nav />
		</el-affix>
		<IntrductionCarousel />
		<GoodContainer />
		<Footer />
		<AgeVerifyMask />
	</div>
</template>
<script lang="ts" setup>
import AgeVerifyMask from './views/AgeVerifyMask.vue';
import WarningTitle from './views/WarningTitle.vue';
import VideoIntroduction from './views/VideoIntroduction.vue';
import Nav from './views/Nav.vue';
import IntrductionCarousel from './views/IntrductionCarousel.vue';
import GoodContainer from './views/GoodContainer.vue';
import Footer from './views/Footer.vue';

</script>
<style lang="scss" >
@use '@/styles/global.scss' as *;
</style>
