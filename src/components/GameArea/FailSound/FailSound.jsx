import style from './FailSound.module.css';
import Sound from './../../../assets/wrong.mp3'

import {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import doToggleSound from './../../../store/actions/toggle-sound';


function FailSound() {
  const dispatch = useDispatch();
  const needPlaySound = useSelector((state) => state.riddle.soundPlays);
  const player = useRef(null);

  useEffect(() => {
    if (needPlaySound) {
      player.current.play();
      dispatch(doToggleSound(false));
    }
  });

  return (
    <audio
      className={style.audio}
      src={Sound}
      ref={player}
      controls
      aria-hidden="true"
    />
  );
}

export default FailSound;
