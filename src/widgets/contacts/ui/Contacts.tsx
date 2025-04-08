import { ContactInformation } from 'entities/contact-information'

import { Title } from 'shared/ui/Text'

import s from './Contacts.module.scss'

export function Contacts() {
  return (
    <section className={s.contactsContainer}>
      <Title>Контактная информация</Title>

      <div className={s.contacts}>
        <img
          className={s.img}
          src="src/shared/assets/imgs/nonePhoto.webp"
          alt="none-Photo"
        />

        <ContactInformation />
      </div>
    </section>
  )
}
