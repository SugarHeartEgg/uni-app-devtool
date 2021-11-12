<template>
	<view class="content">
		<view :style="[MobileLeft]">
			<view v-show="!isNav">
				<view v-for="(item,index) in menuLists" :class="menuIndex==index ? 'menuListSelect' : 'menuList' " @click="selectMenu(index,item)">
					{{item.title}}
				</view>
			</view>
			<view v-show="isNav">
				<slot name="nav"></slot>
			</view>
			<view :style="[foot]"></view>
		</view>
		
		<view :style="[MobileRight]">
			<view v-show="!isSlot">
				<view class="goodsList" v-for="(it,index) in goods">
					<image :src="it.img" :style="[ImgStyle]" mode="aspectFill"></image>
					<view class="goodsDesc">
						<text>{{it.label}}</text>
						<view class="hot">月销量{{it.hot}}</view>
						<view class="price">￥{{it.price}}元</view>
						<view class="type" @tap="onClick(it)">选规格</view>
					</view>
				</view>
			</view>
			<view v-show="isSlot">
				<slot name="list"></slot>
			</view>
			<view :style="[foot]"></view>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			menuLists:{
				type:[Array,Number,Object],
				default:[]
			},
			imgSize:{
				type:String,
				default:'120rpx'
			},
			bottomSize:{
				type:String,
				default:'0rpx'
			},
			isSlot:{
				type:Boolean,
				default:false
			},
			isNav:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				menuIndex: 0,
				goods:[],
				height:'',
				title:''
			}
		},
		created() {
			//设置手机的高度
			var me = this
			uni.getSystemInfo({
			    success: function (res) {
					me.height = res.windowHeight
			    }
			});
			if(this.menuLists == []){
				
			}
			this.goods = this.menuLists[0].goods
		},
		mounted() {

		},
		computed:{
			// 右侧产品样式
			MobileRight(){
				let style = {}
				style.position = 'fixed'
				style.right = '0rpx'
				style.width = '520rpx'
				style.height = this.height +'px'
				style.right = "3rpx"
				style.backgroundColor = '#FFFFFF'
				style.overflow = 'auto'
				return style
			},
			//左侧菜单样式
			MobileLeft(){
				let style = {}
				style.position = 'fixed'
				style.left = '0rpx'
				style.width = '230rpx'
				style.height = this.height +'px'
				style.backgroundColor = '#f3f4f6'
				style.overflow = 'auto'
				return style
			},
			// 产品图片样式
			ImgStyle(){
				let style = {}
				style.width = this.imgSize
				style.height = this.imgSize
				style.marginTop = '10rpx'
				return style
			},
			//底部距离
			foot(){
				let style = {}
				style.width = '100%'
				style.float = 'left'
				style.height = this.bottomSize
				return style
			}
		},
		methods: {
			// 菜单选择
			selectMenu(index,data){
				this.menuIndex = index
				this.goods = this.menuLists[index].goods
				this.title = this.menuLists[index].title
				this.$emit('listenMenu',data);
			},
			// 点击规格
			onClick(e) {
				this.$emit('listenEvent',e);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.menuList{
		text-align: center;
		padding: 20rpx 10rpx;
		font-size: 30rpx;
	}
	.menuListSelect{
		text-align: center;
		background-color: #FFFFFF;
		padding: 30rpx 0rpx;
		font-size: 32rpx;
		font-weight: bold;
	}
	.goodsList{
		float: left;
		border-bottom: 1rpx solid #f3f4f6;
		padding: 10rpx;
		text{
			font-weight: bold;
			font-size: 32rpx;
		}
	}
	.title{
		font-weight: bold;
		font-size: 32rpx;
		padding: 10rpx;
	}
	.hot{
		color: red;
		margin-top: 10rpx;
		font-size: 26rpx;
	}
	.price{
		margin-top: 10rpx;
		font-size: 30rpx;
		font-weight: bold;
		color: #dd6161;
	}
	.type{
		margin-left: 180rpx;
		width: 105rpx;
		display:inline-block;
		margin-bottom: 10rpx;
		background-color: #dd6161;
		padding: 5rpx 10rpx;
		border-radius: 10rpx;
		color: #FFFFFF;
		text-align: center;
		font-size: 26rpx;
	}
	.goodsDesc{
		margin-left: 25rpx;
		float: right;
	}
</style>
