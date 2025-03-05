import s from './Icons.module.scss'

export function Icons() {
  return (
    <div className={s.icons}>
      <img
        src="src/shared/assets/icons/like_normal.png"
        alt="Heart"
      />
      <img
        src="src/shared/assets/icons/basket.png"
        alt="Cart"
      />
    </div>
  )
}
