import { Text, Title } from 'shared/ui/Text'

import s from './NewsTitleList.module.scss'

interface Props {
  subheading: string
  subContent: string
  unorderedList: { id: number; text: string }[]
  orderedList: { id: number; text: string }[]
}

export function NewsTitleList({
  subheading,
  subContent,
  unorderedList,
  orderedList,
}: Props) {
  return (
    <div className={s.container}>
      <Title
        className={s.title}
        size="md-24"
      >
        {subheading}
      </Title>

      <Text className={s.text}>{subContent}</Text>

      <Title
        className={s.LiTitle}
        size="sm-18"
      >
        Маркированный список
      </Title>
      <ul className={s.ul}>
        {/* {unorderedList.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))} */}
        <li>{unorderedList[0].text}</li>
        <li>{unorderedList[1].text}</li>
        <li>{unorderedList[2].text}</li>
      </ul>

      <Title
        className={s.LiTitle}
        size="sm-18"
      >
        Нумерованный список
      </Title>
      <ol className={s.orderedList}>
        {/* {orderedList.map((el) => (
          <li key={el.id}>{el.text}</li>
        ))} */}

        <li>{orderedList[0].text}</li>
        <li>{orderedList[1].text}</li>
        <li>{orderedList[2].text}</li>
      </ol>
    </div>
  )
}
