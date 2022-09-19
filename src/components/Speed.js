import React from 'react';
import Buttons from './Buttons';
import '../styles/Speed.css';
import useStatistic from '../hooks/useStatistic';

export default function Speed(props) {
  const [visual, setVisual] = useStatistic('speed');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`speed ${visual}`} onClick={toggleVisual}>
      <div className="speed_title">
        <Buttons></Buttons>
        Speed
      </div>
      <div className="speed_output">{`${props.value}ft`}</div>
    </div>
  );
}
