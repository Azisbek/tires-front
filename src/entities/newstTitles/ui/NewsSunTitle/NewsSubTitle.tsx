import { Text, Title } from 'shared/ui/Text'

import s from './NewsSubTitle.module.scss'

interface Props {
  subTitle: string
  content: string
}

export function NewsSubTitle({ subTitle, content }: Props) {
  return (
    <div className={s.container}>
      <Title
        className={s.title}
        size="lg-32"
      >
        {subTitle}
      </Title>
      <Text className={s.text}>{content}</Text>
    </div>
  )
}
