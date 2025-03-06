import { useState } from 'react'

import { SliderBanner } from 'features/slider'

import { BannerCarousel } from 'entities/bannerCarousel'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './MainBanner.module.scss'

// Временно пока не будет база данных !
const banners = [
  'src/shared/assets/imgs/banner-1.png',
  'src/shared/assets/imgs/banner-2.png',
  'src/shared/assets/imgs/banner-3.png',
  'src/shared/assets/imgs/banner-1.png',
]

export function MainBanner() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [bannerInterval, setBannerInterval] = useState<number>(5000)

  return (
    <div className={s.banner}>
      <div className={s.bannerCarousel}>
        <BannerCarousel
          images={banners}
          currentSlide={currentSlide}
        />
      </div>

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
          images={banners}
          currentPoint={currentSlide}
          onPointClick={setCurrentSlide}
          interval={bannerInterval}
        />
      </div>
    </div>
  )
}
