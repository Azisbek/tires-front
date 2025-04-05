import s from './GoogleAuthBtn.module.scss'

export function GoogleAuthBtn() {
  return (
    <button className={s.btn}>
      <img
        src="src/shared/assets/icons/auth/google.webp"
        alt="google"
        width={25}
        height={25}
      />
    </button>
  )
}
