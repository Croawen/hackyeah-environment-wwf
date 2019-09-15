import { TOKEN, REFRESH_TOKEN, AUTH_PROVIDER } from './constants'

export const isLoggedIn = () => {
  return !!localStorage.getItem(TOKEN)
}
export const setLoginToken = (token, provider = 'gizmmi') => {
  localStorage.setItem(TOKEN, token)
  localStorage.setItem(AUTH_PROVIDER, provider)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN)
}

export const getAuthProvider = () => {
  return localStorage.getItem(AUTH_PROVIDER)
}

export const setRefreshToken = token => {
  localStorage.setItem(REFRESH_TOKEN, token)
}

export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN)
}

export const removeTokens = () => {
  localStorage.removeItem(TOKEN)
  localStorage.removeItem(REFRESH_TOKEN)
  localStorage.removeItem(AUTH_PROVIDER)
}
