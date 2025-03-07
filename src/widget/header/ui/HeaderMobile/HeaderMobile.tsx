import React from 'react';
import { BurgerMenu } from 'features/burger-menu';
import { User } from '../../../../entities/user/ui/User';
import { Logo } from '../../../../entities/logo/ui/Logo';
import s from './HeaderMobile.module.scss';
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