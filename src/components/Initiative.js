import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';
import '../styles/Initiative.css';
import useStatistic from '../hooks/useStatistic';

export default function Initiative(props) {
  const [visual, setVisual] = useStatistic('initiative');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  let value = parseInt(props.dexterity_modifier);
  let displayValue = `${value >= 0 ? `+${value}` : value}`;

  return (
    <div className={`initiative ${visual}`} onClick={toggleVisual}>
      <div className="initiative_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Initiative
      </div>
      <div className="initiative_output">{displayValue}</div>
    </div>
  );
}
