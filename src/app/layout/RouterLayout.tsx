import { PropsWithChildren } from 'shared/types/PropsWithChildren'
import { ErrorBoundary, ErrorScreen } from 'shared/ui/error-boundary'
import { Layout } from 'shared/ui/layout'

import { Footer } from '../../widget/footer/ui/Footer'
import { Header } from '../../widget/header/ui/Header'

export function RouterLayout({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary fallback={<ErrorScreen />}>
      <Header />
      <Layout>{children}</Layout>
      <Footer />
    </ErrorBoundary>
  )
}
