import { useState } from 'react'
import { Link } from 'react-router-dom'

import boxIcon from 'shared/assets/icons/box.svg'
import guaranteeIcon from 'shared/assets/icons/guarantee.svg'
import moneyIcon from 'shared/assets/icons/money.svg'
import PaymentPopup from 'shared/popups'
import { Text } from 'shared/ui/Text'

import s from './BuyInfoContainer.module.scss'

interface Props {
  warranty: string
  inStock: number
}

export function BuyInfoContainer({ warranty, inStock }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false) // Состояние для модалки

  const handleModalClose = () => {
    setIsModalOpen(false) // Закрытие модалки
  }

  const handleModalOpen = () => {
    setIsModalOpen(true) // Открытие модалки
  }
  return (
    <div className={s.buyInfoContainer}>
      <p className={s.title}>В наличии {inStock}</p>

      <Text
        className={s.infoTitle}
        size="sm-14"
        color="black"
      >
        <img
          src={guaranteeIcon}
          alt="warranty"
        />
        Гарантия:
        <p>{warranty.trim().length > 0 ? warranty : 'нет'}</p>
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
          onClick={handleModalOpen}
        >
          Показать варианты
        </Link>
        <PaymentPopup
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      </Text>
    </div>
  )
}
