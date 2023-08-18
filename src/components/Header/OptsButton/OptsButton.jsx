import style from './OptsButton.module.css';

import {useSelector, useDispatch} from 'react-redux';
import doToggleModalOptions from '../../../store/actions/toggle-modal-options';
import optionsImage from './../../../assets/images/options.svg';


function OptsButton() {
  const dispatch = useDispatch();
  const isModalVisible = useSelector((state) => state.options.showOptionsModal);

  const handleClick = () => {
    dispatch(doToggleModalOptions(!isModalVisible));
  };

  return (
    <button
      className={style.button}
      onClick={handleClick}
      title="Настройки игры"
      aria-label="Открыть настройки игры"
    >
      <img className={style.buttonImg} src={optionsImage} alt="Настройки" />
    </button>
  );
}

export default OptsButton;
