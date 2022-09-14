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

  let value = props.modifier;
  if (proficient) value += props.proficiency;
  let displayValue = `${value >= 0 ? `+${value}` : value}`;

  return (
    <div className={`${props.name}_save`}>
      <AdditionalInfo></AdditionalInfo>
      <CycleArrow></CycleArrow>
      <label
        htmlFor={`${props.name}_save_input`}
      >{`${props.name} saving throw${displayValue}`}</label>
      <input
        type="checkbox"
        id={`${props.name}_save_input`}
        value={proficient}
        onChange={editProficient}
      />
    </div>
  );
}
