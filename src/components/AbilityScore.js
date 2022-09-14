import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function AbilityScore(props) {
  function editValue(e) {
    props.onChange(e.target.value);
  }

  let short = props.name.substring(0, 3).toUpperCase();
  let displayName = props.name[0].toUpperCase() + props.name.substring(1);
  displayName += ` (${short})`;

  return (
    <div className={`${props.name}_score`}>
      <AdditionalInfo></AdditionalInfo>
      <CycleArrow></CycleArrow>
      <label htmlFor={`${props.name}_score_input`}>{displayName}</label>
      <input
        type="number"
        id={`${props.name}_score_input`}
        min="1"
        max="30"
        value={props.score}
        onChange={editValue}
      />
    </div>
  );
}
