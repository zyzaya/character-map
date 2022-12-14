import React from 'react';
import Weapons from './Weapons';
import Spells from './Spells';
import '../../styles/Offense.css';

export default function Offense(props) {
  return (
    <div className="offense">
      <Weapons
        proficiency={props.proficiency}
        strength_modifier={props.strength_modifier}
        dexterity_modifier={props.dexterity_modifier}
      ></Weapons>
      <Spells
        proficiency={props.proficiency}
        modifier={props.spell_modifier}
        character_class={props.character_class}
      ></Spells>
    </div>
  );
}
