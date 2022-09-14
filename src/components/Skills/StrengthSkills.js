import React from 'react';
import Skill from '../Skill';
import '../../styles/Skill.css';

export default function StrengthSkills(props) {
  return (
    <div className="strength_skills skills">
      <Skill
        name="athletics"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
    </div>
  );
}
