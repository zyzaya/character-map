import React from 'react';
import Skill from '../Skill';
import '../../styles/Skill.css';

export default function ConstitutionSkills(props) {
  return (
    <div className="constitution_skills skills">
      <Skill
        name="athletics"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
    </div>
  );
}
