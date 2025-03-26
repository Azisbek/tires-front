import { PromotionCard } from 'entities/promotionCard';
import { PromotionData } from '../../../widgets/promotion/api';
import s from './News.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { Title } from 'shared/ui/Text';
import { useState } from 'react';

interface Props {
  title?: string;
}

export function News({ title }: Props) {
  const [visibleCount, setVisibleCount] = useState(9); 

  const loadMore = () => {
    setVisibleCount(visibleCount + 10);
  };

  const totalPromotions = PromotionData?.length || 0;
  const remainingPromotions = totalPromotions - visibleCount;

  return (
    <div className={s.promotion}>
      <Title size="xl-40" color="black" className={s.title}>
        {title}
      </Title>

      <div className={s.promotionContainer}>
        {PromotionData.slice(0, visibleCount).map((product, index) => (
          <PromotionCard
            key={product.id || index}
            title={product.title}
            category={product.category}
            expiryDate={product.expiryDate}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>

      {remainingPromotions > 0 && (
        <AppButton
          className={s.btn}
          variant="border"
          onClick={loadMore}
        >
          Показать ещё {remainingPromotions} из {totalPromotions}
        </AppButton>
      )}
    </div>
  );
}
