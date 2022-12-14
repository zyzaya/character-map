import React from 'react';
import Buttons from './Buttons';
import '../styles/Proficiency.css';
import useStatistic from '../hooks/useStatistic';

export default function Proficiency(props) {
  const [visual, setVisual] = useStatistic('proficiency');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`proficiency ${visual}`} onClick={toggleVisual}>
      <Buttons name="proficiency" />
      <label className="proficiency_title" htmlFor="proficiency_value">
        Proficiency Bonus
      </label>
      <div className="proficiency_value">{props.value}</div>
    </div>
  );
}
