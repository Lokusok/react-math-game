import style from './Answer.module.css';


function Answer({ className, answerText, isCorrect, onClick }) {
  return (
    <button className={`${style.answer} ${className}`} onClick={onClick}>
      <span className={style.answerText}>
        {answerText}
      </span>
    </button>
  );
}

export default Answer;
