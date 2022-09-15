import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';
// import '../styles/HitDice.css';

export default function HitDice(props) {
  let value = props.size + props.constitution_modifier;
  value +=
    (props.level - 1) * (props.size / 2 + 1 + props.constitution_modifier);

  return (
    <div className="hitpoints">
      <div className="hitpoints_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Hit Point Maximum
      </div>
      <div className="hitpoints_output">{value}</div>
    </div>
  );
}
