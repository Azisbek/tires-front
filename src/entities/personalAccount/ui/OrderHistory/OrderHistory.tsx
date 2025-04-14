import { Title } from 'shared/ui/Text'

import s from './OrderHistory.module.scss'

export const OrderHistory = () => {
  return (
    <div className={s.container}>
      <Title
        size="md-24"
        className={s.title}
      >
        История заказов
      </Title>

      <table>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Дата</th>
            <th>Статус</th>
            <th>Сумма</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1234567</td>
            <td>12.06.2021</td>
            <td className={s.status_paid}>Оплачено</td>
            <td>12 345 ₽</td>
            <td className={s.arrow}>›</td>
          </tr>
          <tr>
            <td>1234567</td>
            <td>12.06.2021</td>
            <td className={s.status_cancelled}>Отменен</td>
            <td>15 345 ₽</td>
            <td className={s.arrow}>›</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
