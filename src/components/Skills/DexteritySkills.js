import React from 'react';
import Skill from '../Skill';
import '../../styles/Skill.css';

export default function DexteritySkills(props) {
  return (
    <div className="dexterity_skills skill_list">
      <Skill
        name="acrobatics"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="sleight of hand"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="stealth"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
    </div>
  );
}
