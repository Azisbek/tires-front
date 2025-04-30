import s from './PhotoSection.module.scss'

export function PhotoSection({
  label,
  multiple = false,
}: {
  label: string
  multiple?: boolean
  width: 315 | 120
}) {
  return (
    <div className={s.inputBlock}>
      <label>{label}</label>
      <button
        type="button"
        className={s.addPhotoBtn}
      >
        + добавить картинку
      </button>
      <div className={multiple ? s.photosWrapper : s.photo}>
        {multiple &&
          Array.from({ length: 6 }).map((_, idx) => (
            <div
              key={idx}
              className={`${s.photo} ${s.w120}`}
            ></div>
          ))}
      </div>
    </div>
  )
}
