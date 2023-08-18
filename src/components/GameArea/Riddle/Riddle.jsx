import style from './Riddle.module.css';
import PropTypes from 'prop-types';


Riddle.propTypes = {
  firstValue: PropTypes.number.isRequired,
  secondValue: PropTypes.number.isRequired,
  operator: PropTypes.string.isRequired
};

function Riddle({ firstValue, secondValue, operator }) {
  return (
    <div className={style.riddle}>
      <div className="riddle__question">
        <p className={style.riddleText}>
          <span className={style.riddleFirstValue}>
            {firstValue}
          </span>
          <span className={style.riddleOperator}>
            {operator}
          </span>
          <span className={style.riddleSecondValue}>
            {secondValue}
          </span>
          <span className={style.riddleEquals}>=</span>
          <span className={style.riddleSymbol}>
            ?
          </span>
        </p>
      </div>
    </div>
  );
}

export default Riddle;
