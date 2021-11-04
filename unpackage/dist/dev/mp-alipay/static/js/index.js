/**
 * 公共 私有方法
 */ 

//获取时间
export const getNowFormatDate = () => {
	const date = new Date();
	const seperator1 = "-";
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	const currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate
}

// 获取七天前的时间
export const get7AgoFormatDate = () => {
	const date = new Date();
	date.setDate(date.getDate() - 6)
	const seperator1 = "-";
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	const currentdate = year + seperator1 + month + seperator1 + strDate;
	return currentdate
}

//获取前7天日期
export const getTime7days = function() {
	var myDate = new Date();
	myDate.setDate(myDate.getDate() - 6);
	var dateArray = [];
	var dateTemp;
	var flag = 1;
	for (var i = 0; i < 7; i++) {
		var month = (myDate.getMonth() + 1) > 9 ? (myDate.getMonth() + 1) : "0" + (myDate.getMonth() + 1);
		var date = myDate.getDate() > 9 ? myDate.getDate() : "0" + myDate.getDate()
		dateTemp = month + "月" + date + "日";
		dateArray.push(dateTemp);
		myDate.setDate(myDate.getDate() + flag);
	}
	return dateArray
}

// 获取明天时间
export const tomorrowDay = () => {
	const date = new Date();
	const seperator1 = "-";
	date.setTime(date.getTime() + 24 * 60 * 60 * 1000);
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	const tomorrowdate = year + seperator1 + month + seperator1 + strDate;
	return tomorrowdate
}

// 序列化日期
export const formatDate = (stamp, isSecond) => {
	const timeStamp = stamp / 1;
	const date = timeStamp ? new Date(timeStamp) : new Date();
	const year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	hours = hours < 10 ? "0" + hours : hours;
	minutes = minutes < 10 ? "0" + minutes : minutes;
	seconds = seconds < 10 ? "0" + seconds : seconds;
	if (isSecond || !timeStamp && !isSecond) {
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	} else {
		return `${year}-${month}-${day}`;
	}
}

// 对象转query字符串
export const objToQuery = function(obj) {
	if (!(obj instanceof Object) || !(obj.constructor === Object)) {
		return '';
	}
	const keys = Object.keys(obj);
	if (!keys.length) {
		return '';
	}
	const query = [];
	keys.forEach(key => {
		const value = obj[key] === undefined ? "" : obj[key] === null ? "" : obj[key];
		query.push(`${key}=${value}`);
	});
	return `?${query.join("&")}`;
}


// query字符串转对象
export const quertToObj = function(query) {
	if (typeof query !== 'string') {
		return {};
	}
	const kvList = query.replace(/^\?*/g, '').split('&');
	const obj = {};
	kvList.forEach(item => {
		const kv = item.split('=');
		obj[kv[0]] = kv[1];
	});
	return obj;
}
