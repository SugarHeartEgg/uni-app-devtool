###
`
此文件下是创建，接口请求的文件，接口按照功能模块去命名 .js 文件, 依次进行导出,在需要使用的文件中, 导入使用!

例子：

--- login.js start ---
		// 导入请求方法
		import {post} from '@/xx/xx.js';
		
		// 定义方法函数
		// @{params} payload
		export const getUserInfo = ({...payload})=>{
			return post(`url`,payload)
		}
		
		// 以上述方式，不断创建即可.
		
--- login.js end ---

`