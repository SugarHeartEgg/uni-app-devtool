const NODE_ENV = process.env.NODE_ENV;
const HOST = NODE_ENV === "production" ? "/api" : "xxx";

import {
	message
} from "../js/uni-api-fun.js"


// 环境变量
export const getInfo = () => {
	console.log("环境变量", NODE_ENV);
}

// post
export const post = (url, data) => {
	return new Promise((resolve, reject) => {
		const option = {
			url: HOST + url,
			data,
			method: "POST",
			header: {
				'author-token': uni.getStorageSync("token")
			},
			success: (res) => {
				const resNum = [1, 2, 3]
				if (resNum.include(res.data.code)) {
					message(res.data.msg);
				}
				resolve(res.data);
			},
			fail: (err) => {
				// message("系统异常");
				console.log('url', HOST + url);
				reject(err);
			}
		}
		uni.request(option);
	});
}

// get
export const get = (url, data) => {
	return new Promise((resolve, reject) => {
		const option = {
			url: HOST + url,
			data,
			method: "GET",
			header: {
				'author-token': uni.getStorageSync("token"),
			},
			success: (res) => {
				const resNum = [1, 2, 3]
				if (resNum.include(res.data.code)) {
					message(res.data.msg);
				}
				resolve(res.data);
			},
			fail: (err) => {
				// message("系统异常");
				reject(err);
			}
		}
		uni.request(option);
	});
}
