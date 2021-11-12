import {
	storeDefaultColorData
} from "@/static/theme/index.js"

const state = {
	sidebar: {
		opened: uni.getStorageSync('sidebarStatus') ? !!+uni.getStorageSync('sidebarStatus') : true,
		withoutAnimation: false
	},
	device: 'desktop',
	language: "zh",
	theme: uni.getStorageSync('theme') || 1,
	size: uni.getStorageSync('size') || 'medium',
	isCollapse: false,
	isSearch: false,
	skin: storeDefaultColorData,
	currentColor: "#227fff",
	currentName: "sky"
}

const mutations = {
	TOGGLE_SIDEBAR: state => {
		state.sidebar.opened = !state.sidebar.opened
		state.sidebar.withoutAnimation = false
		if (state.sidebar.opened) {
			uni.setStorageSync('sidebarStatus', 1)
		} else {
			uni.setStorageSync('sidebarStatus', 0)
		}
	},
	CLOSE_SIDEBAR: (state, withoutAnimation) => {
		uni.setStorageSync('sidebarStatus', 0)
		state.sidebar.opened = false
		state.sidebar.withoutAnimation = withoutAnimation
	},
	TOGGLE_DEVICE: (state, device) => {
		state.device = device
	},
	SET_LANGUAGE: (state, language) => {
		state.language = language
		uni.setStorageSync('language', language)
	},
	SET_THEME: (state, theme) => {
		state.theme = theme
		uni.setStorageSync('theme', theme)
	},
	SET_SIZE: (state, size) => {
		state.size = size
		uni.setStorageSync('size', size)
	},
	SET_ISCOLLAPSE: (state, isCollapse) => {
		state.isCollapse = isCollapse
	},
	SET_ISSEARCH: (state, isSearch) => {
		state.isSearch = isSearch
	},

	// 皮肤更换
	skinPeeler(state, {
		skin = [],
		params
	}) {
		// 将皮肤配置JSON转为以 ; 分割的字符串（style 值）
		let style = skin.map((item, index) => {
			return `${item.name}:${item.value}`
		}).join(";");
		state.skin = style;
		state.currentColor = params.currentColor;
		state.currentName = params.currentName;
	}
}

const actions = {
	toggleSideBar({
		commit
	}) {
		commit('TOGGLE_SIDEBAR')
	},
	closeSideBar({
		commit
	}, {
		withoutAnimation
	}) {
		commit('CLOSE_SIDEBAR', withoutAnimation)
	},
	toggleDevice({
		commit
	}, device) {
		commit('TOGGLE_DEVICE', device)
	},
	setLanguage({
		commit
	}, language) {
		commit('SET_LANGUAGE', language)
	},
	setTheme({
		commit
	}, theme) {
		commit('SET_THEME', theme)
	},
	setSize({
		commit
	}, size) {
		commit('SET_SIZE', size)
	},
	setIsCollapse({
		commit
	}, isCollapse) {
		commit('SET_ISCOLLAPSE', isCollapse)
	},
	setIsSearch({
		commit
	}, isSearch) {
		commit('SET_ISSEARCH', isSearch)
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	actions
}
