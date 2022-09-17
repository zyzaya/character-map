import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';
import '../styles/Proficiency.css';
import useStatistic from '../hooks/useStatistic';

export default function Proficiency(props) {
  const [visual, setVisual] = useStatistic('proficiency');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`proficiency ${visual}`}>
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <label
        className="proficiency_title"
        htmlFor="proficiency_value"
        onClick={toggleVisual}
      >
        Proficiency Bonus
      </label>
      <input
        id="proficiency_value"
        className="proficiency_value"
        type="number"
        min="2"
        max="6"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
}
