import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Text, Title } from 'shared/ui/Text'

import s from './TireInfoSectionImg.module.scss'

export function TireInfoSectionImg() {
  return (
    <div className={s.tireInfoImgContainer}>
      <div className={s.container}>
        <Title
          className={s.title}
          size="lg-32"
        >
          Поможем сделать правильный выбор
        </Title>
        <Text className={s.text}>
          Оставьте заявку и наши менеджеры подберут для вашего автомобиля
          требуемый товар{' '}
        </Text>
        <AppButton
          className={s.btn}
          variant="white"
        >
          Оставить заявку
        </AppButton>
      </div>
    </div>
  )
}
