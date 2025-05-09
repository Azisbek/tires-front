import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { OrderForm } from 'widgets/order-form'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Checkbox } from 'shared/ui/Checkbox'
import { InfoCard } from 'shared/ui/InfoCard'
import { SpecItem } from 'shared/ui/ProductSpecs/ui/SpecItem/SpecItem'
import { Title } from 'shared/ui/Text'

import { usePostOrderMutation } from '../api'

import s from './OrderPage.module.scss'

export function OrderPage() {
  const [PostOrder] = usePostOrderMutation()
  const [orderData, setOrderData] = useState({
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
    accept_terms: false,
  })

  const handleChange =
    (key: keyof typeof orderData) =>
    (value: string | React.ChangeEvent<HTMLInputElement>) => {
      const newValue = typeof value === 'string' ? value : value.target.value

      setOrderData((prev) => ({
        ...prev,
        [key]: newValue,
        ...(key === 'pickup' ? { address: '' } : {}),
        ...(key === 'address' ? { pickup: '' } : {}),
      }))
    }

  const handlePostOrder = () => {
    const {
      first_name,
      last_name,
      phone,
      email,
      address,
      pickup,
      payment,
      accept_terms,
    } = orderData

    const isEmpty = [first_name, last_name, phone, email, payment].some(
      (field) => field.trim() === '',
    )
    const isAddressOrPickupEmpty = address.trim() === '' && pickup.trim() === ''

    if (isEmpty || isAddressOrPickupEmpty || !accept_terms) return

    PostOrder({
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
      <div className={s.wrapper}>
        <OrderForm
          data={orderData}
          onChange={handleChange}
        />
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
          <AppButton
            variant="accent"
            onClick={handlePostOrder}
          >
            Перейти к оплате
          </AppButton>
          <Checkbox
            onChange={(value: boolean) =>
              setOrderData((prev) => ({ ...prev, receive_news: value }))
            }
            checked={orderData.receive_news}
          >
            Я согласен получать новости об акциях и новинках интернет магазина
          </Checkbox>
          <Checkbox
            onChange={(value: boolean) =>
              setOrderData((prev) => ({
                ...prev,
                accept_terms: value,
              }))
            }
            checked={orderData.accept_terms}
          >
            Я согласен с
            <Link
              to="#"
              className={s.blue}
            >
              условиями публичной оферты
            </Link>
            и правилами продажи товаров
          </Checkbox>
        </InfoCard>
      </div>
    </div>
  )
}
