import { PropsWithChildren } from 'shared/types/PropsWithChildren'
import { ErrorBoundary, ErrorScreen } from 'shared/ui/error-boundary'
import { Layout } from 'shared/ui/layout'

export function RouterLayout({ children }: PropsWithChildren) {
  return (
    <ErrorBoundary fallback={<ErrorScreen />}>
      <Layout>{children}</Layout>
    </ErrorBoundary>
  )
}
