import React from 'react';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';

export default function SpellSave(props) {
  return (
    <div className="spell_save">
      <div className="spell_save_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Spell Save DC
      </div>
      <div className="spell_save_output">
        {8 + props.modifier + props.proficiency}
      </div>
    </div>
  );
}
