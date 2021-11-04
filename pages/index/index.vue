<template>
	<theme-warp>
		<view class="content">
			<u-navbar :is-back="false" title="123123">
				<view class="slot-wrap">
					<u-icon name="icon-shuaxin" custom-prefix="zbw" size="50"></u-icon>
				</view>
			</u-navbar>
			<mescroll-uni ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback"
				:down="downOption" :up="upOption">

				<view class="list-warp">
					<image class="logo" src="/static/logo.png"></image>
					<view class="text-area">
						<text class="title">{{rulesCode}}</text>
					</view>

					<view style="margin-top: 200rpx;">
						{{password}}
						<button @click="switchLang(0)">切换中文</button>
						<u-button @click="switchLang(1)">切换英文</u-button>
					</view>

					<view>
						<u-icon name="icon-dangan" custom-prefix="zbw" size="50"></u-icon>
						<u-icon name="icon-caigou" custom-prefix="zbw" size="50"></u-icon>
					</view>

					<!-- 换肤 -->
					<view class="nav-bar text-color">换肤示例</view>
					<view style="padding: 100rpx;">
						<button type="default" hover-class="none" class="btn">按钮 - 页面中的元素</button>

						<text class="text-color">文字颜色</text>
					</view>
					<view class="card">
						<view style="padding-bottom: 20rpx;" class="text-color">请选择皮肤风格</view>
						<radio-group @change="changeTheme">
							<label class="h-flex-x list-item" v-for="(item, index) in themeList" :key="index">
								<view>
									<radio :value="index.toString()" :checked="index === current" />
								</view>
								<view style="padding-left: 30rpx;">{{item.name}}</view>
							</label>
						</radio-group>
					</view>

					<view v-for="data in dataList" :key="data.name"> {{data.name}} </view>
				</view>
			</mescroll-uni>
		</view>
	</theme-warp>
</template>

<script>
	// 引入mescroll-mixins.js
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";
	import themeWarp from "./selectTheme/index.vue"

	import {
		getInfo
	} from "@/static/http/index.js"

	export default {
		mixins: [MescrollMixin], // 使用mixin
		components: {
			themeWarp
		},
		data() {
			return {
				// current: 0,
				// themeList: themeListData,
				dataList: [{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
					{
						name: 1 + 1
					},
				]
			}
		},
		computed: {
			// skin() {
			// 	return this.$store.getters.skin
			// },
			rulesCode() {
				return this.$t('login.rulesCode')
			},
			password() {
				return this.$t('login.password')
			}
		},
		// 在onShow生命周期设置导航栏标题
		onShow() {
			uni.setNavigationBarTitle({
				title: this.$t('title.home')
			});
		},
		onLoad() {
			getInfo()
		},
		methods: {
			// 切换中英文
			switchLang(params) {
				console.log(this.$i18n.locale);
				const langArr = ['zh', 'en']
				this.$i18n.locale = langArr[params];
			},

			// // 切换皮肤
			// radioChange(e) {
			// 	let item = this.themeList[Number(e.detail.value)].value;
			// 	this.$store.commit("app/skinPeeler", item);
			// }
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
		font-size: 28rpx;
	}

	.content {}

	::v-deep .list-warp {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		.logo {
			height: 200rpx;
			width: 200rpx;
			margin-top: 200rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
		}

		.text-area {
			display: flex;
			justify-content: center;
		}

		.title {
			font-size: 36rpx;
			color: #8f8f94;
		}
	}

	.h-flex-x {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		align-items: center;
		align-content: center;
	}

	.card {
		background-color: var(--nav-bg);
		color: var(--nav-color);
		padding: 30rpx;
	}

	.list-item {
		height: 90rpx;
		border-top: var(--nav-color) solid 1px;
	}

	.nav-bar {
		box-sizing: content-box;
		height: 44px;
		background-color: var(--nav-bg);
		padding-top: var(--status-bar-height);
		color: var(--nav-color);
		line-height: 44px;
		text-align: center;
		font-size: 16px;
	}

	.btn {
		background-color: var(--nav-bg) !important;
		color: var(--nav-color) !important;
	}

	.text-color {
		color: var(--text-color) !important;
	}
</style>
