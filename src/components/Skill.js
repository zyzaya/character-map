import React, { useState } from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function Skill(props) {
  const [proficient, setProficient] = useState(false);

  function editProficient(e) {
    setProficient(e.target.checked);
    props.onProficiencyChanged(e.target.checked);
  }

  let value = parseInt(props.modifier);
  if (proficient) value += props.proficiency;
  let displayValue = `${value >= 0 ? `+${value}` : value}`;

  let displayName = props.name[0].toUpperCase() + props.name.substring(1);

  return (
    <div className="skill">
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
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
