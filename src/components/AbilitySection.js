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
        <Ability
          name="strength"
          proficiency={props.proficiency}
          score={props.strength}
          onChange={(v) => props.onScoreChange('strength', v)}
        ></Ability>
        <Ability
          name="dexterity"
          proficiency={props.proficiency}
          score={props.dexterity}
          onChange={(v) => props.onScoreChange('dexterity', v)}
        ></Ability>
        <Ability
          name="constitution"
          proficiency={props.proficiency}
          score={props.constitution}
          onChange={(v) => props.onScoreChange('constitution', v)}
        ></Ability>
        <Ability
          name="intelligence"
          proficiency={props.proficiency}
          score={props.intelligence}
          onChange={(v) => props.onScoreChange('intelligence', v)}
        ></Ability>
        <Ability
          name="wisdom"
          proficiency={props.proficiency}
          score={props.wisdom}
          onChange={(v) => props.onScoreChange('wisdom', v)}
        ></Ability>
        <Ability
          name="charisma"
          proficiency={props.proficiency}
          score={props.charisma}
          onChange={(v) => props.onScoreChange('charisma', v)}
        ></Ability>
      </div>
    </div>
  );
}
