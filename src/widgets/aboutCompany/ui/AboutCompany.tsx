import { CompanyDescription } from 'entities/aboutCompany'

import { Anchor } from 'shared/ui/Anchor/Anchor'
import { Title } from 'shared/ui/Text'

import img from '../../../shared/assets/imgs/nonePhoto.webp'

import s from './AboutCompany.module.scss'

export const AboutCompany = () => {
  const sections = [
    { id: 'history', title: 'Работаем с 2018 года' },
    { id: 'values', title: 'Ценности компании' },
    { id: 'clients', title: 'Работаем для клиентов' },
  ]
  return (
    <div className={s.container}>
      <div className={s.main}>
        <div>
          <Title
            size="xl-40"
            className={s.description}
          >
            О Компании
          </Title>
          <img
            className={s.img}
            src={img}
            alt=""
          />
        </div>
        <div className={s.anchor}>
          <Anchor sections={sections} />
        </div>
      </div>
      <CompanyDescription />
    </div>
  )
}
