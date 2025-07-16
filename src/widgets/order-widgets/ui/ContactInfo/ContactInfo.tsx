import { useCallback } from 'react'

import {
  ConfirmOrderErrorProps,
  ConfirmOrderFormProps,
} from 'pages/confirm-order-page/types/types'

import { Details } from 'shared/ui/Details'
import { Text } from 'shared/ui/Text'
import { Input } from 'shared/ui/input-components'

import s from './ContactInfo.module.scss'

interface Props {
  form: Partial<ConfirmOrderFormProps>
  errors: Partial<ConfirmOrderErrorProps>
  setForm: React.Dispatch<React.SetStateAction<ConfirmOrderFormProps>>
}

export function ContactInfo({ form, errors, setForm }: Props) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setForm((prev) => ({ ...prev, [name]: value }))
    },
    [setForm],
  )

  return (
    <Details
      number={1}
      title="Контактная информация"
    >
      <div className={s.content}>
        <div className={s.inputBlock}>
          {errors.first_name && <Text color="red">{errors.first_name}</Text>}
          <Input
            placeholder="Имя"
            value={form.first_name}
            name="first_name"
            onChange={handleChange}
            border
          />
        </div>

        <div className={s.inputBlock}>
          {errors.last_name && <Text color="red">{errors.last_name}</Text>}
          <Input
            placeholder="Фамилия"
            value={form.last_name}
            name="last_name"
            onChange={handleChange}
            border
          />
        </div>
        <div className={s.inputBlock}>
          {errors.email && <Text color="red">{errors.email}</Text>}
          <Input
            placeholder="Электронная почта"
            value={form.email}
            name="email"
            onChange={handleChange}
            border
          />
        </div>
        <div className={s.inputBlock}>
          {errors.phone && <Text color="red">{errors.phone}</Text>}
          <Input
            placeholder="Телефон"
            value={form.phone}
            name="phone"
            onChange={handleChange}
            border
          />
        </div>
      </div>
    </Details>
  )
}
