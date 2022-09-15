import React from 'react';
import Skill from '../Skill';
import '../../styles/Skill.css';

export default function CharismaSkills(props) {
  return (
    <div className="charisma_skills skill_list">
      <Skill
        name="deception"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="intimidation"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="performance"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
      <Skill
        name="persuasion"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
    </div>
  );
}
