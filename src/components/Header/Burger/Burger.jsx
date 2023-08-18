import style from './Burger.module.css';

import {useDispatch} from 'react-redux';
import doToggleMobileMenu from "../../../store/actions/toggle-mobile-menu";


function Burger() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(doToggleMobileMenu(true));
  };

  return (
    <button onClick={handleClick} className={style.burger} title="Меню" aria-label="Открыть меню выбора режима игры">
      <span className={`${style.burgerLine} ${style.burgerLineFirst}`}></span>
      <span className={`${style.burgerLine} ${style.burgerLineSecond}`}></span>
      <span className={`${style.burgerLine} ${style.burgerLineThird}`}></span>
    </button>
  );
}

export default Burger;
