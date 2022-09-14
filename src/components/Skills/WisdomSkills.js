import React from 'react';
import Skill from '../Skill';
import '../../styles/Skill.css';

export default function WisdomSkills(props) {
  return (
    <div className="wisdom_skills skills">
      <Skill
        name="animal handling"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="insight"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="medicine"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="perception"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="survival"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
    </div>
  );
}
