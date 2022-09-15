import React from 'react';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';
import '../../styles/HitDice.css';

export default function HitDice(props) {
  return (
    <div className="hitdice">
      <div className="hitdice_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Hit Dice
      </div>
      <div className="hitdice_output">{`${props.level}d${props.size}`}</div>
    </div>
  );
}
