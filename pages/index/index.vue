<template>
	<zbw-select-theme>
		<view class="content">
			<u-navbar :is-back="false" :title-bold="true" :title="indexTitle">
				<view class="slot-wrap">
					<u-icon name="icon-shuaxin" custom-prefix="zbw" size="50"></u-icon>
				</view>
			</u-navbar>
			<view class="main-warp">
				<mescroll-body ref="mescrollRef" @init="mescrollInit" @down="downCallback" @up="upCallback"
					:down="downOption" :up="upOption">
					<view class="list-warp">
						<view class="text-area">
							<text class="title">{{rulesCode}}</text>
						</view>

						<view style="margin-top: 100rpx;">
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

						<!-- 重置 启动页 标识 -->
						<view class="text-color">重置 启动页 标识 </view>
						<u-button @click="onClear">重置</u-button>


						<view v-for="data in dataList" :key="data.name"> {{data.name}} </view>


						<!-- 公司任务 收缩盒子 -->
						<view>
							公司任务 收缩盒子
						</view>
						<view class="card-touch">
							<view class="card-main" :class="{'touch-card-main':touchHeight}" ref="cardMain">

							</view>
							<view class="card-line" @touchstart="startHandle" @touchend="touchHandle">
								----
							</view>
						</view>

					</view>

					<!-- 图表 -->
					<view class="charts-box">
						<view>
							uEchart 图表
						</view>
						<qiun-data-charts type="pie" :chartData="chartData" :echartsApp="true" :inScrollView="true"
							:canvas2d="true" background="none" />
					</view>

					<!-- 键盘keyCode -->
					<view>keyCode</view>
					<u-input v-model="value" :type="type" :border="border" @confirm="confirm" />
					<!-- </mescroll-uni> -->

					<!-- map -->
					<button type="default" hover-class="none" class="btn" @click="getRegeo">高德查询天气</button>

					<view class="geo-warp">
						<view>{{geoInfoData.city.data}}</view>
						<view>{{geoInfoData.humidity.text}}:{{geoInfoData.humidity.data}}</view>
						<view>{{geoInfoData.temperature.text}}:{{geoInfoData.temperature.data}}</view>
						<view>{{geoInfoData.weather.text}}:{{geoInfoData.weather.data}}</view>
						<view>{{geoInfoData.winddirection.text}}:{{geoInfoData.winddirection.data}}</view>
						<view>{{geoInfoData.windpower.text}}:{{geoInfoData.windpower.data}}</view>
					</view>

					<map class="map-warp" style="width:100%;height:600rpx;"></map>
				</mescroll-body>
			</view>

		</view>
	</zbw-select-theme>
</template>

<script>
	// 引入mescroll-mixins.js
	import MescrollMixin from "@/uni_modules/mescroll-uni/components/mescroll-uni/mescroll-mixins.js";

	// 引入 tab-bar-mixin.js
	import TabBarMixin from "@/static/js/tab-bar-mixin.js"

	// 高德
	import amapFile from '../../js_sdk/amap-wx.js';

	import {
		getInfo
	} from "@/static/http/index.js"

	export default {
		mixins: [MescrollMixin, TabBarMixin], // 使用mixin
		data() {
			return {
				touchHeight: false,
				value: "",

				amapPlugin: null,
				key: "91993af39ea4c919fb91a7f92d7340b3",
				addressName: '',
				weather: {
					hasData: false,
					data: []
				},
				geoInfoData: null,


				chartData: {
					categories: [],
					series: [{
						"data": [{
								"name": "一班",
								"value": 50
							},
							{
								"name": "二班",
								"value": 30
							},
							{
								"name": "三班",
								"value": 20
							},
							{
								"name": "四班",
								"value": 18
							},
							{
								"name": "五班",
								"value": 8
							}
						]
					}]
				},
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
			indexTitle() {
				return this.$t('login.login')
			},
			rulesCode() {
				return this.$t('login.rulesCode')
			},
			password() {
				return this.$t('login.password')
			},

		},
		// 在onShow生命周期设置导航栏标题
		onShow() {
			// 使用了自定义的 nav后 就不需要 uni的api去代替了
			// uni.setNavigationBarTitle({
			// 	title: this.$t('title.home')
			// });
		},
		onLoad() {
			getInfo();

			this.amapPlugin = new amapFile.AMapWX({
				key: this.key
			});
		},
		methods: {
			// 切换中英文
			switchLang(params) {
				console.log(this.$i18n.locale);
				const langArr = ['zh', 'en']
				this.$i18n.locale = langArr[params];
			},

			onClear() {
				uni.setStorage({
					key: 'launchFlag',
					data: false,
					success: () => {
						console.log('error时存储launchFlag');
					}
				});
			},

			startHandle(e) {
				this.touchHeight = !this.touchHeight
			},
			touchHandle(e) {
				console.log(e);
			},

			confirm() {
				console.log(123123123);
				this.getRegeo()
			},

			getRegeo() {
				this.amapPlugin.getWeather({
					success: (data) => {
						//成功回调
						console.log(data);
						this.geoInfoData = data
					},
					fail: (info) => {
						//失败回调
						console.log(info)
					}
				})
			}

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
		font-size: 28rpx;
	}

	.content {
		/deep/.u-navbar {
			.u-status-bar {
				background-color: #fff !important;
			}

			background-color: var(--nav-bg) !important;
		}

		.main-warp {
			::v-deep .list-warp {
				padding: 0 10rpx;
				display: flex;
				flex-direction: column;
				align-items: center;

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

				.card-touch {
					display: flex;
					flex-direction: column;

					.card-main {
						width: 100%;
						height: 200rpx;
						transition-property: height;
						transition-duration: 800ms;
						transition-timing-function: ease;
						background: var(--nav-bg) !important;

						&.touch-card-main {
							height: 700rpx;
						}
					}

					.card-line {
						padding: 10rpx 0;
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

				.charts-box {
					width: 100%;
					height: 300px;
				}

			}
		}
	}
</style>
