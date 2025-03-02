import styles from './PartnersTrust.module.scss'

export const PartnersTrust = () => {
  return (
    <>
      <section className={styles.partnersTrust}>
        <h2 className={styles.title}>Нам доверяют</h2>
        <div className={styles.divider}>
          <div className={styles.container}>
            <div className={styles.marquee}>
              <div className={styles.marqueeContent}>
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

                <img className={styles.logoDesktopV} src="src/shared/assets/icons/BushRanger-logo.png" alt="BushRanger-logo" />
                <img className={styles.logoDesktopV} src="src/shared/assets/icons/ARB-logo.png" alt="ARB-logo" />
                <img className={styles.logoDesktopV} src="src/shared/assets/icons/BFGoodrich-logo.png" alt="BFGoodrich-logo" />
                <img className={styles.logoDesktopV} src="src/shared/assets/icons/Barum-logo.png" alt="Barum-logo" />
                <img className={styles.logoDesktopV} src="src/shared/assets/icons/Bridgestone-logo.png" alt="Bridgestone-logo" />
                <img className={styles.logoDesktopV} src="src/shared/assets/icons/Gerat-logo.png" alt="Gerat-logo" />
                <img className={styles.logoDesktopV} src="src/shared/assets/icons/LiquiMoly-logo.png" alt="LiquiMoly-logo" />
                <img className={styles.logoDesktopV} src="src/shared/assets/icons/Michelin.png" alt="Michelin-logo" />
                <img className={styles.logoDesktopV} src="src/shared/assets/icons/Turvana-logo.png" alt="Turvana-logo" />
                <img className={styles.logoDesktopV} src="src/shared/assets/icons/sitec-logo.png" alt="sitec-logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
