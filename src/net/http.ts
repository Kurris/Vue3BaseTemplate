import { requestFunction, MyRequestConfig } from './index'
import BaseResponse from './type/BaseResponse'
import { userSignInManager, accessToken } from '@/lib/oidclib'
import { appsetting } from '@/lib/appsettinglib'

//请求方法配置
export default async <TUserResponse>(config: MyRequestConfig): Promise<BaseResponse<TUserResponse>> => {
	config.timeout = 30 * 1000 //30sec
	config.baseURL = appsetting.VITE_GATEWAY_APIURL

	if (accessToken == undefined) {
		await userSignInManager.signinRedirect()
	} else {
		let bearerToken = 'Bearer ' + accessToken
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
