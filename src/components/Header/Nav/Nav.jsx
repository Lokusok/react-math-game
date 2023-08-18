import style from "./Nav.module.css";

import {NavLink} from "react-router-dom";
import closeIcon from './../../../assets/images/close.svg';
import PropTypes from 'prop-types';


Nav.propTypes = {
  isNowActive: PropTypes.bool.isRequired,
  hideMobileMenu: PropTypes.func.isRequired,
};

function Nav({isNowActive, hideMobileMenu}) {
  const setClassLink = ({isActive}) => {
    return isActive ?
      `${style.navLinkActive} ${style.navLink}`
      :
      style.navLink;
  };
  const setClassNav = (isNowActive) => {
    return isNowActive ?
      `${style.nav} ${style.navActive}`
      :
      style.nav;
  };

  return (
    <nav className={setClassNav(isNowActive)}>
      <ul className={style.navList}>
        <li className="nav__list-item">
          <NavLink className={setClassLink} to="/sum">Сложение</NavLink>
        </li>

        <li className="nav__list-item">
          <NavLink className={setClassLink} to="/substraction">Вычитание</NavLink>
        </li>

        <li className="nav__list-item">
          <NavLink className={setClassLink} to="/multiply">Умножение</NavLink>
        </li>

        <li className="nav__list-item">
          <NavLink className={setClassLink} to="/division">Деление</NavLink>
        </li>
      </ul>

      <button onClick={hideMobileMenu} className={style.navMobileClose}>
        <img src={closeIcon} alt="Закрыть"/>
      </button>
    </nav>
  );
}

export default Nav;
