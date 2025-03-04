import s from './UserDropdown.module.scss';

export const UserDropdown = () => {
  
  return (
    <div className={s.dropdown}>
      <button className={s.dropdownButton}>
        Личный кабинет 
      </button>
      
    </div>
  );
};

export default UserDropdown