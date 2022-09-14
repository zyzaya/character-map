import React from 'react';
import Ability from './Ability';
import '../styles/AbilitySection.css';

export default function AbilitySection(prop) {
  let proficiency = 2;

  return (
    <div className="ability_section">
      <Ability name="strength" proficiency={proficiency}></Ability>
      <Ability name="dexterity" proficiency={proficiency}></Ability>
      <Ability name="constitution" proficiency={proficiency}></Ability>
      <Ability name="intelligence" proficiency={proficiency}></Ability>
      <Ability name="wisdom" proficiency={proficiency}></Ability>
      <Ability name="charisma" proficiency={proficiency}></Ability>
    </div>
  );
}
