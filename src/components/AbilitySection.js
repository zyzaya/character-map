import React, { useState } from 'react';
import Ability from './Ability';
import CycleArrow from './CycleArrow';
import AdditionalInfo from './AdditionalInfo';
import StrengthSkills from './Skills/StrengthSkills';
import '../styles/AbilitySection.css';

export default function AbilitySection(props) {
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);

  function modifier(score) {
    return Math.floor((score - 10) / 2);
  }

  return (
    <div className="ability_section">
      <div className="ability_section_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Ability Scores
      </div>

      <div className="abilities">
        <Ability
          name="strength"
          proficiency={props.proficiency}
          score={strength}
          onChange={setStrength}
        ></Ability>
        <Ability
          name="dexterity"
          proficiency={props.proficiency}
          score={dexterity}
          onChange={setDexterity}
        ></Ability>
        <Ability
          name="constitution"
          proficiency={props.proficiency}
          score={constitution}
          onChange={setConstitution}
        ></Ability>
        <Ability
          name="intelligence"
          proficiency={props.proficiency}
          score={intelligence}
          onChange={setIntelligence}
        ></Ability>
        <Ability
          name="wisdom"
          proficiency={props.proficiency}
          score={wisdom}
          onChange={setWisdom}
        ></Ability>
        <Ability
          name="charisma"
          proficiency={props.proficiency}
          score={charisma}
          onChange={setCharisma}
        ></Ability>
      </div>

      <div className="skill_section_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Skills
      </div>

      <div className="skills_section">
        <StrengthSkills
          proficiency={props.proficiency}
          modifier={modifier(strength)}
        ></StrengthSkills>
      </div>
    </div>
  );
}
