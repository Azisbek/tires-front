import React from "react";
import styles from './Partners.module.scss'
import { PartnersTrust } from "entities/partners";
const partnerLogos = [
  ["sitec-2-logo.png", "bushRanger-2-logo.png", "delta-2-logo.png", "goform-2-logo.png", "nitto-2-logo.png", "tigar-2-logo.png",],
  ["turvana-2-logo.png", "michelin-2-logo.png", "ntinental-2-logo.png", "goodride-2-logo.png", "noking-2-logos.png", "toyoTires-2-logo.png",],
  ["gerat-2-logo.png", "barum-2-logo.png", "dunlop-2-logo.png", "goodYear-2-logo.png", "nokignTyres-2-logo.png", "triangle-2-logo.png",],
  ["liquiMoly-2-logo.png", "bfGoodrich-2-logo.png", "generalTire-2-logo.png", "kumhoTyre-2-logo.png", "firelli-2-logo.png", "uniroyal-2-logo.png",],
  ["arb-2-logo.png", "bridgestone-2-logo.png", "gislaved-2-logo.png", "matador-2-logo.png", "roadCruza-2-logo.png", "yokohama-2-logo.png",],
];

export const Partners = () => {

  return (
    <>
      {/* <PartnersTrust />
      <section className={styles.partnersSection}>
        <h2 className={styles.title}>Наши партнеры</h2>
        <div className={styles.logoContainer}>
          {partnerLogos.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.logoRow}>
              {row.map((logo, logoIndex) => (
                <img
                  key={logoIndex}
                  src={`src/shared/assets/icons/${logo}`}
                  alt={logo.replace("-2-logo.png", "")}
                  className={styles.logo}
                />
              ))}
            </div>
          ))}
        </div>
      </section> */}


      <PartnersTrust />

      <section className={styles.partnersSection}>
        <h2 className={styles.partnersSection__title}>Наши партнеры</h2>
        <div className={styles.partnersSection__divider}>
          <div className={styles.partnersSection__logoContainer}>
            <div className={styles.partnersSection__logoRow}>
              <img src="src/shared/assets/icons/sitec-2-logo.png" alt="sitec" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/bushRanger-2-logo.png" alt="bushRanger" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/delta-2-logo.png" alt="delta" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/goform-2-logo.png" alt="goform" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/nitto-2-logo.png" alt="nitto" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/tigar-2-logo.png" alt="tigar" className={styles.partnersSection__logo} />
            </div>
            <div className={styles.partnersSection__logoRow}>
              <img src="src/shared/assets/icons/turvana-2-logo.png" alt="turvana" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/michelin-2-logo.png" alt="michelin" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/ntinental-2-logo.png" alt="continental" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/goodride-2-logo.png" alt="goodride" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/noking-2-logos.png" alt="noking" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/toyoTires-2-logo.png" alt="toyoTires" className={styles.partnersSection__logo} />
            </div>
            <div className={styles.partnersSection__logoRow}>
              <img src="src/shared/assets/icons/gerat-2-logo.png" alt="gerat" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/barum-2-logo.png" alt="barum" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/dunlop-2-logo.png" alt="dunlop" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/goodYear-2-logo.png" alt="goodYear" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/nokignTyres-2-logo.png" alt="nokignTyres" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/triangle-2-logo.png" alt="triangle" className={styles.partnersSection__logo} />
            </div>
            <div className={styles.partnersSection__logoRow}>
              <img src="src/shared/assets/icons/liquiMoly-2-logo.png" alt="liquiMoly" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/bfGoodrich-2-logo.png" alt="bfGoodrich" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/generalTire-2-logo.png" alt="generalTire" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/kumhoTyre-2-logo.png" alt="kumhoTyre" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/firelli-2-logo.png" alt="firelli" className={styles.partnersSection__logo} />
              <img src="src/shared/assets/icons/uniroyal-2-logo.png" alt="uniroyal" className={styles.partnersSection__logo} />
            </div>
            <div className={styles.partnersSection__logoRow}>
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
