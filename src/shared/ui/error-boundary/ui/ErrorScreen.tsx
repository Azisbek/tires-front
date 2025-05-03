import { Link } from 'react-router-dom'

import s from './ErrorScreen.module.scss'

export function ErrorScreen() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Пшш…Страница не найдена </h1>
      <img
        src="/src/shared/assets/icons/404.svg"
        className={s.errImage}
        alt="error 404 image"
      />
      <Link
        to="/"
        className={s.link}
      >
        Перейти на главную страницу
      </Link>
    </div>
  )
}
