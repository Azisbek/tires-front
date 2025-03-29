import { CompanyDescription } from 'entities/aboutCompany'

import { Title } from 'shared/ui/Text'

import img from '../../../shared/assets/imgs/noneImage.png'

import s from './AboutCompany.module.scss'

export const AboutCompany = () => {
  return (
    <div className={s.container}>
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
      <CompanyDescription />
    </div>
  )
}
