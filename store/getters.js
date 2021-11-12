const getters = {
	sidebar: state => state.app.sidebar,
	language: state => state.app.language,
	size: state => state.app.size,
	isCollapse: state => state.app.isCollapse,
	isSearch: state => state.app.isSearch,
	device: state => state.app.device,

	theme: state => state.app.theme, // 暂未使用，此字段保存 换肤数据对应的下标，与skin相互使用
	skin: state => state.app.skin, // 当前换肤的详细配置
	currentColor: state => state.app.currentColor, // 当前选择换肤的主题色
	currentName: state => state.app.currentName, // 当前选择换肤的主题名称
}
export default getters
