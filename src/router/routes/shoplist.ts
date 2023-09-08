import { IAppRoute } from '@/router/index/type'

const shoplist: IAppRoute = {
	path: 'shoplist',
	component: () => import('@/views/ShopList.vue'),
	name: 'shoplist',
	meta: {
		title: '收银台',
	},
}

export default shoplist
