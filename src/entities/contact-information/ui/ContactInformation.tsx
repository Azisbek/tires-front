import { Text, Title } from 'shared/ui/Text'

import { Socials } from '../SocialsComponent/Socials'

import s from './ContactInformation.module.scss'

export function ContactInformation() {
  return (
    <div className={s.container}>
      <Title size="sm-18">Адрес:</Title>
      <Text className={s.text}>Пролетарская улица, 132/5, Саранск</Text>

      <Title size="sm-18">Телефон:</Title>
      <Text className={s.text}>+9960000000</Text>

      <Title size="sm-18">Электронная почта:</Title>
      <a href="#">
        <Text className={s.email}>example@gmail.com</Text>
      </a>

      <Title size="sm-18">Социальные сети</Title>
      <div className={s.text}>
        <Socials />
      </div>

      <Title size="sm-18">Реквизиты</Title>
      <div className={s.text}>
        <Text>OOO «ШИННЫЙ ЦЕНТР 13»,</Text>
        <Text>ИНН 1327032595,</Text>
        <Text>ОРГН 1181326003726,</Text>
        <Text>КПП 132701001.</Text>
      </div>
    </div>
  )
}
