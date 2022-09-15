import React from 'react';
import SpellSave from './SpellSave';
import '../../styles/Spells.css';

export default function Spells(props) {
  return (
    <div className="spells">
      <div className="spells_title">Spells</div>
      <SpellSave
        proficiency={props.proficiency}
        modifier={props.modifier}
      ></SpellSave>
    </div>
  );
}
