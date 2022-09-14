import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function AbilityModifier(props) {
  let value = Math.floor((props.score - 10) / 2);
  let displayValue = `${value >= 0 ? `+${value}` : value}`;
  return (
    <div className="ability_modifier">
      <AdditionalInfo></AdditionalInfo>
      <CycleArrow></CycleArrow>
      <div className="modifier_title">Ability Modifier</div>
      <div className="modifier_value">{displayValue}</div>
    </div>
  );
}
