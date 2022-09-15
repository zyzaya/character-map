import React from 'react';
import SpellSave from './SpellSave';

export default function Spells(props) {
  return (
    <div className="spells">
      <SpellSave
        proficiency={props.proficiency}
        modifier={props.modifier}
      ></SpellSave>
    </div>
  );
}
