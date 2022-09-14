import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function AbilityScore(props) {
  function editValue(e) {
    props.onChange(e.target.value);
  }

  return (
    <div className={`${props.name}_score`}>
      <AdditionalInfo></AdditionalInfo>
      <CycleArrow></CycleArrow>
      <label htmlFor={`${props.name}_score_input`}>{props.name}</label>
      <input
        type="number"
        id={`${props.name}_score_input`}
        min="1"
        max="30"
        value={props.value}
        onChange={editValue}
      />
    </div>
  );
}
