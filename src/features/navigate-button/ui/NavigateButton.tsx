import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './NavigateButton.module.scss'

export function NavigateBtn({ children }: { children: string }) {
  return (
    <AppButton
      variant="border"
      className={s.button}
    >
      {children}
    </AppButton>
  )
}
