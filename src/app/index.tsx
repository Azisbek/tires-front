import { createRoot } from 'react-dom/client'

import { CombinedProviders } from 'app/lib/CombinedProviders'

// import "shared/styles/global.scss"

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root element must be in document!')
}

createRoot(root).render(<CombinedProviders />)
