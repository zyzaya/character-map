import React from 'react';
import Buttons from './Buttons';
import StrengthSkills from './Skills/StrengthSkills';
import DexteritySkills from './Skills/DexteritySkills';
import ConstitutionSkills from './Skills/ConstitutionSkills';
import IntelligenceSkills from './Skills/IntelligenceSkills';
import WisdomSkills from './Skills/WisdomSkills';
import CharismaSkills from './Skills/CharismaSkills';
import '../styles/SkillSection.css';

export default function SkillSection(props) {
  return (
    <div className="skills_section">
      <div className="skill_section_title">
        <Buttons name="skills" />
        Skills
      </div>

      <div className="skills">
        <StrengthSkills
          proficiency={props.proficiency}
          modifier={props.strength_modifier}
        ></StrengthSkills>
        <DexteritySkills
          proficiency={props.proficiency}
          modifier={props.dexterity_modifier}
        ></DexteritySkills>
        <ConstitutionSkills
          proficiency={props.proficiency}
          modifier={props.constitution_modifier}
        ></ConstitutionSkills>
        <IntelligenceSkills
          proficiency={props.proficiency}
          modifier={props.intelligence_modifier}
        ></IntelligenceSkills>
        <WisdomSkills
          proficiency={props.proficiency}
          modifier={props.wisdom_modifier}
        ></WisdomSkills>
        <CharismaSkills
          proficiency={props.proficiency}
          modifier={props.charisma_modifier}
        ></CharismaSkills>
      </div>
    </div>
  );
}
