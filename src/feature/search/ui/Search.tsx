import React from "react";
import SearchIcon from '../../../shared/assets/icon/search/search.svg'
import s from "./Search.module.scss";

export const Search: React.FC = () => {
  return <img className={s.icon} src={SearchIcon} alt="search" />
};