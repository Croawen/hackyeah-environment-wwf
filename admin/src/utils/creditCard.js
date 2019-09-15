import { expirationDate } from 'card-validator'

import { STRIPE_KEY, STRIPE_URL } from '../env'

export const getStripeToken = async (ccName, ccNumber, ccExpirationDate, ccCVC) => {
  const { month: ccExpMonth, year: ccExpYear } = expirationDate(ccExpirationDate)
  const api_key = STRIPE_KEY

  const headers = new Headers()
  headers.append('Content-Type', 'application/x-www-form-urlencoded')
  headers.append('Authorization', `Bearer ${api_key}`)

  const response = await fetch(STRIPE_URL, {
    method: 'POST',
    headers,
    body: `card[number]=${ccNumber}&card[name]=${ccName}&card[cvc]=${ccCVC}&card[exp_month]=${ccExpMonth}&card[exp_year]=${ccExpYear}`,
  })

  const data = await response.json()

  if (data.error) throw new Error(data.error.message)

  return data
}
