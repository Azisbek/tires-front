import { useEffect, useState } from 'react'

import { OrderData } from 'entities/personalAccount/types/types'

import { navigationMap } from 'shared/model/navigation'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Empty } from 'shared/ui/Empty'
import { Modal } from 'shared/ui/Modal'
import { Title } from 'shared/ui/Text'

import {
  useGetProfileQuery,
  useLazyGetOrderDetailsQuery,
} from '../../api/index'

import s from './OrderHistory.module.scss'

export const OrderHistory = () => {
  const [limit] = useState(3)
  const [offset, setOffset] = useState(0)
  const [orders, setOrders] = useState<OrderData[]>([])

  const { data, isLoading: isProfileLoading } = useGetProfileQuery({
    limit,
    offset,
  })

  const [selectedOrder, setSelectedOrder] = useState<number | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [trigger, { data: orderDetails, isLoading, isError }] =
    useLazyGetOrderDetailsQuery()

  useEffect(() => {
    if (data?.UserMe?.order_history) {
      setOrders(data.UserMe.order_history)
    }
  }, [data])

  const handleOpenModal = (orderId: number) => {
    setSelectedOrder(orderId)
    setIsOpen(true)
    trigger(orderId)
  }

  const handleNextPage = () => {
    setOffset((prev) => prev + limit)
  }

  const handlePrevPage = () => {
    setOffset((prev) => Math.max(prev - limit, 0))
  }
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU')
  }

  return (
    <div className={s.container}>
      <Title
        size="md-24"
        className={s.title}
      >
        История заказов
      </Title>

      {isProfileLoading && <p>Загрузка истории заказов...</p>}

      {orders.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID Заказа</th>
                <th>Дата</th>
                <th>Сумма</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id_order}>
                  <td>{order.id_order}</td>
                  <td>{formatDate(order.date_order)}</td>
                  <td>{order.total_price} Сом</td>
                  <td className={s.arrow}>
                    <AppButton
                      variant="white"
                      onClick={() => handleOpenModal(order.id_order)}
                    >
                      ›
                    </AppButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : isProfileLoading ? (
        <Title
          size="md-24"
          className={s.title}
        >
          Загрузка...
        </Title>
      ) : (
        <Empty
          title="История заказов пуста"
          description="Вы пока не совершали ни одного заказа"
          className={s.empty}
          to={navigationMap.Catalog}
        />
      )}

      <div className={s.pagination}>
        <AppButton
          variant="white"
          onClick={handlePrevPage}
        >
          ‹
        </AppButton>

        <span>Страница {Math.floor(offset / limit) + 1}</span>

        <AppButton
          variant="white"
          onClick={handleNextPage}
        >
          ›
        </AppButton>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className={s.modalContent}>
          {isLoading && <p>Загрузка...</p>}
          {isError && <p>Ошибка загрузки данных</p>}

          {orderDetails && (
            <>
              <Title size="md-24">Детали заказа #{selectedOrder}</Title>
              <div className={s.detailsGrid}>
                <div>Дата создания:</div>
                <div>{formatDate(orderDetails.created_at)}</div>

                <div>Общее количество:</div>
                <div>{orderDetails.total_quantity}</div>

                <div>Сумма без акций:</div>
                <div>{orderDetails.sub_total.toString()}</div>

                <div>Сумма по акциям:</div>
                <div>{orderDetails.promotion_total.toString()}</div>

                <div>Итоговая сумма:</div>
                <div>{orderDetails.total_price.toString()}</div>
              </div>

              <Title
                size="md-24"
                className={s.productsTitle}
              >
                Список товаров в заказе:
              </Title>

              {orderDetails.items.map((item, index) => (
                <div
                  key={index}
                  className={s.detailsGrid}
                >
                  <div>Название товара:</div>
                  <div>{item.product_title}</div>

                  <div>Общая цена за товар:</div>
                  <div>{item.price.toLocaleString('ru-RU')} Сом</div>

                  <div>Количество:</div>
                  <div>{item.count}</div>
                </div>
              ))}
            </>
          )}
        </div>
      </Modal>
    </div>
  )
}
