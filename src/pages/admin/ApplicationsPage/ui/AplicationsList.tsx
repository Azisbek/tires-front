import { useEffect, useState } from 'react'

import { Title } from 'shared/ui/Text'

import { useLazyFetchApplicationsQuery } from '../api/aplicationsApi'
import { ApplicationData } from '../types/types'

import s from './AplicationsList.module.css'

export const ApplicationsList = () => {
  const [applications, setApplications] = useState<ApplicationData[]>([])

  const [triggerFetch, { data, isLoading }] = useLazyFetchApplicationsQuery()

  useEffect(() => {
    triggerFetch()
  }, [triggerFetch])

  useEffect(() => {
    if (data) {
      setApplications(data)
    }
  }, [data])

  return (
    <div className={s.container}>
      <Title
        size="md-24"
        className={s.title}
      >
        Заявки
      </Title>

      {isLoading && <p>Загрузка заявок...</p>}

      {applications.length > 0 ? (
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
      ) : (
        !isLoading && <p>Нет заявок.</p>
      )}
    </div>
  )
}
