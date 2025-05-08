import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import TimeIcon from 'shared/assets/icons/Icon_time.svg'
import { AccordionSection } from 'shared/ui/Accordion'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Checkbox } from 'shared/ui/Checkbox'
import { InfoCard } from 'shared/ui/InfoCard'
import { CustomInput } from 'shared/ui/Input'
import { SpecItem } from 'shared/ui/ProductSpecs/ui/SpecItem/SpecItem'
import { Tabs } from 'shared/ui/Tabs'
import { Title } from 'shared/ui/Text'
import { RadioInput } from 'shared/ui/input-components'

import { useCreateOrderMutation } from '../api'

import s from './OrderPage.module.scss'

export function OrderPage() {
  const [CreateOrder] = useCreateOrderMutation()
  const [orderPerson, setOrderPerson] = useState({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: '',
    delivery: '',
    pickup: '',
    payment: '',
    consultation: '',
    receive_news: false,
    terms_of_sale_of_goods: false,
  })

  const [openSections, setOpenSections] = useState([
    true,
    false,
    false,
    false,
    false,
  ])
  const [personType, setPersonType] = useState('Физическое лицо')
  const [deliveryType, setDeliveryType] = useState('Самовывоз')

  const toggle = (index: number) => () => {
    setOpenSections((prev) => prev.map((v, i) => (i === index ? !v : v)))
  }
  const handleChange =
    (key: keyof typeof orderPerson) =>
    (value: string | React.ChangeEvent<HTMLInputElement>) => {
      const newValue = typeof value === 'string' ? value : value.target.value

      setOrderPerson((prev) => ({
        ...prev,
        [key]: newValue,
        ...(key === 'pickup' ? { address: '' } : {}),
        ...(key === 'address' ? { pickup: '' } : {}),
      }))
    }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { first_name, last_name, phone, email, address, pickup, payment } =
      orderPerson

    const isEmpty = [first_name, last_name, phone, email, payment].some(
      (field) => field.trim() === '',
    )
    const isAddressOrPickupEmpty = address.trim() === '' && pickup.trim() === ''

    if (isEmpty || isAddressOrPickupEmpty) return

    CreateOrder({
      first_name,
      last_name,
      phone,
      email,
      address,
      delivery: address !== '',
      pickup: pickup !== '',
      payment_cash: payment === 'Наличными',
      payment_online: payment === 'Банковской картой',
    })
  }

  return (
    <div className={s.root}>
      <Title
        className={s.title}
        size="xl-40"
      >
        Оформление заказа
      </Title>
      <form onSubmit={handleSubmit}>
        <div className={s.container}>
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
              <Link
                className={s.blue}
                to={'#'}
              >
                Войдите в личный кабинет
              </Link>
              , чтобы мы автоматически заполнили поля данными с вашей последней
              покупки
            </p>

            <div className={s.formInput}>
              <CustomInput
                value={orderPerson.last_name}
                placeholder="Фамилия"
                onChange={handleChange('last_name')}
              />
              <CustomInput
                value={orderPerson.first_name}
                placeholder="Имя"
                onChange={handleChange('first_name')}
              />
              <CustomInput
                value={orderPerson.phone}
                placeholder="Телефон"
                type="tel"
                onChange={handleChange('phone')}
              />
              <CustomInput
                value={orderPerson.email}
                placeholder="Электронная почта"
                type="email"
                onChange={handleChange('email')}
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
                  onChange={handleChange('pickup')}
                  value="Пролетарская улица, 132/5"
                  selectedValue={orderPerson.pickup}
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
                  onChange={handleChange('pickup')}
                  value="ул. Пушкина, 12"
                  selectedValue={orderPerson.pickup}
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
                value={orderPerson.address}
                placeholder="Адрес"
                onChange={handleChange('address')}
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
                onChange={handleChange('payment')}
                value="Наличными"
                selectedValue={orderPerson.payment}
              />
              <RadioInput
                name="payment"
                onChange={handleChange('payment')}
                value="Банковской картой"
                selectedValue={orderPerson.payment}
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
                onChange={handleChange('consultation')}
                value="Мне требуется консультация менеджера"
                selectedValue={orderPerson.consultation}
              />
              <RadioInput
                name="delivery"
                onChange={handleChange('consultation')}
                value="Я уверен в выбранных товарах, консультация менеджера мне не нужна"
                selectedValue={orderPerson.consultation}
              />
            </div>
          </AccordionSection>
        </div>
        <InfoCard className={s.infoCard}>
          <SpecItem
            label="Стоимость"
            value="2200"
            color="dark"
          />
          <SpecItem
            label="Итоговая цена"
            value="123 000 С"
            color="dark"
          />
          <AppButton variant="accent">Перейти к оплате</AppButton>
          <Checkbox
            onChange={(value: boolean) =>
              setOrderPerson((prev) => ({ ...prev, receive_news: value }))
            }
            checked={orderPerson.receive_news}
          >
            Я согласен получать новости об акциях и новинках интернет магазина
          </Checkbox>
          <Checkbox
            onChange={(value: boolean) =>
              setOrderPerson((prev) => ({
                ...prev,
                terms_of_sale_of_goods: value,
              }))
            }
            checked={orderPerson.terms_of_sale_of_goods}
          >
            Я согласен с{' '}
            <Link
              to="#"
              className={s.blue}
            >
              условиями публичной оферты
            </Link>{' '}
            и правилами продажи товаров
          </Checkbox>
        </InfoCard>
      </form>
    </div>
  )
}
