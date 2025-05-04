import { Outlet } from 'react-router-dom'

import { Footer } from 'widgets/footer'
import { Header, HeaderMobile } from 'widgets/header'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import 'shared/styles/global.scss'
import { ErrorBoundary, ErrorScreen } from 'shared/ui/error-boundary'
import { Layout } from 'shared/ui/layout'

export function RouterLayout() {
  const { isMobile } = useScreenWidth()

  return (
    <ErrorBoundary fallback={<ErrorScreen />}>
      <div className="headerWrapper">
        {isMobile ? <HeaderMobile /> : <Header />}
      </div>

      <Layout>
        <Outlet />
      </Layout>

      <Footer />
    </ErrorBoundary>
  )
}
