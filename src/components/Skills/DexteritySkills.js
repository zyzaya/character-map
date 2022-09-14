import React from 'react';
import Skill from '../Skill';
import '../../styles/Skill.css';

export default function DexteritySkills(props) {
  return (
    <div className="dexterity_skills skills">
      <Skill
        name="athletics"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
    </div>
  );
}
