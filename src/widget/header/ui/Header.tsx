import React from "react";
import styles from "./Header.module.css";
import { Logo } from "../../../shared/ui/Logo";
import { NavMenu } from "../../../shared/ui/NavMenu";
import { Search } from "../../../feature/search/ui/Search";
import { Icons } from "../../../shared/ui/Icons";
import { UserDropdown } from "../../../feature/auth/ui/UserDropdown";
// import { BurgerMenu } from "shared/burger-menu/BurgerMenu";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavMenu />
        {/* <BurgerMenu/> */}
      </nav>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.actions}>
        <Search />
        <UserDropdown/>
        <Icons />
      </div>
    </header>
  );
};
