import React from 'react';
import SpellSave from './SpellSave';
import '../../styles/Spells.css';
import SpellAttack from './SpellAttack';

export default function Spells(props) {
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
