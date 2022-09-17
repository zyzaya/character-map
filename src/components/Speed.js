import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';
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
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Speed
      </div>
      <div className="speed_output">{`${props.value}ft`}</div>
    </div>
  );
}
