import { descriptionTypesProps } from 'entities/brief-description/types/types'

import { Title } from 'shared/ui/Text'

import s from './BriefDescriptionMobile.module.scss'

export function BriefDescriptionMobile({ data }: descriptionTypesProps) {
  return (
    <div className={s.container}>
      <Title
        className={s.title}
        size="sm-18"
      >
        Краткое описание
      </Title>

      <ul className={s.list}>
        {data.map((item, index) => (
          <li
            key={index}
            className={s.listItem}
          >
            <p className={s.mode}>{item.label}</p>
            <p className={s.value}>{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
