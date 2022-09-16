import React, { useState } from 'react';
import useStatistic from '../hooks/useStatistic';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function Skill(props) {
  const [proficient, setProficient] = useState(false);
  const [statistic, setStatistic] = useStatistic('athletics');

  function toggleVisual(e) {
    e.preventDefault();
    setStatistic(statistic === 'focused' ? 'none' : 'focused');
  }

  function editProficient(e) {
    setProficient(e.target.checked);
  }

  let value = parseInt(props.modifier);
  if (proficient) value += props.proficiency;
  let displayValue = `${value >= 0 ? `+${value}` : value}`;

  let displayName = props.name[0].toUpperCase() + props.name.substring(1);

  return (
    <div className="skill" onClick={toggleVisual}>
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
        {statistic}
      </div>
      <label htmlFor={`${props.name}_skill_input`}>
        <div className="skill_title">{displayName}</div>
        <input
          type="checkbox"
          id={`${props.name}_skill_input`}
          value={proficient}
          onChange={editProficient}
        />
        <div className="skill_value">{displayValue}</div>
      </label>
    </div>
  );
}
