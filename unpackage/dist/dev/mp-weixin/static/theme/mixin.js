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
			let item = this.themeList[Number(e.detail.value)].value;
			this.$store.commit("app/skinPeeler", item);
		}
	}
}
