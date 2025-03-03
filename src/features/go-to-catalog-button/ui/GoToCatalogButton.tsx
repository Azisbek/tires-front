import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './GoToCatalogButton.module.scss'

export const GoToCatalogButton = () => {
  return (
    <AppButton
      variant={'borderWhite'}
      className={s.button}
    >
      Посмотреть все шины
    </AppButton>
  )
}
