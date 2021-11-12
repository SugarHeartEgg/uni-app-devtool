// 非选择状态
const shop = "static/imgs/tabbar/shop.png"
const data = "static/imgs/tabbar/data.png"
const work = "static/imgs/tabbar/work.png"
const my = "static/imgs/tabbar/my.png"

// 选中状态 动态拼凑 路径
const selectShop = "static/imgs/tabbar/select_shop_"
const selectData = "static/imgs/tabbar/select_data_"
const selectWork = "static/imgs/tabbar/select_work_"
const selectMy = "static/imgs/tabbar/select_my_"


export default {
	watch: {
		"$i18n.locale": {
			handler(val, oldVal) {
				this.changeLang()
			},
			immediate: true
		},
		currentColor: {
			handler(val, oldVal) {
				this.initTabBarStyle()
			},
			immediate: true
		},
		currentName: {
			handler(val, oldVal) {
				this.changeLang()
			},
		}
	},
	computed: {
		tabNameOne() {
			return this.$t('bar.indexOne')
		},
		tabNameTwo() {
			return this.$t('bar.indexTwo')
		},
		tabNameThree() {
			return this.$t('bar.indexThree')
		},
		tabNameFour() {
			return this.$t('bar.indexFour')
		},
		currentColor() {
			return this.$store.getters.currentColor
		},
		currentName() {
			return this.$store.getters.currentName
		}
	},
	methods: {
		changeLang() {
			const tabBarList = [{
				index: 0,
				text: this.tabNameOne,
				iconPath: shop,
				selectedIconPath: `${selectShop}${this.currentName}.png`
			}, {
				index: 1,
				text: this.tabNameTwo,
				iconPath: data,
				selectedIconPath: `${selectData}${this.currentName}.png`
			}, {
				index: 2,
				text: this.tabNameThree,
				iconPath: work,
				selectedIconPath: `${selectWork}${this.currentName}.png`
			}, {
				index: 3,
				text: this.tabNameFour,
				iconPath: my,
				selectedIconPath: `${selectMy}${this.currentName}.png`
			}];

			// console.log(tabBarList);

			tabBarList.forEach(item => {
				uni.setTabBarItem({
					index: item.index,
					text: item.text,
					iconPath: item.iconPath,
					selectedIconPath: item.selectedIconPath
				})
			})
		},
		initTabBarStyle() {
			uni.setTabBarStyle({
				color: '#000',
				selectedColor: this.currentColor,
				borderStyle: 'white'
			})
		}
	}
}
