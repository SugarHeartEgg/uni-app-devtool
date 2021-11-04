import {
	defaultColorData
} from "./default-color.js"
import {
	pickColorData
} from "./pink-clor.js"


export const storeDefaultColorData = defaultColorData.map((item, index) => {
	return `${item.name}:${item.value}`
}).join(";");


export const themeListData = [{
		value: defaultColorData,
		name: '默认'
	},
	{
		value: pickColorData,
		name: '粉色'
	},
]
