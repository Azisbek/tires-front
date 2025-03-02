import React from "react";
import styles from './PartnersTrust.module.scss'
const partnerLogos = [
  'ARB-logo.png',
  'BFGoodrich-logo.png',
  'Barum-logo.png',
  'Bridgestone-logo.png',
  'Gerat-logo.png',
  'LiquiMoly-logo.png',
  'Michelin.png',
  'Turvana-logo.png',
  'sitec-logo.png',
  'BushRanger-logo.png'
];



export const PartnersTrust = () => {

  return (
    <>
      <section className={styles.partnersTrustSection}>
        <h2 className={styles.partnersTrustSection__title}>Нам доверяют</h2>
        <div className={styles.partnersTrustSection__divider}></div>
        <div className={styles.partnersTrustSection__container}>
          <div className={styles.partnersTrustSection__marquee}>
            <div className={styles.partnersTrustSection__marqueeContent}>
              {partnerLogos.map((logo, index) => (
                <img
                  key={index}
                  className={styles.partnerLogo}
                  src={`src/shared/assets/icons/${logo}`}
                  alt={`${logo.split('-')[0]} logo`}
                />
              ))}
              {partnerLogos.map((logo, index) => (
                <img
                  key={`duplicate-${index}`}
                  className={styles.partnerLogo}
                  src={`src/shared/assets/icons/${logo}`}
                  alt={`${logo.split('-')[0]} logo`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.partnersTrustSection__divider}></div>
      </section>


      {/* <section className={styles.partnersTrustSection}>
        <h2 className={styles.partnersTrustSection__title}>Нам доверяют</h2>
        <div className={styles.partnersTrustSection__divider}>
          <div className={styles.partnersTrustSection__container}>
            <div className={styles.partnersTrustSection__marquee}>
              <div className={styles.partnersTrustSection__marqueeContent}>
                <img src="src/shared/assets/icons/BushRanger-logo.png" alt="BushRanger-logo" />
                <img src="src/shared/assets/icons/ARB-logo.png" alt="ARB-logo" />
                <img src="src/shared/assets/icons/BFGoodrich-logo.png" alt="BFGoodrich-logo" />
                <img src="src/shared/assets/icons/Barum-logo.png" alt="Barum-logo" />
                <img src="src/shared/assets/icons/Bridgestone-logo.png" alt="Bridgestone-logo" />
                <img src="src/shared/assets/icons/Gerat-logo.png" alt="Gerat-logo" />
                <img src="src/shared/assets/icons/LiquiMoly-logo.png" alt="LiquiMoly-logo" />
                <img src="src/shared/assets/icons/Michelin.png" alt="Michelin-logo" />
                <img src="src/shared/assets/icons/Turvana-logo.png" alt="Turvana-logo" />
                <img src="src/shared/assets/icons/sitec-logo.png" alt="sitec-logo" />

                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/BushRanger-logo.png" alt="BushRanger-logo" />
                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/ARB-logo.png" alt="ARB-logo" />
                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/BFGoodrich-logo.png" alt="BFGoodrich-logo" />
                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/Barum-logo.png" alt="Barum-logo" />
                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/Bridgestone-logo.png" alt="Bridgestone-logo" />
                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/Gerat-logo.png" alt="Gerat-logo" />
                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/LiquiMoly-logo.png" alt="LiquiMoly-logo" />
                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/Michelin.png" alt="Michelin-logo" />
                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/Turvana-logo.png" alt="Turvana-logo" />
                <img className={styles.partnersTrustSection__brand} src="src/shared/assets/icons/sitec-logo.png" alt="sitec-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    */}
    </>
  );
};
