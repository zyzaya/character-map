import React from 'react';
import SpellSave from './SpellSave';
import '../../styles/Spells.css';
import SpellAttack from './SpellAttack';

export default function Spells(props) {
  console.log(props.character_class);
  if (props.character_class === 'monk') {
    return (
      <div className="spells">
        <div className="spells_title">Ki</div>
        <SpellSave
          proficiency={props.proficiency}
          modifier={props.modifier}
        ></SpellSave>
      </div>
    );
  } else if (
    ['barbarian', 'fighter', 'rogue'].includes(props.character_class)
  ) {
    return (
      <div className="spells">
        <div className="spells_title">Spells</div>
      </div>
    );
  } else {
    return (
      <div className="spells">
        <div className="spells_title">Spells</div>
        <SpellAttack
          proficiency={props.proficiency}
          modifier={props.modifier}
        ></SpellAttack>
        <SpellSave
          proficiency={props.proficiency}
          modifier={props.modifier}
        ></SpellSave>
      </div>
    );
  }
}
