import { requestFunction, MyRequestConfig } from '@/net/index'
import IBaseResponse from '@/net/type/IBaseResponse'
import { userSignInManager } from '@/lib/oidclib'
import { appsetting } from '@/lib/appsettinglib'

//请求方法配置
export default async <TUserResponse>(config: MyRequestConfig): Promise<IBaseResponse<TUserResponse>> => {
	config.timeout = 30 * 1000 //30sec
	config.baseURL = appsetting.VITE_GATEWAY_APIURL

	let user = await userSignInManager.getUser()
	let accessToken = user?.access_token

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
