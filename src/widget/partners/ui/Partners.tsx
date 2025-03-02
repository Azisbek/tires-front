import s from './Partners.module.scss';
import { PartnersTrust } from 'entities/partners';

export const Partners = () => {
  return (
    <>
      <div className={s.container}>
        <PartnersTrust />
        <section className={s.partners}>
          <h2 className={s.title}>Наши партнеры</h2>
          <div className={s.logos}>
            <img src="/src/shared/assets/icons/sitec-2-logo.png" alt="sitec" className={s.logo} />
            <img src="/src/shared/assets/icons/turvana-2-logo.png" alt="turvana" className={s.logo} />
            <img src="/src/shared/assets/icons/gerat-2-logo.png" alt="gerat" className={s.logo} />
            <img src="/src/shared/assets/icons/liquiMoly-2-logo.png" alt="liquiMoly" className={s.logo} />
            <img src="/src/shared/assets/icons/arb-2-logo.png" alt="arb" className={s.logo} />

            <img src="/src/shared/assets/icons/bushRanger-2-logo.png" alt="bushRanger" className={s.logo} />
            <img src="/src/shared/assets/icons/michelin-2-logo.png" alt="michelin" className={s.logo} />
            <img src="/src/shared/assets/icons/barum-2-logo.png" alt="barum" className={s.logo} />
            <img src="/src/shared/assets/icons/bfGoodrich-2-logo.png" alt="bfGoodrich" className={s.logo} />
            <img src="/src/shared/assets/icons/bridgestone-2-logo.png" alt="bridgestone" className={s.logo} />

            <img src="/src/shared/assets/icons/delta-2-logo.png" alt="delta" className={s.logo} />
            <img src="/src/shared/assets/icons/ntinental-2-logo.png" alt="continental" className={s.logo} />
            <img src="/src/shared/assets/icons/dunlop-2-logo.png" alt="dunlop" className={s.logo} />
            <img src="/src/shared/assets/icons/generalTire-2-logo.png" alt="generalTire" className={s.logo} />
            <img src="/src/shared/assets/icons/gislaved-2-logo.png" alt="gislaved" className={s.logo} />

            <img src="/src/shared/assets/icons/goform-2-logo.png" alt="goform" className={s.logo} />
            <img src="/src/shared/assets/icons/goodride-2-logo.png" alt="goodride" className={s.logo} />
            <img src="/src/shared/assets/icons/goodYear-2-logo.png" alt="goodYear" className={s.logo} />
            <img src="/src/shared/assets/icons/kumhoTyre-2-logo.png" alt="kumhoTyre" className={s.logo} />
            <img src="/src/shared/assets/icons/matador-2-logo.png" alt="matador" className={s.logo} />

            <img src="/src/shared/assets/icons/nitto-2-logo.png" alt="nitto" className={s.logo} />
            <img src="/src/shared/assets/icons/noking-2-logos.png" alt="noking" className={s.logo} />
            <img src="/src/shared/assets/icons/nokignTyres-2-logo.png" alt="nokignTyres" className={s.logo} />
            <img src="/src/shared/assets/icons/firelli-2-logo.png" alt="firelli" className={s.logo} />
            <img src="/src/shared/assets/icons/roadCruza-2-logo.png" alt="roadCruza" className={s.logo} />

            <img src="/src/shared/assets/icons/tigar-2-logo.png" alt="tigar" className={s.logo} />
            <img src="/src/shared/assets/icons/toyoTires-2-logo.png" alt="toyoTires" className={s.logo} />
            <img src="/src/shared/assets/icons/triangle-2-logo.png" alt="triangle" className={s.logo} />
            <img src="/src/shared/assets/icons/uniroyal-2-logo.png" alt="uniroyal" className={s.logo} />
            <img src="/src/shared/assets/icons/yokohama-2-logo.png" alt="yokohama" className={s.logo} />
          </div>
        </section>
      </div>
    </>
  );
};