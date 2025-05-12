import React, { useState } from 'react'

import { OrderDataType } from 'widgets/order-form/types/types'

import TimeIcon from 'shared/assets/icons/Icon_time.svg'
import { CustomInput } from 'shared/ui/Input'
import { Tabs } from 'shared/ui/Tabs'
import { RadioInput } from 'shared/ui/input-components'

import s from './DeliverySelector.module.scss'

interface Props {
  data: OrderDataType
  error: Partial<Record<keyof OrderDataType, string>>
  onChange: (
    key: keyof OrderDataType,
  ) => (e: React.ChangeEvent<HTMLInputElement> | string) => void
}

const pickupLocations = [
  { value: 'Пролетарская улица, 132/5', label: 'Ежедневно с 9:00 до 21:00' },
  { value: 'ул. Пушкина, 12', label: 'Ежедневно с 9:00 до 21:00' },
]

export function DeliverySelector({ data, error, onChange }: Props) {
  const [deliveryType, setDeliveryType] = useState('Самовывоз')

  return (
    <>
      <Tabs
        options={['Самовывоз', 'Доставка']}
        selected={deliveryType}
        onSelect={setDeliveryType}
      />

      {deliveryType === 'Самовывоз' && (
        <div className={s.obtaining}>
          {pickupLocations.map(({ value, label }) => (
            <div key={value}>
              <RadioInput
                name="place"
                onChange={onChange('pickup')}
                value={value}
                selectedValue={data.pickup}
              />
              <p>
                <img
                  src={TimeIcon}
                  alt="time_icon"
                />
                {label}
              </p>
            </div>
          ))}
        </div>
      )}

      {deliveryType === 'Доставка' && (
        <CustomInput
          value={data.address}
          placeholder="Адрес"
          onChange={onChange('address')}
        />
      )}
      {error && <p className={s.error}>{error.address}</p>}
    </>
  )
}
