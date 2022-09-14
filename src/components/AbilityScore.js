import React, { useState } from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function AbilityScore(props) {
  const [value, setValue] = useState(10);

  function editValue(e) {
    setValue(e.target.value);
    props.onChange(e.target.value);
  }

  return (
    <div className="ability_score">
      <AdditionalInfo></AdditionalInfo>
      <CycleArrow></CycleArrow>
      <label htmlFor={`${props.name}_mod`}>{props.name}</label>
      <input
        type="number"
        id={`${props.name}_mod`}
        min="1"
        max="30"
        value={value}
        onChange={editValue}
      />
    </div>
  );
}
