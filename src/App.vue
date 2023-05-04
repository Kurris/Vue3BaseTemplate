<template>
	<div class="app">
		<el-affix :offset="0" :z-index="-200">
			<WarningTitle />
			<VideoIntroduction />
		</el-affix>
		<el-affix id="nav" :offset="0" :z-index="200">
			<Nav />
		</el-affix>
		<IntrductionCarousel />
		<GoodContainer />
		<Community />
		<Support />
		<Footer />
		<el-backtop :right="100" :bottom="100" :visibility-height="850" style="background-color:#4d4d4d ; color: white;" />
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
import Support from './views/Support.vue';
import Community from './views/Community.vue'


</script>
<style lang="scss" >
@use '@/styles/global.scss' as *;
</style>
