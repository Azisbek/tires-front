import { Title } from 'shared/ui/Text'

import { useGetProfileQuery } from '../../api/index'

import s from './PersonalAccount.module.scss'

export const PersonalAccount = () => {
  const { data: userData, isLoading } = useGetProfileQuery()

  if (isLoading || !userData) return <p>Загрузка...</p>

  return (
    <div className={s.container}>
      <Title
        size="md-24"
        className={s.title}
      >
        Личные данные
      </Title>

      <section className={s.personalDetails}>
        <p>ID: {userData.id}</p>
        <p>Email: {userData.email}</p>
        <p>Username: {userData.username}</p>
        <p>Phone: {userData.phone || 'Не указан'}</p>
      </section>
    </div>
  )
}
