import { FooterAccount, FooterCompany, FooterContact, FooterProduct, FooterServices } from "entities/footerComponents";
import s from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.logoWrapper}>
                <img
                    className={s.logo}
                    src="src/shared/assets/icons/logo/logo.svg"
                    alt="logo"
                />
            </div>
            <div className={s.container}>
                <div className={s.footerLeft}>
                    <FooterProduct/>
                    <FooterServices />
                </div>
                <div className={s.footerCenter}>
                    <FooterContact />
                </div>
                <div className={s.footerRight}>
                    <FooterCompany />
                    <FooterAccount />
                </div>
            </div>
        </footer>
    );
};
