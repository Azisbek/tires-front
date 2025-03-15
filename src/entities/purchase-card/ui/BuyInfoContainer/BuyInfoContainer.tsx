import { Link } from 'react-router-dom'

import boxIcon from 'shared/assets/icons/box.svg'
import guaranteeIcon from 'shared/assets/icons/guarantee.svg'
import moneyIcon from 'shared/assets/icons/money.svg'
import { Text } from 'shared/ui/Text'

import s from './BuyInfoContainer.module.scss'

interface Props {
  guarantee: string
}

export function BuyInfoContainer({ guarantee }: Props) {
  return (
    <div className={s.buyInfoContainer}>
      <p className={s.title}>В наличии</p>
      <Text
        className={s.infoTitle}
        size="sm-14"
        color="black"
      >
        <img
          src={guaranteeIcon}
          alt="guarantee"
        />
        Гарантия:
        <p>{guarantee}</p>
      </Text>

      <Text
        className={s.infoTitle}
        size="sm-14"
        color="black"
      >
        <img
          src={boxIcon}
          alt="guarantee"
        />
        Доставка:
        <Link
          className={s.link}
          to={''}
        >
          Показать варианты
        </Link>
      </Text>

      <Text
        className={s.infoTitle}
        size="sm-14"
        color="black"
      >
        <img
          src={moneyIcon}
          alt="guarantee"
        />
        Оплата:
        <Link
          className={s.link}
          to={''}
        >
          Показать варианты
        </Link>
      </Text>
    </div>
  )
}
