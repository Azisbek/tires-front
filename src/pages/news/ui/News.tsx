import { PromotionCard } from 'entities/promotionCard';
import { PromotionData } from '../../../widgets/promotion/api';
import s from './News.module.scss';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { Title } from 'shared/ui/Text';

interface Props {
  title?: string;
}

export function News({ title }: Props) {

  return (
    <div className={s.container}>
      <Title size="xl-40" color="black" className={s.title}>
        {title}
      </Title>

      <div className={s.promotionContainer}>
        {PromotionData.map((product) => (
          <PromotionCard
            key={product.id}
            title={product.title}
            category={product.category}
            date={product.date}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
      <AppButton
        className={s.btn}
        variant="border" >
        Показать ещё 10 из 32
      </AppButton>
    </div>
  );
}
