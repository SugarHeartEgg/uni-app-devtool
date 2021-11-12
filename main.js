import App from './App'
import store from '@/store';
// import moment from 'moment'
// import lodash from 'lodash'
// import md5 from 'md5'
import {
	i18n
} from "@/lang"

import themeMixin from "@/static/theme/mixin.js"
import * as uniApiFun from '@/static/js/uni-api-fun.js';

// 网络状态监听
uni.getNetworkType({
	success: res => {
		console.log("main", res.networkType);
	}
});
uni.onNetworkStatusChange((res) => {
	console.log("main", res.networkType);
});



// #ifndef VUE3
import Vue from 'vue'
// ui components
import uView from 'uview-ui';

/**
 *	移动端不挂载在原型上，避免造成 ，打包后的js文件过大。
 *  在需要用的文件 import 使用吧！
 */
// 挂载第三方到 Vue 原型
// Object.assign(Vue.prototype, {
// 	$moment: moment,
// 	$lodash: lodash,
// 	$md5: md5,
// })

// uni-api  二次封装 
Object.keys(uniApiFun).forEach(item => {
	Vue.prototype["$" + item] = uniApiFun[item];
});

Vue.use(uView);
Vue.config.productionTip = false
App.mpType = 'app'

Vue.mixin(themeMixin);

const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
