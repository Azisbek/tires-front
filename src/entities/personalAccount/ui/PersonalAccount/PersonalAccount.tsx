import { Title } from 'shared/ui/Text'

import s from './PersonalAccount.module.scss'

export const PersonalAccount = () => {
  return (
    <div className={s.container}>
      <Title
        size="xl-40"
        className={s.description}
      >
        Личный кабинет
      </Title>
      <Title
        size="md-24"
        className={s.title}
      >
        Личные данные
      </Title>
      <form className={s.form}>
        <input
          type="text"
          placeholder="Фамилия"
        />
        <input
          type="text"
          placeholder="Имя"
        />
        <input
          type="text"
          placeholder="Отчество"
        />
        <input
          type="text"
          placeholder="Электронная почта"
        />
        <input
          type="text"
          placeholder="Телефон"
        />
      </form>
    </div>
  )
}
