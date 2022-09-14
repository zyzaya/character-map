import React from 'react';
import { useState } from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function SavingThrow(props) {
  const [proficient, setProficient] = useState(false);

  function editProficient(e) {
    setProficient(e.target.checked);
    props.onProficiencyChanged(e.target.checked);
  }

  let value = parseInt(props.modifier);
  if (proficient) value += props.proficiency;
  let displayValue = `${value >= 0 ? `+${value}` : value}`;

  return (
    <div className="save">
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <label htmlFor={`${props.name}_save_input`}>
        <div className="save_title">Saving Throw</div>
        <input
          type="checkbox"
          id={`${props.name}_save_input`}
          value={proficient}
          onChange={editProficient}
        />
        <div className="save_value">{displayValue}</div>
      </label>
    </div>
  );
}
