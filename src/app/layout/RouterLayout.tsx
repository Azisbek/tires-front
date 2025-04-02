import { Footer } from 'widgets/footer'
import { Header, HeaderMobile } from 'widgets/header'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import 'shared/styles/global.scss'
import { PropsWithChildren } from 'shared/types/PropsWithChildren'
import { Space } from 'shared/ui/Space/Space'
import { ErrorBoundary, ErrorScreen } from 'shared/ui/error-boundary'
import { Layout } from 'shared/ui/layout'

export function RouterLayout({ children }: PropsWithChildren) {
  const { isMobile } = useScreenWidth()

  return (
    <ErrorBoundary fallback={<ErrorScreen />}>
      <div className="headerWrapper">
        {isMobile ? <HeaderMobile /> : <Header />}
      </div>

      <Layout>{children}</Layout>

      <Space h={83} />
      <Footer />
    </ErrorBoundary>
  )
}
