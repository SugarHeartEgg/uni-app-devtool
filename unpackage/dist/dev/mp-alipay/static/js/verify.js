// 校验 函数文件

/**
 * 验证电子邮箱格式
 */
export const email = (value) => {
	return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
 * 验证手机格式
 */
export const mobile = (value) => {
	return /^1[3-9]\d{9}$/.test(value)
}

/**
 * 验证URL格式
 */
export const url = (value) => {
	return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value)
}

/**
 * 验证日期格式
 */
export const date = (value) => {
	return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证十进制数字
 */
export const number = (value) => {
	return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
}

/**
 * 验证整数
 */
export const digits = (value) => {
	return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
export const idCard = (value) => {
	return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
		value)
}


/**
 * 金额,只允许2位小数
 */
export const amount = (value) => {
	//金额，只允许保留两位小数
	return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}


/**
 * 只能输入字母
 */
export const letter = (value) => {
	return /^[a-zA-Z]*$/.test(value);
}

/**
 * 只能是字母或者数字
 */
export const enOrNum = (value) => {
	//英文或者数字
	let reg = /^[0-9a-zA-Z]*$/g;
	return reg.test(value);
}

/**
 * 验证是否包含某个值
 */
export const contains = (value, param) => {
	return value.indexOf(param) >= 0
}

/**
 * 验证一个值范围[min, max]
 */
export const range = (value, param) => {
	return value >= param[0] && value <= param[1]
}

/**
 * 验证一个长度范围[min, max]
 */
export const rangeLength = (value, param) => {
	return value.length >= param[0] && value.length <= param[1]
}

/**
 * 是否固定电话
 */
export const landline = (value) => {
	let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
	return reg.test(value);
}

/**
 * 判断是否为空
 */
export const empty = (value) => {
	switch (typeof value) {
		case 'undefined':
			return true;
		case 'string':
			if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
			break;
		case 'boolean':
			if (!value) return true;
			break;
		case 'number':
			if (0 === value || isNaN(value)) return true;
			break;
		case 'object':
			if (null === value || value.length === 0) return true;
			for (var i in value) {
				return false;
			}
			return true;
	}
	return false;
}

/**
 * 是否json字符串
 */
export const jsonString = (value) => {
	if (typeof value == 'string') {
		try {
			var obj = JSON.parse(value);
			if (typeof obj == 'object' && obj) {
				return true;
			} else {
				return false;
			}
		} catch (e) {
			return false;
		}
	}
	return false;
}


/**
 * 是否数组
 */
export const array = (value) => {
	if (typeof Array.isArray === "export const =") {
		return Array.isArray(value);
	} else {
		return Object.prototype.toString.call(value) === "[object Array]";
	}
}

/**
 * 是否对象
 */
export const object = (value) => {
	return Object.prototype.toString.call(value) === '[object Object]';
}

/**
 * 是否短信验证码
 */
export const code = (value, len = 6) => {
	return new RegExp(`^\\d{${len}}$`).test(value);
}
