import { notfound } from './common/notfound'
import { forbiden } from './common/forbiden'
import { IRouteMeta } from './type'
import { callback, loggout } from './sso/sso'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import appRouteIndex from './AppRouteIndex'

import nprogress from 'nprogress'

const routes = [
	{
		path: '',
		redirect: '/template',
	},
	callback,
	loggout,
	notfound,
	forbiden,
	appRouteIndex,
	// {
	// 	path: '/your',
	// 	component: () => import('@/views/your.vue'),
	// 	name: 'your',
	// 	meta: {
	// 		title: 'your',
	// 	},
	// },
	{
		path: '/:pathMatch(.*)',
		redirect: '/notfound',
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes: routes as RouteRecordRaw[], //类型继承可转为基类
})

router.beforeEach(guard => {
	nprogress.start()

	document.title = (guard.meta as unknown as IRouteMeta).title
})

router.afterEach(() => {
	nprogress.done()
})

export default router
