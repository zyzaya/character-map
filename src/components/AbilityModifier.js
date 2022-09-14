import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function AbilityModifier(props) {
  let value = Math.floor((props.score - 10) / 2);
  let displayValue = `${value >= 0 ? '+' : ''}${value}`;
  return (
    <div className="ability_modifier">
      <AdditionalInfo></AdditionalInfo>
      <CycleArrow></CycleArrow>
      <div className={`${props.name}_mod`}>{displayValue}</div>
    </div>
  );
}
