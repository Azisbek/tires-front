import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { OrderForm } from 'widgets/order-form'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Checkbox } from 'shared/ui/Checkbox'
import { InfoCard } from 'shared/ui/InfoCard'
import { Modal } from 'shared/ui/Modal'
import { SpecItem } from 'shared/ui/ProductSpecs/ui/SpecItem/SpecItem'
import { Title } from 'shared/ui/Text'

import { useGetCartItemQuery, usePostOrderMutation } from '../api'
import { validateOrderForm } from '../model/validateOrderForm'

import s from './OrderPage.module.scss'

export function OrderPage() {
  const [PostOrder, { isSuccess }] = usePostOrderMutation()
  const { data } = useGetCartItemQuery()
  const [isOpen, setIsOpen] = useState(false)

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
  type OrderFormError = {
    [key in keyof typeof orderData]?: string
  }

  const [error, setError] = useState<OrderFormError>({})

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
    const errors = validateOrderForm(orderData)

    if (Object.keys(errors).length > 0) {
      setError(errors)
      return
    }

    setError({})

    const { first_name, last_name, phone, email, address, pickup, payment } =
      orderData

    PostOrder({
      first_name,
      last_name,
      phone,
      email,
      address: address === '' ? pickup : address,
      delivery: address !== '',
      pickup: pickup !== '',
      payment_cash: payment === 'Наличными',
      payment_online: payment === 'Банковской картой',
    })
  }
  useEffect(() => {
    if (isSuccess) {
      setIsOpen(true)
    }
  }, [isSuccess])

  return (
    <div className={s.root}>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <p>Успешно заявка отправлено</p>
      </Modal>
      <Title
        className={s.title}
        size="xl-40"
      >
        Оформление заказа
      </Title>
      <div className={s.wrapper}>
        <OrderForm
          error={error}
          data={orderData}
          onChange={handleChange}
        />
        <InfoCard className={s.infoCard}>
          <SpecItem
            label="Количество"
            value={data?.cart.total_quantity.toString() || ''}
            color="dark"
          />
          <SpecItem
            label="Итоговая цена"
            value={data?.cart.total_price.toString() || ''}
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
            Я согласен с{' '}
            <Link
              to="#"
              className={s.blue}
            >
              условиями публичной оферты
            </Link>
            и правилами продажи товаров
          </Checkbox>
          {error && <p className={s.error}>{error.accept_terms}</p>}
        </InfoCard>
      </div>
    </div>
  )
}
