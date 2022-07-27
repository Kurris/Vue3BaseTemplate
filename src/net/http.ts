import { requestFunction, MyRequestConfig } from './index'
import BaseResponse from './type/BaseResponse'

import { oidcStore } from '@/stores/oidcStore'

//请求方法配置
export default async <TUserResponse>(config: MyRequestConfig): Promise<BaseResponse<TUserResponse>> => {
	config.timeout = 30 * 1000 //30sec
	config.baseURL = import.meta.env.VITE_HTTP_BASEURL as string

	let store = oidcStore()

	let token = localStorage.getItem(store.accessTokenKey) || null
	if (!token || token == null || token == '') {
		await store.userSignInManager.signinRedirect()
	} else {
		let bearerToken = 'Bearer ' + token
		if (config.headers != undefined) {
			config.headers.Authorization = bearerToken
		} else {
			config.headers = {
				Authorization: bearerToken,
			}
		}
	}

	return new Promise((resolve, reject) =>
		requestFunction<TUserResponse>(config)
			.then(res => {
				resolve(res.data)
			})
			.catch(err => {
				reject(err)
			})
	)
}
