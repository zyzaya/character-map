import React from 'react';
import Ability from './Ability';
import CycleArrow from './CycleArrow';
import AdditionalInfo from './AdditionalInfo';
import '../styles/AbilitySection.css';

export default function AbilitySection(props) {
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
        <Ability name="strength" proficiency={props.proficiency}></Ability>
        <Ability name="dexterity" proficiency={props.proficiency}></Ability>
        <Ability name="constitution" proficiency={props.proficiency}></Ability>
        <Ability name="intelligence" proficiency={props.proficiency}></Ability>
        <Ability name="wisdom" proficiency={props.proficiency}></Ability>
        <Ability name="charisma" proficiency={props.proficiency}></Ability>
      </div>

      <div className="skill_section_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Skills
      </div>

      <div className="skills"></div>
    </div>
  );
}
