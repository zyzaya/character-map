import React from 'react';
import Skill from '../Skill';
import '../../styles/Skill.css';

export default function IntelligenceSkills(props) {
  return (
    <div className="intelligence_skills skill_list">
      <Skill
        name="arcana"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="history"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="investigation"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="nature"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="religion"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
    </div>
  );
}
