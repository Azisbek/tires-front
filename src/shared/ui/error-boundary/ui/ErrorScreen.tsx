import clsx from 'clsx'

import s from './ErrorScreen.module.scss'

//TODO
export function ErrorScreen() {
  return (
    <div className={clsx('container', s.container)}>
      <div className={s.content}>
        <p className={s.title}>Произошла ошибка</p>
        <p className={s.subtitle}>
          У нас ведутся технические работы, скоро обязательно все починим
        </p>
      </div>
    </div>
  )
}
