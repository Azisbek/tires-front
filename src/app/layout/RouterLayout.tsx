import { PropsWithChildren } from 'shared/types/PropsWithChildren'
import { ErrorBoundary, ErrorScreen } from 'shared/ui/error-boundary'
import { Layout } from 'shared/ui/layout'
import { useScreenWidth } from 'shared/hooks/useScreenWidth';
import { Header } from '../../widget/header/ui/Header/Header'
import { HeaderMobile } from '../../widget/header/ui/HeaderMobile/HeaderMobile'

export function RouterLayout({ children }: PropsWithChildren) {
  const { isMobile } = useScreenWidth();
  return (
    <ErrorBoundary fallback={<ErrorScreen />}>
      {isMobile ? < HeaderMobile/> : <Header />}
      <Layout>{children}</Layout>
    </ErrorBoundary>
  )
}
