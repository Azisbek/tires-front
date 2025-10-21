import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ConfirmOrderFormProps } from 'pages/confirm-order-page/types/types'

import { RadioBoxPickup } from 'entities/radioBoxPickup'

import { Details } from 'shared/ui/Details'
import { Input } from 'shared/ui/input-components'

import s from './MethodObtain.module.scss'

interface Props {
  setForm: React.Dispatch<React.SetStateAction<ConfirmOrderFormProps>>
}

export function MethodObtain({ setForm }: Props) {
  const [method, setMethod] = useState<'pickup' | 'delivery'>('pickup')
  const [pickup, setPickup] = useState('')
  const [address, setAddress] = useState('')

  const handleClick = (value: 'pickup' | 'delivery') => {
    setMethod(value)

    setForm((prev) => ({
      ...prev,
      address: method === 'pickup' ? pickup : address,
      pickup: value === 'pickup',
      delivery: value === 'delivery',
    }))
  }

  return (
    <Details
      number={2}
      title="Способ получения"
    >
      <div className={s.container}>
        <nav className={s.navigation}>
          <Link
            onClick={() => handleClick('pickup')}
            to={'#'}
            className={method === 'pickup' ? s.active : s.navBtn}
          >
            Самовывоз
          </Link>
          <Link
            onClick={() => handleClick('delivery')}
            to={'#'}
            className={method === 'delivery' ? s.active : s.navBtn}
          >
            Доставка
          </Link>
        </nav>

        {method === 'pickup' ? (
          <div className={s.content}>
            <RadioBoxPickup
              title="Пролетарская улица, 132/5"
              workTimes="Ежедневно с 9:00 до 21:00, без перерывов"
              onClick={setPickup}
              checked={pickup}
            />
            <RadioBoxPickup
              title="ул. Пушкина, 12"
              workTimes="Ежедневно с 9:00 до 21:00, без перерывов"
              onClick={setPickup}
              checked={pickup}
            />
          </div>
        ) : (
          <Input
            placeholder="Введите ваш адресс"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            border
          />
        )}
      </div>
    </Details>
  )
}
