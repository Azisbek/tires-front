import { Title } from 'shared/ui/Text'

import s from './FooterProduct.module.scss'

export const FooterProduct = () => {
  return (
    <div className={s.footerProduct}>
      <Title
        size="sm-18"
        color="orange"
      >
        Товары
      </Title>

      <li>Автомобильные шины</li>
      <li>Автомобильные диски</li>
      <li> Аксессуары для шин</li>
    </div>
  )
}
