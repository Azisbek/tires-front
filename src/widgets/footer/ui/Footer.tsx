import { FooterContact } from "./FooterContact";
import s from "./Footer.module.scss";
import { FooterLinks } from "./FooterLinks";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.logoContainer}>
                <img
                    className={s.logo}
                    src="src/shared/assets/icons/logo/logo.svg"
                    alt="logo"
                />
            </div>
            <div className={s.container}>
                <div className={s.leftLinks}>
                    <FooterLinks type="left" />
                </div>
                <div className={s.footerCenter}>
                    <FooterContact />
                </div>
                <div className={s.rightLinks}>
                    <FooterLinks type="right" />
                </div>
            </div>
        </footer>
    );
};