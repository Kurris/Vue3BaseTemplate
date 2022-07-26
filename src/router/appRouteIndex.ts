import { IAppRoute } from './type'
import scanRoutes from './scanRoutes'

const appRouteIndex: IAppRoute = {
	path: '/template',
	component: () => import('@/views/Template.vue'),
	name: 'template',
	meta: {
		title: '模版',
	},
	children: [...scanRoutes],
}
export default appRouteIndex
