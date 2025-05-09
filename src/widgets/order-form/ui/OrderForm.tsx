import { useState } from 'react'

import TimeIcon from 'shared/assets/icons/Icon_time.svg'
import { AccordionSection } from 'shared/ui/Accordion'
import { CustomInput } from 'shared/ui/Input'
import { Tabs } from 'shared/ui/Tabs'
import { RadioInput } from 'shared/ui/input-components'

import s from './OrderForm.module.scss'

type OrderDataType = {
  first_name: string
  last_name: string
  phone: string
  email: string
  address: string
  delivery: string
  pickup: string
  payment: string
  consultation: string
  receive_news: boolean
  accept_terms: boolean
}
interface OrderFormProps {
  data: OrderDataType
  onChange: (
    key: keyof OrderDataType,
  ) => (e: React.ChangeEvent<HTMLInputElement> | string) => void
}

export function OrderForm({ data, onChange }: OrderFormProps) {
  const [personType, setPersonType] = useState('Физическое лицо')
  const [deliveryType, setDeliveryType] = useState('Самовывоз')
  const [openSections, setOpenSections] = useState([
    true,
    false,
    false,
    false,
    false,
  ])

  function handleLoginForAutoFill() {
    console.log('000')
  }

  const toggle = (index: number) => () => {
    setOpenSections((prev) => prev.map((v, i) => (i === index ? !v : v)))
  }
  return (
    <form>
      <AccordionSection
        title="Контактная информация"
        isOpen={openSections[0]}
        onToggle={toggle(0)}
      >
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
            onClick={handleLoginForAutoFill}
          >
            Войдите в личный кабинет
          </span>
          , чтобы мы автоматически заполнили поля данными с вашей последней
          покупки
        </p>

        <div className={s.formInput}>
          <CustomInput
            value={data.last_name}
            placeholder="Фамилия"
            onChange={onChange('last_name')}
          />
          <CustomInput
            value={data.first_name}
            placeholder="Имя"
            onChange={onChange('first_name')}
          />
          <CustomInput
            value={data.phone}
            placeholder="Телефон"
            type="tel"
            onChange={onChange('phone')}
          />
          <CustomInput
            value={data.email}
            placeholder="Электронная почта"
            type="email"
            onChange={onChange('email')}
          />
        </div>
      </AccordionSection>

      <AccordionSection
        title="Способ получения"
        isOpen={openSections[1]}
        onToggle={toggle(1)}
      >
        <Tabs
          options={['Самовывоз', 'Доставка']}
          selected={deliveryType}
          onSelect={setDeliveryType}
        />

        {deliveryType === 'Самовывоз' && (
          <div className={s.obtaining}>
            <RadioInput
              name="place"
              onChange={onChange('pickup')}
              value="Пролетарская улица, 132/5"
              selectedValue={data.pickup}
            />
            <p>
              <img
                src={TimeIcon}
                alt="time_icon"
              />
              Ежедневно с 9:00 до 21:00, без перерывов
            </p>
            <RadioInput
              name="place"
              onChange={onChange('pickup')}
              value="ул. Пушкина, 12"
              selectedValue={data.pickup}
            />
            <p>
              <img
                src={TimeIcon}
                alt="time_icon"
              />
              Ежедневно с 9:00 до 21:00, без перерывов
            </p>
          </div>
        )}

        {deliveryType === 'Доставка' && (
          <CustomInput
            value={data.address}
            placeholder="Адрес"
            onChange={onChange('address')}
          />
        )}
      </AccordionSection>

      <AccordionSection
        title="Способ оплаты"
        isOpen={openSections[2]}
        onToggle={toggle(2)}
      >
        <div className={s.wrapper}>
          <RadioInput
            name="payment"
            onChange={onChange('payment')}
            value="Наличными"
            selectedValue={data.payment}
          />
          <RadioInput
            name="payment"
            onChange={onChange('payment')}
            value="Банковской картой"
            selectedValue={data.payment}
          />
        </div>
      </AccordionSection>

      <AccordionSection
        title="Консультация специалиста"
        isOpen={openSections[3]}
        onToggle={toggle(3)}
      >
        <div className={s.wrapper}>
          <RadioInput
            name="delivery"
            onChange={onChange('consultation')}
            value="Мне требуется консультация менеджера"
            selectedValue={data.consultation}
          />
          <RadioInput
            name="delivery"
            onChange={onChange('consultation')}
            value="Я уверен в выбранных товарах, консультация менеджера мне не нужна"
            selectedValue={data.consultation}
          />
        </div>
      </AccordionSection>
    </form>
  )
}
