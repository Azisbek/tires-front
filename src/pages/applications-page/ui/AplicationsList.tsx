import { Title } from 'shared/ui/Text'
import { SkeletonTable } from 'shared/ui/skeleton-components'

import { useGetApplicationsQuery } from '../api'

import s from './AplicationsList.module.scss'

export const ApplicationsList = () => {
  const { data: applications = [], isFetching } = useGetApplicationsQuery()

  return (
    <div className={s.container}>
      <Title
        size="md-24"
        className={s.title}
      >
        Заявки
      </Title>

      {isFetching && <SkeletonTable column={20} />}

      {applications.length > 0 && (
        <table className={s.table}>
          <thead>
            <tr>
              <th>ФИО</th>
              <th>Заказ</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id_order}>
                <td>
                  {app.first_name} {app.last_name}
                </td>
                <td>{app.product[0]?.title ?? 'Нет товара'}</td>
                <td>
                  {app.product[0]?.total_price?.toLocaleString('ru-RU') ?? 0}{' '}
                  Сом
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
