import { AUTH_URL } from '../env'
import {
  getRefreshToken,
  getToken,
  isLoggedIn,
  removeTokens,
  setLoginToken,
  setRefreshToken,
} from './auth'

const refreshTokens = async () => {
  const refresh_token = getRefreshToken()
  const address = `${AUTH_URL}/auth/refresh`
  const headers = new Headers({
    Authorization: `Bearer ${refresh_token}`,
  })
  return fetch(address, { method: 'GET', headers }).then(async response => {
    const failure = () => {
      throw new Error('Invalid tokens')
    }

    if (!response.ok) return failure()
    return response.json().then(({ token, refreshToken }) => {
      setLoginToken(token)
      setRefreshToken(refreshToken)
    })
  })
}

export const customFetch = async (uri, options) => {
  try {
    const token = getToken()
    if (token)
      options.headers = {
        ...options.headers,
        authorization: `Bearer ${token}`,
      }

    const data = await fetch(uri, options)
    const json = await data.json()

    if (
      json &&
      json.errors &&
      json.errors
        .map(({ message }) => message)
        .includes(
          'Access denied! You need to be authorized to perform this action!'
        )
    ) {
      if (isLoggedIn()) {
        await refreshTokens(uri, options)
        return customFetch(uri, options)
      } else {
        throw new Error('No refresh token')
      }
    } else {
      return {
        ...data,
        text: () => Promise.resolve(JSON.stringify(json)),
        json: () => Promise.resolve(json),
        blob: () => Promise.resolve(new Blob([JSON.stringify(json)])),
      }
    }
  } catch (error) {
    if (['Invalid tokens', 'No refresh token'].includes(error.message)) {
      removeTokens()
      window.location.push('/login')
    }
    throw error
  }
}
