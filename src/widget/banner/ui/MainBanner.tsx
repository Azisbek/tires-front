import { useState } from 'react'

import { SliderBanner } from 'features/slider'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './MainBanner.module.scss'

// Временно пока не будет база данных !
const dataImage = [
  'src/shared/assets/imgs/banner-1.png',
  'src/shared/assets/imgs/banner-2.png',
  'src/shared/assets/imgs/banner-3.png',
  'src/shared/assets/imgs/banner-1.png',
]

export function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  return (
    <div className={s.banner}>
      <img
        src={dataImage[currentSlide]}
        alt="banner"
        className={s.bannerImg}
      />

      <div className={s.bannerContent}>
        <h1 className={s.title}>Шиномонтаж и доставка бесплатно</h1>

        <AppButton
          className={s.btn}
          variant="white"
        >
          Подробнее
        </AppButton>

        <SliderBanner
          className={s.slider}
          images={dataImage}
          currentPoint={currentSlide}
          onPointClick={setCurrentSlide}
          delay={5000}
        />
      </div>
    </div>
  )
}
