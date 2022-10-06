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
import { useEffect } from 'react';

export default function Sheet(props) {
  const [character_class, setClass] = useState('artificer');
  const [level, setLevel] = useState(1);

  const [proficiency, setProficiency] = useState(2);

  const [strength, setStrength] = useState(10);
  const [dexterity, setDexterity] = useState(10);
  const [constitution, setConstitution] = useState(10);
  const [intelligence, setIntelligence] = useState(10);
  const [wisdom, setWisdom] = useState(10);
  const [charisma, setCharisma] = useState(10);

  const [spell_modifier, setSpellModifier] = useState(0);

  useEffect(() => {
    if (['artificer', 'wizard'].includes(character_class)) {
      setSpellModifier(modifier(intelligence));
    } else if (
      ['druid', 'cleric', 'ranger', 'monk'].includes(character_class)
    ) {
      setSpellModifier(modifier(wisdom));
    } else if (
      ['bard', 'paladin', 'sorcerer', 'warlock'].includes(character_class)
    ) {
      setSpellModifier(modifier(charisma));
    }
  }, [character_class, intelligence, wisdom, charisma]);

  useEffect(() => {
    setProficiency(Math.floor((level - 1) / 4 + 2));
  }, [level]);

  function modifier(v) {
    return Math.floor((v - 10) / 2);
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
        class={character_class}
        onClassChange={setClass}
        level={level}
        onLevelChange={setLevel}
      ></Character>
      <div className="sheet_left">
        <Proficiency value={proficiency}></Proficiency>
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
            strength={strength}
            dexterity_modifier={modifier(dexterity)}
            strength_modifier={modifier(strength)}
            speed={30}
          ></ArmorInitiativeSpeed>
          <Health
            level={level}
            die_size={Classes[character_class].hit_die}
            constitution_modifier={modifier(constitution)}
          ></Health>
        </div>
        <Offense
          proficiency={proficiency}
          strength_modifier={modifier(strength)}
          dexterity_modifier={modifier(dexterity)}
          character_class={character_class}
          spell_modifier={spell_modifier}
        ></Offense>
      </div>
    </div>
  );
}
