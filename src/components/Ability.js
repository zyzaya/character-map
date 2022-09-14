import React from 'react';
import AbilityModifier from './AbilityModifier';
import AbilityScore from './AbilityScore';
import SavingThrow from './SavingThrow';
import '../styles/Ability.css';

export default function Ability(props) {
  function modifier() {
    return Math.floor((props.score - 10) / 2);
  }

  function handleProficiencyChange(prof) {}

  return (
    <div className="ability">
      <AbilityScore
        name={props.name}
        score={props.score}
        onChange={props.onChange}
      ></AbilityScore>
      <AbilityModifier name={props.name} score={props.score}></AbilityModifier>
      <SavingThrow
        name={props.name}
        modifier={modifier()}
        proficiency={props.proficiency}
        onProficiencyChanged={handleProficiencyChange}
      ></SavingThrow>
    </div>
  );
}
