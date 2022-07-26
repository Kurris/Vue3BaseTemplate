import { IAppRoute } from './type'

//vite api, 用于获取所有相关文件
const modules = import.meta.globEager('./routes/**/*.ts')

const routes: IAppRoute[] = []

Object.keys(modules).forEach(key => {
	const mod = modules[key].default || {}
	const modList = Array.isArray(mod) ? [...mod] : [mod]
	routes.push(...modList)
})

export default routes
