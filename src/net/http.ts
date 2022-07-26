import { requestFunction, MyRequestConfig } from './index'
import BaseResponse from './type/BaseResponse'

import { accessTokenKey, userSignInMgr } from '@/lib/oidcConfig'

//请求方法配置
export default async <TUserResponse>(config: MyRequestConfig): Promise<BaseResponse<TUserResponse>> => {
	config.timeout = 30 * 1000 //30sec
	config.baseURL = import.meta.env.VITE_HTTP_BASEURL as string

	if (localStorage.getItem(accessTokenKey) == null) {
		userSignInMgr.signinRedirect()
	} else {
		let token = ('Bearer ' + localStorage.getItem(accessTokenKey) || 'sdadsa') as any
		if (config.headers != undefined) {
			config.headers.Authorization = token
		} else {
			config.headers = {
				Authorization: token,
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
