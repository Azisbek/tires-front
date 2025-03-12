import { FooterDesktop, FooterMobile } from 'entities/footer'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'

export function Footer() {
  const { isMobile } = useScreenWidth()
  return isMobile ? <FooterMobile /> : <FooterDesktop />
}
