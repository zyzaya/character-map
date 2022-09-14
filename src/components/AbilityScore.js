import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function AbilityScore(props) {
  function editValue(e) {
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
        value={props.value}
        onChange={editValue}
      />
    </div>
  );
}
