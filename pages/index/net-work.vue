<template>
	<view class="net-work-warp">
		<zbw-select-theme>
			<view class="content">
				<u-navbar :title="netWork"></u-navbar>
				<image class="img" src="@/static/imgs/home/netWorkError.png"></image>
			</view>
		</zbw-select-theme>
	</view>
</template>

<script>
	export default {
		computed: {
			netWork() {
				return this.$t('title.network')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.net-work-warp {
		.content {
			width: 100vw;
			height: 100vh;
			display: flex;
			align-items: center;
			justify-content: center;

			.img {
				background: repeat;
			}
		}
	}
</style>
