<template>
	<view :style="skin" class="page-skin-warp">
		<zbw-network-error v-if="netWorkInfo" :fixed="true" :message="message" @clickFn="hancleClick">
		</zbw-network-error>
		<slot></slot>
	</view>
</template>

<script>
	export default {
		name: 'zbw-select-theme',
		data() {
			return {};
		},
		created() {

		},
		computed: {
			// // 获取状态栏高度
			// statusBarHeight() {
			// 	return `${(Number(this.top)+ uni.getSystemInfoSync().statusBarHeight)}px`
			// },
			message() {
				return this.$t('title.networkinfo')
			},
			netWorkInfo() {
				const pages = getCurrentPages();
				const route = pages[pages.length - 1].route;
				const url = 'pages/index/net-work';
				console.log(route);
				if (route === url) {
					return false
				} else {

					return true
				}
			}
		},
		methods: {
			hancleClick() {
				uni.navigateTo({
					url: '/pages/index/net-work'
				});
			}
		}
	}
</script>

<style lang="scss">
	.page-skin-warp {
		width: 100%;
		height: 100%;
	}
</style>
