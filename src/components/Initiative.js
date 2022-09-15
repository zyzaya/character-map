import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function Initiative(props) {
  let value = parseInt(props.dexterity_modifier);
  let displayValue = `${value >= 0 ? `+${value}` : value}`;

  return (
    <div className="initiative">
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <div className="initiative_title">Initiative</div>
      <div className="initiative_output">{displayValue}</div>
    </div>
  );
}
