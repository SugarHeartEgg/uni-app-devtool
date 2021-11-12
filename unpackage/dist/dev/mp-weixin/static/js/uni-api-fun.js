/**
 * uni-api 二次封装 文件
 */

// 页面跳转，权限控制
export const navigateTo = (option, isSwitchTab, isRedirectTo) => {
	if (typeof option === "string") {
		if (isSwitchTab) {
			uni.switchTab({
				url: option
			});
		} else if (isRedirectTo) {
			uni.redirectTo({
				url: option
			});
		} else {
			uni.navigateTo({
				url: option
			});
		}
	} else if (typeof option === "object") {
		if (isSwitchTab) {
			uni.switchTab(option);
		} else if (isRedirectTo) {
			uni.redirectTo(option);
		} else {
			uni.navigateTo(option);
		}
	} else {
		message("该模块暂未开发");
	}
}

// 返回
export const navigateBack = () => {
	uni.navigateBack();
}

export const relaunch = (url) => {
	uni.reLaunch({
		url: url
	})
}

// 提示
export const message = (option) => {
	if (typeof option === "object") {
		uni.showToast(option);
	} else {
		uni.showToast({
			title: option,
			icon: "none",
			duration: 2500
		});
	}
}
