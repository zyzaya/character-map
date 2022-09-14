import React, { useState } from 'react';
import AbilityModifier from './AbilityModifier';
import AbilityScore from './AbilityScore';
import SavingThrow from './SavingThrow';

export default function Ability(props) {
  const [score, setScore] = useState(10);

  function modifier() {
    return Math.floor((score - 10) / 2);
  }

  function handleProficiencyChange(prof) {
    console.log('unimplemented');
  }

  return (
    <div className={props.name}>
      <AbilityScore
        name={props.name}
        score={score}
        onChange={setScore}
      ></AbilityScore>
      <AbilityModifier name={props.name} score={score}></AbilityModifier>
      <SavingThrow
        name={props.name}
        modifier={modifier()}
        proficiency={props.proficiency}
        onProficiencyChanged={handleProficiencyChange}
      ></SavingThrow>
    </div>
  );
}
