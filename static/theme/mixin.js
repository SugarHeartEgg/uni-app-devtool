import {
	themeListData
} from "./index.js"

export default {
	data() {
		return {
			current: 0,
			themeList: themeListData,
		};
	},
	computed: {
		skin() {
			return this.$store.getters.skin
		},
	},
	methods: {
		// 切换皮肤
		changeTheme(e) {
			let currentColor = this.themeList[Number(e.detail.value)].color;
			let currentName = this.themeList[Number(e.detail.value)].name;
			let skin = this.themeList[Number(e.detail.value)].value;
			this.$store.commit("app/skinPeeler", {
				skin,
				params: {
					currentColor,
					currentName
				}
			});
		}
	}
}
