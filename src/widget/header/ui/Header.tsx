import React, { useState, useEffect } from "react";
import s from "./Header.module.scss";
import { Logo } from "../../../shared/ui/Logo";
import { NavMenu } from "../../../shared/ui/NavMenu";
import { Search } from "../../../feature/search/ui/Search";
import { Icons } from "../../../shared/ui/Icons";
import { UserDropdown } from "../../../feature/auth/ui/UserDropdown";
import { BurgerMenu } from "../../../feature/burger-menu/ui/ui/BurgerMenu";
import { User } from "shared/ui/User";



export const Header: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        {isMobile ? <User/> : <Icons />}
        
      </div>
    </header>
  );
};
