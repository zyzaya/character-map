import React, { useState } from 'react';
import AbilitySection from './AbilitySection';
import Proficiency from './Proficiency';
import SkillSection from './SkillSection';

export default function Sheet(props) {
  const [proficiency, setProficiency] = useState(2);

  function handleProficiencyChange(p) {
    setProficiency(parseInt(p));
  }

  return (
    <div className="sheet">
      <Proficiency
        value={proficiency}
        onChange={handleProficiencyChange}
      ></Proficiency>
      <AbilitySection proficiency={proficiency}></AbilitySection>
      <SkillSection
        proficiency={proficiency}
        strength_modifier={2}
        dexterity_modifier={2}
        constitution_modifier={2}
        intelligence_modifier={2}
        wisdom_modifier={2}
        charisma_modifier={2}
      ></SkillSection>
    </div>
  );
}
