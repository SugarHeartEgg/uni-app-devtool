const getters = {
	sidebar: state => state.app.sidebar,
	language: state => state.app.language,
	size: state => state.app.size,
	isCollapse: state => state.app.isCollapse,
	isSearch: state => state.app.isSearch,
	device: state => state.app.device,

	theme: state => state.app.theme, // 暂未使用，此字段保存 换肤数据对应的下标，与skin相互使用
	skin: state => state.app.skin
}
export default getters
