import clsx from 'clsx';
import s from './PartnersTrust.module.scss';

export const PartnersTrust = () => {
  return (
    <section className={s.partnersTrust}>
      <h2 className={s.title}>Нам доверяют</h2>
      <div className={s.border}></div>
      <div className={clsx(s.marquee, s.marqueeAnimation)}>
      <img className={s.marqueeImage} src="/src/shared/assets/icons/sitec-logo.png" alt="sitec-logo" />
        <img className={s.marqueeImage} src="/src/shared/assets/icons/Turvana-logo.png" alt="Turvana-logo" />
        <img className={s.marqueeImage} src="/src/shared/assets/icons/Gerat-logo.png" alt="Gerat-logo" />
        <img className={s.marqueeImage} src="/src/shared/assets/icons/LiquiMoly-logo.png" alt="LiquiMoly-logo" />
        <img className={s.marqueeImage} src="/src/shared/assets/icons/ARB-logo.png" alt="ARB-logo" />
        <img className={s.marqueeImage} src="/src/shared/assets/icons/BushRanger-logo.png" alt="BushRanger-logo" />
        <img className={s.marqueeImage} src="/src/shared/assets/icons/Michelin.png" alt="Michelin-logo" />
        <img className={s.marqueeImage} src="/src/shared/assets/icons/Barum-logo.png" alt="Barum-logo" />
        <img className={s.marqueeImage} src="/src/shared/assets/icons/BFGoodrich-logo.png" alt="BFGoodrich-logo" />
        <img className={s.marqueeImage} src="/src/shared/assets/icons/Bridgestone-logo.png" alt="Bridgestone-logo" />
      </div>
      <div className={s.border}></div>
    </section>
  );
};
