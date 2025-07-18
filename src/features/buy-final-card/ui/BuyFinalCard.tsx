import clsx from 'clsx'

import { ReactNode } from 'react'

import { SpecItem } from 'shared/ui/ProductSpecs/ui/SpecItem/SpecItem'

import s from './BuyFinalCard.module.scss'

interface Props {
  className?: string
  discount?: number
  finalPrice?: number
  totalQuantity?: number
  children?: ReactNode
}

export function BuyFinalCard({
  className,
  discount,
  finalPrice,
  totalQuantity,
  children,
}: Props) {
  return (
    <div className={clsx(s.card, className)}>
      <SpecItem
        label="Скидка"
        value={`-${discount} C`}
        color="dark"
        labelSize={18}
        valueSize={18}
      />
      <SpecItem
        label="Общее количество"
        value={`${totalQuantity}`}
        color="dark"
        labelSize={18}
        valueSize={18}
      />
      <SpecItem
        label="Итоговая цена"
        value={`${finalPrice} C`}
        color="dark"
        labelSize={22}
        valueSize={22}
      />

      {children}
    </div>
  )
}
