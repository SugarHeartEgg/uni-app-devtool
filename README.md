### 国际化的使用方式

`
1:如果我需要在js中判断当前语言，进行不同的页面跳转怎么办？

		 ： 通过this.$i18n.locale就能获取当前的语言名称
	
		 
2:如何修改导航栏的标题？

		 ：uni.setNavigationBarTitle()
		 在onShow生命周期设置导航栏标题
		 		onShow() {
		 			uni.setNavigationBarTitle({
		 				title: this.$t('title.home')
		 			});
		 		}
				
3:如何修改底部Tabbar导航的文字？

		 ：uni.setTabBarItem()
		 	methods: {
				switchLang() {
					// uni.setTabBarItem接口详见：https://uniapp.dcloud.io/api/ui/tabbar?id=settabbaritem
					// 说明：这种方法不适用自定义tabbar，自定义tabbar请自行根据逻辑调整
					// 注意：【支付宝小程序开发工具】需要1.13版本才支持此接口的模拟，真机预览不受限制
					uni.setTabBarItem({
						index: 0,
						text: this.$t('tabbar.index'),
					})
					uni.setTabBarItem({
						index: 1,
						text: this.$t('tabBar.news'),
					})
					uni.setTabBarItem({
						index: 2,
						text: this.$t('tabBar.center'),
					})
				}
			}
`

### uviewUi
`
注意,请使用1.x版本

[](https://www.uviewui.com/components/quickstart.html)
`

### uni-ui
`
[](https://ext.dcloud.net.cn/plugin?id=26)
`

### 下拉，上拉功能
`
请使用 mescroll-uni 版本

[](https://www.mescroll.com/uni.html#begin)

在父组件中使用，需在pages.js 对应的 文件路径 配置一下
`

### 换肤功能
`
换肤数据在 static/theme 文件下
	1：index.js 为入口文件，汇总，store需要的默认样式，以及多套 换肤数据
	2：mixin 是为了减少在页面多次 书写 skin(当前使用样式)、 current(使用的换肤当前下标)、themeList（换肤数组）
	3：在main入口 把theme/mixin 混入到全局
	4: 封装了公共父组件，减少在页面多次绑定 skin 等
	5: 暂未把 theme 保存到本地，后续可对接 (2021-11-04 连怡恒书写)
`

### 注意事项
`
快速过一下,uni-app开发注意事项,[](https://uniapp.dcloud.io/matter?id=%e4%bd%bf%e7%94%a8-vuejs-%e7%9a%84%e6%b3%a8%e6%84%8f)
以及uviewUi,[](https://www.uviewui.com/components/feature.html)
避免南辕北辙。
`