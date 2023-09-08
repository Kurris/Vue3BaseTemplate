import { IAppRoute } from './type'
import scanRoutes from './scanRoutes'

const appRouteIndex: IAppRoute = {
	path: '/main',
	component: () => import('@/views/Main.vue'),
	name: 'main',
	meta: {
		title: '首页',
	},
	children: [
		{
			path: '',
			redirect: '/main/shoplist',
		},
		...scanRoutes,
	],
}

export default appRouteIndex
