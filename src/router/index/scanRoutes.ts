import { IAppRoute } from '@/router/index/type'

//vite api, 用于获取所有相关文件
const modules = import.meta.glob('@/router/routes/**/*.ts', {
	import: 'default',
	eager: true,
})

const routes: IAppRoute[] = []
// 扫描获取所有的route定义
for (let path in modules) {
	let mod = modules[path]
	const modList = Array.isArray(mod) ? [...mod] : [mod]
	routes.push(...modList)
}

export default routes
