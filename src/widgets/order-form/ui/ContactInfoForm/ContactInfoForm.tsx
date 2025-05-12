import { useState } from 'react'

import { OrderDataType } from 'widgets/order-form/types/types'

import { CustomInput } from 'shared/ui/Input'
import { Tabs } from 'shared/ui/Tabs'

import s from './ContactInfoForm.module.scss'

interface Props {
  data: OrderDataType
  error: Partial<Record<keyof OrderDataType, string>>
  onChange: (
    key: keyof OrderDataType,
  ) => (e: React.ChangeEvent<HTMLInputElement> | string) => void
}
export function ContactInfoForm({ onChange, data, error }: Props) {
  const [personType, setPersonType] = useState('Физическое лицо')

  return (
    <>
      <Tabs
        options={[
          'Физическое лицо',
          'Юридическое лицо',
          'Индивидуальный предприниматель',
        ]}
        selected={personType}
        onSelect={setPersonType}
      />

      <p className={s.autocomplete}>
        <span
          className={s.blue}
          // onClick={handleLoginForAutoFill}
        >
          Войдите в личный кабинет
        </span>
        , чтобы мы автоматически заполнили поля данными с вашей последней
        покупки
      </p>

      <div className={s.formInput}>
        <div className={s.inputBlock}>
          <CustomInput
            value={data.last_name}
            placeholder="Фамилия"
            onChange={onChange('last_name')}
          />
          {error && <p className={s.error}>{error.last_name}</p>}
        </div>
        <div className={s.inputBlock}>
          <CustomInput
            value={data.first_name}
            placeholder="Имя"
            onChange={onChange('first_name')}
          />
          {error && <p className={s.error}>{error.first_name}</p>}
        </div>
        <div className={s.inputBlock}>
          <CustomInput
            value={data.phone}
            placeholder="Телефон"
            type="tel"
            onChange={onChange('phone')}
          />
          {error && <p className={s.error}>{error.phone}</p>}
        </div>

        <div className={s.inputBlock}>
          <CustomInput
            value={data.email}
            placeholder="Электронная почта"
            type="email"
            onChange={onChange('email')}
          />
          {error && <p className={s.error}>{error.email}</p>}
        </div>
      </div>
    </>
  )
}
