import React from "react";
import s from "./Header.module.scss";
import { Logo } from "../../../shared/ui/logo/ui/Logo";
import { NavMenu } from "../../../shared/ui/navMenu/ui/NavMenu";
import { Search } from "../../../feature/search/ui/Search";
import { Icons } from "../../../shared/ui/icons/ui/Icons";
import { UserDropdown } from "../../../feature/auth/ui/UserDropdown";
import { BurgerMenu } from "../../../feature/burger-menu/ui/BurgerMenu";
import { User } from "shared/ui/user/ui/User";
import { useScreenWidth } from "../../../shared/hooks/useScreenWidth";


export function Header(): React.ReactElement {
  const { isMobile } = useScreenWidth();

  return (
    <header className={s.header}>
      <nav className={s.nav}>
        {isMobile ? <BurgerMenu /> : <NavMenu />}
      </nav>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.actions}>
        {isMobile ? null : <Search />}
        {isMobile ? null : <UserDropdown />}
        {isMobile ? <User /> : <Icons />}
      </div>
    </header>
  );
}