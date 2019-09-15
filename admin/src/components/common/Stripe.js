import React, { useEffect, useState } from 'react'
import { STRIPE_KEY } from '../../env'

export const StripeCtx = React.createContext(null)

export const injectStripe = WrappedComponent => {
  const Inner = props => (
    <StripeCtx.Consumer>
      {stripe => (
        <WrappedComponent stripe={stripe} {...props}></WrappedComponent>
      )}
    </StripeCtx.Consumer>
  )

  return Inner
}

export const StripeProvider = ({ children }) => {
  const [stripe, setStripe] = useState(null)

  useEffect(() => {
    const stripeJs = document.createElement('script')
    stripeJs.src = 'https://js.stripe.com/v3/'
    stripeJs.async = true
    stripeJs.onload = () => {
      setStripe(window.Stripe(STRIPE_KEY))
    }

    document.body && document.body.appendChild(stripeJs)

    return () => {
      setStripe(null)
      document.body.removeChild(stripeJs)
    }
  }, [])

  return <StripeCtx.Provider value={stripe}>{children}</StripeCtx.Provider>
}
