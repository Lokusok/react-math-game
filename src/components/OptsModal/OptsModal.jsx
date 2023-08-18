import style from './OptsModal.module.css';
import PropTypes from 'prop-types';

OptsModal.propTypes = {
  options: PropTypes.object.isRequired,
  setVisibility: PropTypes.func.isRequired,
  hideModal: PropTypes.func.isRequired,
  handleModalClick: PropTypes.func.isRequired,
  handleOptionsBlockClick: PropTypes.func.isRequired,
  handleAcceptOptions: PropTypes.func.isRequired,
  allowNegativesOptionRef: PropTypes.object.isRequired,
  allowFractionsOptionRef: PropTypes.object.isRequired,
};

function OptsModal({options, setVisibility, hideModal, handleModalClick, handleOptionsBlockClick, handleAcceptOptions, allowNegativesOptionRef, allowFractionsOptionRef}) {
  return (
    <div className={setVisibility(options.showOptionsModal)} onClick={handleModalClick}>
      <div className="modal__row">
        <div className={style.options} onClick={handleOptionsBlockClick}>
          <div className={style.optionsInner}>
            <div className={style.optionsForm}>
              <label className={style.optionsValue}>
                <input
                  className={style.optionsValueInput}
                  ref={allowNegativesOptionRef}
                  defaultChecked={options.allowNegatives}
                  type="checkbox"
                />
                <span className={style.optionsValueText}>Отрицательные значения</span>
              </label>
              <label className={style.optionsValue}>
                <input
                  className={style.optionsValueInput}
                  ref={allowFractionsOptionRef}
                  defaultChecked={options.allowFractions}
                  type="checkbox"
                />
                <span className={style.optionsValueText}>Дробные значения</span>
              </label>

              <button
                className={style.optionsApply}
                onClick={handleAcceptOptions}
              >Применить
              </button>
            </div>
          </div>

          <button
            className={style.optionsClose}
            title="Закрыть"
            aria-label="Закрыть модальное окно настройки игры"
            onClick={hideModal}
          >X
          </button>
        </div>
      </div>
    </div>
  )
}

export default OptsModal;
