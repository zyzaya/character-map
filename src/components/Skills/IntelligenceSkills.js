import React from 'react';
import Skill from '../Skill';
import '../../styles/Skill.css';

export default function IntelligenceSkills(props) {
  return (
    <div className="intelligence_skills skills">
      <Skill
        name="athletics"
        modifier={props.modifier}
        proficiency={props.proficiency}
      ></Skill>
    </div>
  );
}
