import React, { useEffect } from 'react'
import App from 'next/app'
import Router from 'next/router'

import { UserContext } from '../context/UserContext'
import type { AppContext, AppProps } from 'next/app'
import { useUserStateSyncedWithCookies } from '../hooks/useUserStateSyncedWithCookies'
import { CookieMap } from '../helpers/_cookies'
import * as gtag from '../helpers/_gtag'

import '../styles/main.css'
import '../styles/prism-a11y-dark.css'

interface ElliotAppProps extends AppProps {
  serverCookies?: CookieMap
}

// Binding routes events.
Router.events.on('routeChangeComplete', (url) => {
  if (process.env.NEXT_PUBLIC_IS_PRODUCTION) {
    gtag.pageview(document.title, location.href, url)
  }
})

// eslint-disable-next-line react/jsx-props-no-spreading
const ElliotBlog = ({ Component, pageProps, serverCookies }: ElliotAppProps) => {
  const user = useUserStateSyncedWithCookies(serverCookies)

  useEffect(() => {
    import('../webComponents/CookiePolicy/CookiePolicy')

    if (process.env.NEXT_PUBLIC_IS_PRODUCTION) {
      gtag.pageview(document.title, location.href, location.pathname + location.search)
    }
  }, [])

  return (
    <UserContext.Provider value={user}>
      <Component {...pageProps} />
    </UserContext.Provider>
  )
}

// Getting cookies from the request on every server-side render.
// Warning: This disables the ability to perform automatic static optimization.
// https://nextjs.org/docs/advanced-features/custom-app
ElliotBlog.getInitialProps = async (appContext: AppContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  const serverCookies: CookieMap = appContext.ctx.req && (appContext.ctx.req as any).cookies

  return { ...appProps, serverCookies }
}

export default ElliotBlog
