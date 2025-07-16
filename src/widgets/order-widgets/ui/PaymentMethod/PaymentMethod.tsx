import { useState } from 'react'

import { ConfirmOrderFormProps } from 'pages/confirm-order-page/types/types'

import { RadioBoxPickup } from 'entities/radioBoxPickup'

import { Details } from 'shared/ui/Details'

import s from './PaymentMethod.module.scss'

interface Props {
  setForm: React.Dispatch<React.SetStateAction<ConfirmOrderFormProps>>
}

export function PaymentMethod({ setForm }: Props) {
  const [paymentMethod, setPaymentMethod] = useState('')

  const handleClick = (value: string) => {
    setPaymentMethod(value)

    setForm((prev) => ({
      ...prev,
      paymentCash: value === 'Наличными',
      paymentOnline: value === 'Банковской картой',
    }))
  }

  return (
    <Details
      number={3}
      title="Способ оплаты"
    >
      <div className={s.content}>
        <RadioBoxPickup
          title="Наличными"
          onClick={() => handleClick('Наличными')}
          checked={paymentMethod}
        />
        <RadioBoxPickup
          title="Банковской картой"
          onClick={() => handleClick('Банковской картой')}
          checked={paymentMethod}
        />
      </div>
    </Details>
  )
}
