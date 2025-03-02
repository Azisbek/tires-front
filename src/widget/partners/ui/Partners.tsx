import styles from './Partners.module.scss'
import { PartnersTrust } from "entities/partners";

export const Partners = () => {

  return (
    <>
      <PartnersTrust />
      <section className={styles.partners}>
        <h2 className={styles.title}>Наши партнеры</h2>
        <div className={styles.divider}>
          <div className={styles.container}>
            <div className={styles.logoRow}>
              <img src="src/shared/assets/icons/sitec-2-logo.png" alt="sitec" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/bushRanger-2-logo.png" alt="bushRanger" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/delta-2-logo.png" alt="delta" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/goform-2-logo.png" alt="goform" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/nitto-2-logo.png" alt="nitto" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/tigar-2-logo.png" alt="tigar" className={styles.partnersSection__logo} />
            </div>
            <div className={styles.logoRow}>
              <img src="src/shared/assets/icons/turvana-2-logo.png" alt="turvana" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/michelin-2-logo.png" alt="michelin" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/ntinental-2-logo.png" alt="continental" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/goodride-2-logo.png" alt="goodride" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/noking-2-logos.png" alt="noking" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/toyoTires-2-logo.png" alt="toyoTires" className={styles.partnersSection__logo} />
            </div>
            <div className={styles.logoRow}>
              <img src="src/shared/assets/icons/gerat-2-logo.png" alt="gerat" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/barum-2-logo.png" alt="barum" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/dunlop-2-logo.png" alt="dunlop" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/goodYear-2-logo.png" alt="goodYear" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/nokignTyres-2-logo.png" alt="nokignTyres" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/triangle-2-logo.png" alt="triangle" className={styles.partnersSection__logo} />
            </div>
            <div className={styles.logoRow}>
              <img src="src/shared/assets/icons/liquiMoly-2-logo.png" alt="liquiMoly" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/bfGoodrich-2-logo.png" alt="bfGoodrich" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/generalTire-2-logo.png" alt="generalTire" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/kumhoTyre-2-logo.png" alt="kumhoTyre" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/firelli-2-logo.png" alt="firelli" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/uniroyal-2-logo.png" alt="uniroyal" className={styles.partnersSection__logo} />
            </div>
            <div className={styles.logoRow}>
              <img src="src/shared/assets/icons/arb-2-logo.png" alt="arb" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/bridgestone-2-logo.png" alt="bridgestone" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/gislaved-2-logo.png" alt="gislaved" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/matador-2-logo.png" alt="matador" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/roadCruza-2-logo.png" alt="roadCruza" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/yokohama-2-logo.png" alt="yokohama" className={styles.partnersSection__logo} />
            </div>
          </div>
        </div>
      </section>

    </>
  );
};
