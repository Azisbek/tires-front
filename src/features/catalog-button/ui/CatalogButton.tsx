import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './CatalogButton.module.scss'

export const CatalogBtn = () => {
  return (
    <AppButton
      variant={'borderWhite'}
      className={s.button}
    >
      Посмотреть все шины
    </AppButton>
  )
}
