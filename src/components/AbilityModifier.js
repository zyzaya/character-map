import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function AbilityModifier(props) {
  let value = Math.floor((props.score - 10) / 2);
  let displayValue = `${value >= 0 ? '+' : '-'}${value}`;
  return (
    <div className="ability_modifier">
      <AdditionalInfo></AdditionalInfo>
      <CycleArrow></CycleArrow>
      {/* <label htmlFor={`${props.name}_mod`}>{props.name}</label>
      <input type="number" id={`${props.name_mod}`} /> */}
      <div className={`${props.name}_mod`}>{displayValue}</div>
    </div>
  );
}
