import { notfound } from '@/router/common/notfound'
import { forbiden } from '@/router/common/forbiden'
import { IRouteMeta } from '@/router/index/type'
import { callback, loggout } from '@/router/sso/sso'

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import appRouteIndex from '@/router/index/appRouteIndex'

import nprogress from 'nprogress'

// 路由
const routes = [
	{
		path: '',
		redirect: '/main',
	},
	callback,
	loggout,
	notfound,
	forbiden,
	appRouteIndex, //App.vue展示的路由
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
