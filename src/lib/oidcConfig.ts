import Oidc from 'oidc-client'

export const userSignInMgr = new Oidc.UserManager({
	authority: import.meta.env.VITE_OAUTH2_AUTHORITY,
	client_id: 'spa',
	redirect_uri: location.origin + '/callback',
	post_logout_redirect_uri: location.origin + '/template',
	response_type: 'code',
	userStore: new Oidc.WebStorageStateStore({ store: localStorage }),
	scope: 'openid profile weather:search',
} as Oidc.OidcClientSettings)

export const userCallbackMgr = new Oidc.UserManager({
	response_mode: 'query',
	userStore: new Oidc.WebStorageStateStore({ store: localStorage }),
} as Oidc.OidcClientSettings)

export const accessTokenKey = 'access_token'
