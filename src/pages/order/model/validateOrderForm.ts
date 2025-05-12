import { OrderDataType } from 'widgets/order-form/types/types'

export function validateOrderForm(order: OrderDataType) {
  const errors: Partial<Record<keyof typeof order, string>> = {}

  const {
    first_name,
    last_name,
    phone,
    email,
    address,
    pickup,
    payment,
    accept_terms,
  } = order

  if (!first_name.trim()) errors.first_name = 'Введите имя'
  if (!last_name.trim()) errors.last_name = 'Введите фамилию'
  if (!phone.trim()) errors.phone = 'Введите телефон'
  if (!email.trim()) errors.email = 'Введите email'

  const isAddressOrPickupEmpty = !address.trim() && !pickup.trim()
  if (isAddressOrPickupEmpty)
    errors.address = 'Укажите адрес или пункт самовывоза'

  if (!payment.trim()) errors.payment = 'Выберите способ оплаты'

  if (!accept_terms) errors.accept_terms = 'Необходимо принять условия заказа'

  return errors
}
