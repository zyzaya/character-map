import React, { useState } from 'react';
import AbilitySection from './AbilitySection';
import ArmorInitiativeSpeed from './ArmorInitiativeSpeed';
import Health from './Health/Health';
import Offense from './Offense/Offense';
import Proficiency from './Proficiency';
import SkillSection from './SkillSection';
import '../styles/Sheet.css';
import Character from './Character/Character';
import { Classes } from '../info/Classes';

export default function Sheet(props) {
  const [char_class, setClass] = useState('artificer');
  const [level, setLevel] = useState(1);

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
      <Character
        class={char_class}
        onClassChange={setClass}
        level={level}
        onLevelChange={setLevel}
      ></Character>
      <div className="sheet_left">
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
      </div>
      <div className="sheet_right">
        <div className="misc_stats">
          <ArmorInitiativeSpeed
            strength_modifier={modifier(strength)}
            dexterity_modifier={modifier(dexterity)}
            speed={30}
          ></ArmorInitiativeSpeed>
          <Health
            level={level}
            die_size={Classes[char_class].hit_die}
            constitution_modifier={modifier(constitution)}
          ></Health>
        </div>
        <Offense
          proficiency={proficiency}
          strength_modifier={modifier(strength)}
          dexterity_modifier={modifier(dexterity)}
          spell_modifier={modifier(wisdom)}
        ></Offense>
      </div>
    </div>
  );
}
