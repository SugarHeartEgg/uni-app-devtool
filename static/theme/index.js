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
		color: "#227fff",
		name: 'sky',
	},
	{
		value: pickColorData,
		color: "#f021ff",
		name: 'pink'
	},
]
