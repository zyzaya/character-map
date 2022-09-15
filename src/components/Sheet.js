import React, { useState } from 'react';
import AbilitySection from './AbilitySection';
import ArmorClass from './ArmorClass';
import Health from './Health/Health';
import Initiative from './Initiative';
import Proficiency from './Proficiency';
import SkillSection from './SkillSection';
import Speed from './Speed';

export default function Sheet(props) {
  const [proficiency, setProficiency] = useState(2);
  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);

  function modifier(v) {
    return Math.floor((v - 10) / 2);
  }

  function handleProficiencyChange(p) {
    setProficiency(parseInt(p));
  }

  function handleScoreChange(name, value) {
    if (name === 'strength') setStrength(value);
    else if (name === 'dexterity') setDexterity(value);
    else if (name === 'constitution') setConstitution(value);
    else if (name === 'intelligence') setIntelligence(value);
    else if (name === 'wisdom') setWisdom(value);
    else if (name === 'charisma') setCharisma(value);
  }

  return (
    <div className="sheet">
      <Proficiency
        value={proficiency}
        onChange={handleProficiencyChange}
      ></Proficiency>
      <AbilitySection
        proficiency={proficiency}
        strength={strength}
        dexterity={dexterity}
        constitution={constitution}
        intelligence={intelligence}
        wisdom={wisdom}
        charisma={charisma}
        onScoreChange={handleScoreChange}
      ></AbilitySection>
      <SkillSection
        proficiency={proficiency}
        strength_modifier={modifier(strength)}
        dexterity_modifier={modifier(dexterity)}
        constitution_modifier={modifier(constitution)}
        intelligence_modifier={modifier(intelligence)}
        wisdom_modifier={modifier(wisdom)}
        charisma_modifier={modifier(charisma)}
      ></SkillSection>
      <div>
        <ArmorClass
          dexterity_modifier={modifier(dexterity)}
          strength={strength}
        ></ArmorClass>
        <Initiative dexterity_modifier={modifier(dexterity)}></Initiative>
        <Speed value="30"></Speed>
      </div>
      <Health
        level={6}
        die_size={12}
        constitution_modifier={modifier(constitution)}
      ></Health>
    </div>
  );
}
