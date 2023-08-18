import style from './Header.module.css';

import OptsButton from './OptsButton/OptsButton';
import NavContainer from "./Nav/NavContainer";
import Burger from './Burger/Burger';


function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerRow}>
          <Burger/>
          <NavContainer/>

          <div className="options">
            <OptsButton/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
