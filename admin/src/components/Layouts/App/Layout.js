import React from 'react'
import Header from './Header'
import { SubscriptionModalCtxProvider } from '../../../screens/Dashboard/SubscriptionModalCtxProvider'
import Sidebar from './Sidebar'

const AppLayout = ({ children }) => {
  return (
    <div className="app">
      <SubscriptionModalCtxProvider>
        <Header />
        <div className="app-body">
          <Sidebar />
          <main className="main">{children}</main>
        </div>
      </SubscriptionModalCtxProvider>
    </div>
  )
}

export default AppLayout
