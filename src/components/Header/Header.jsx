import style from './Header.module.css';


function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerRow}>
          <nav className={style.nav}>
            <ul className={style.navList}>
              <li className="nav__list-item">
                <a className={style.navLink} href="#">Сложение</a>
              </li>

              <li className="nav__list-item">
                <a className={style.navLink} href="#">Вычитание</a>
              </li>

              <li className="nav__list-item">
                <a className={style.navLink} href="#">Умножение</a>
              </li>

              <li className="nav__list-item">
                <a className={style.navLink} href="#">Деление</a>
              </li>
            </ul>
          </nav>

          <div className="options">
            <button className="options__btn">
              Настройки
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
