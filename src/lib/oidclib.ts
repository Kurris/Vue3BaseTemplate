import { appsetting } from './appsettinglib'
import { UserManager, WebStorageStateStore, UserManagerSettings, Log } from 'oidc-client'

Log.logger = console
Log.level = appsetting.VITE_OIDC_LOG_LEVEL

const signInSettings: UserManagerSettings = {
	authority: appsetting.VITE_IDENTITYSERVER_AUTHORITY,
	client_id: 'spa',
	redirect_uri: location.origin + '/callback',
	post_logout_redirect_uri: location.origin + '/template',
	response_type: 'code',
	userStore: new WebStorageStateStore({ store: localStorage }),
	scope: 'openid profile offline_access weather:search',
	automaticSilentRenew: true,
}

const callbackSettings: UserManagerSettings = {
	response_mode: 'query',
	userStore: new WebStorageStateStore({ store: localStorage }),
}

const userSignInManager = new UserManager(signInSettings)
const userCallbackManager = new UserManager(callbackSettings)

const user = await userSignInManager.getUser()
const accessToken = user?.access_token

export { userSignInManager, userCallbackManager, accessToken }
