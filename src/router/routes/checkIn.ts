import { IAppRoute } from '@/router/index/type'

const checkin: IAppRoute = {
	path: 'checkin',
	component: () => import('@/views/CheckIn.vue'),
	name: 'checkin',
	meta: {
		title: '商品入库',
	},
}

export default checkin
