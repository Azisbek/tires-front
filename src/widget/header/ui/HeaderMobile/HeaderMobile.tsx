import React from 'react';
import { BurgerMenu } from 'features/burger-menu';
import { User } from 'shared/ui/user/ui/User';
import { Logo } from '../../../../shared/ui/logo/ui/Logo';
import s from '../Header/Header.module.scss';
import { Search } from 'features/search';

export function HeaderMobile(): React.ReactElement {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <BurgerMenu />
      </nav>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.actions}>
        <Search/>
        <User />
      </div>
    </header>
  );
}