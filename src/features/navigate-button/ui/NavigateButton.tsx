import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './CatalogButton.module.scss'

export const NavigateBtn = ({children} : {children: string}) => {
  return (
    <AppButton
      variant={'borderWhite'}
      className={s.button}
    >
      {children}
    </AppButton>
  )
}
