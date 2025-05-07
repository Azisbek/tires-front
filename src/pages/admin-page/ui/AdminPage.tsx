import { Link } from 'react-router-dom'

import s from './AdminPage.module.scss'

export function AdminPage() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>АДМИНКА</h1>

      <div className={s.buttons}>
        <Link
          to="/admin/add-product"
          className={s.btn}
        >
          Добавить товар
        </Link>

        <Link
          to="/admin/add-news"
          className={s.btn}
        >
          Добавить новость
        </Link>

        <Link
          to="/admin/applications"
          className={s.btn}
        >
          Заявки
        </Link>
        <Link
          to="/admin/add-tires-type"
          className={s.btn}
        >
          Добавить тип шины
        </Link>
      </div>
    </div>
  )
}
