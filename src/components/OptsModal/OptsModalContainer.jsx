import style from './OptsModal.module.css';
import OptsModal from './OptsModal';

import {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import doToggleModalOptions from "../../store/actions/toggle-modal-options";
import doAllowNegatives from "../../store/actions/toggle-negatives";
import doAllowFractions from "../../store/actions/toggle-fractions";


function OptsModalContainer() {
  const allowNegativesOption = useRef(null);
  const allowFractionsOption = useRef(null);
  const options = useSelector((state) => state.options);
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.options.showOptionsModal);
  const setVisibility = (showModal) => {
    return showModal ?
      `${style.modal} ${style.modalVisible}`
      :
      style.modal;
  };

  const hideModal = () => {
    dispatch(doToggleModalOptions(!showModal));
  };

  const handleModalClick = () => {
    hideModal();
  };

  const handleOptionsBlockClick = (event) => {
    event.stopPropagation();
  };

  const handleAcceptOptions = () => {
    dispatch(doAllowNegatives(allowNegativesOption.current.checked));
    dispatch(doAllowFractions(allowFractionsOption.current.checked));
    hideModal();
  };

  return (
    <OptsModal
      options={options}
      setVisibility={setVisibility}
      hideModal={hideModal}
      handleModalClick={handleModalClick}
      handleOptionsBlockClick={handleOptionsBlockClick}
      handleAcceptOptions={handleAcceptOptions}
      allowNegativesOptionRef={allowNegativesOption}
      allowFractionsOptionRef={allowFractionsOption}
    />
  )
}

export default OptsModalContainer;
