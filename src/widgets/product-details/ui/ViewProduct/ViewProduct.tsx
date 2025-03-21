import {
  PriceContainer,
  descriptionContainer,
} from 'widgets/product-details/api/data'

import { BuyCard } from 'features/buy-card'

import { BriefDescription } from 'entities/brief-description/ui/BriefDescription/BriefDescription'
import { BriefDescriptionMobile } from 'entities/brief-description/ui/BriefDescriptionMobile/BriefDescriptionMobile'
import { ProductHeader } from 'entities/product-header'

import tireImg from 'shared/assets/imgs/tire.png'
import { useScreenWidth } from 'shared/hooks/useScreenWidth'
import { Space } from 'shared/ui/Space/Space'
import { TiresImage } from 'shared/ui/TiresImage'

import s from './ViewProduct.module.scss'

export function ViewProduct() {
  const { isMobile } = useScreenWidth()

  return (
    <div className={s.viewProduct}>
      <ProductHeader
        title="Шины летние Cordiant Sport 3 PS2 215/65 R16 102V"
        tiresType="summer"
        hasGuarantee={true}
        productCode="123456"
        commentQuantity={5}
        productRating={4}
      />

      <Space h={34} />

      <div className={s.container}>
        <TiresImage
          image={tireImg}
          season="summer"
        />

        {isMobile ? (
          <BriefDescriptionMobile data={descriptionContainer} />
        ) : (
          <BriefDescription data={descriptionContainer} />
        )}

        <BuyCard data={PriceContainer} />
      </div>
    </div>
  )
}
