import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import clsx from 'clsx'

import { useState } from 'react'

import { useGetCartQuery } from 'pages/cart/api'

import { ContactInfo, MethodObtain, PaymentMethod } from 'widgets/order-widgets'
import { PopupOrderInfo } from 'widgets/popups/ui/PopupOrderInfo/PopupOrderInfo'

import { BuyFinalCard } from 'features/buy-final-card'

import { useValidation } from 'shared/hooks/useValidation'
import { formatDate } from 'shared/lib/formatDate'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { LoaderFullScreen } from 'shared/ui/loader-components'

import { useAddOrderMutation } from '../api'
import {
  ConfirmOrderErrorProps,
  ConfirmOrderFormProps,
  SuccessOrderDataTypes,
} from '../types/types'

import s from './ConfirmOrderPage.module.scss'

export function ConfirmOrderPage() {
  const [isPopup, setIsPopup] = useState(false)
  const [success, setSuccess] = useState<SuccessOrderDataTypes>({
    address: '',
    applications: false,
    created_at: '',
    delivery: false,
    email: '',
    first_name: '',
    id: 78,
    items: [],
    last_name: '',
    payment_cash: false,
    payment_online: false,
    phone: '',
    pickup: false,
    user: 0,
  })
  const [form, setForm] = useState<ConfirmOrderFormProps>({
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    address: 'адрес не указано',
    payment_cash: true,
    payment_online: false,
    pickup: true,
    delivery: false,
  })
  const { errors, setValidationErrors } =
    useValidation<ConfirmOrderErrorProps>()

  const { data, refetch } = useGetCartQuery()
  const [addOrder, { isLoading }] = useAddOrderMutation()

  const handleClick = async () => {
    try {
      const response = await addOrder(form).unwrap()
      setSuccess(response)
      refetch()
    } catch (error) {
      const err = error as FetchBaseQueryError
      if ('data' in err) {
        const validationErrors = err.data as ConfirmOrderErrorProps
        if (validationErrors) {
          setValidationErrors(validationErrors)
          return
        }
      }
      console.error('Непредвиденная ошибка:', error)
    } finally {
      setIsPopup(true)
    }
  }

  const ClosePopupClick = () => {
    setIsPopup(false)
  }

  return (
    <div className={clsx(s.confirmOrder, s.container)}>
      <h1 className={s.title}>Оформление заказа</h1>

      {isLoading && <LoaderFullScreen size={50} />}

      {isPopup && (
        <PopupOrderInfo
          orderId={success?.id}
          items={[]} // тут будет success.items
          status={success.applications}
          created_at={success.created_at ? formatDate(success.created_at) : '—'}
          paymentMethod={success.payment_online}
          delivery={success.delivery}
          address={success.address}
          totalQuantity={data?.cart.total_quantity}
          finalPrice={data?.cart.subtotal}
          onClick={ClosePopupClick}
        />
      )}

      <div className={s.content}>
        <div>
          <ContactInfo
            form={form}
            errors={errors}
            setForm={setForm}
          />
          <MethodObtain setForm={setForm} />
          <PaymentMethod setForm={setForm} />
        </div>

        <BuyFinalCard
          discount={data?.cart.promotion_total}
          totalQuantity={data?.cart.total_quantity}
          finalPrice={data?.cart.subtotal}
        >
          <AppButton
            className={s.btn}
            onClick={handleClick}
            variant="accent"
          >
            Перейти к оплате
          </AppButton>
        </BuyFinalCard>
      </div>
    </div>
  )
}
