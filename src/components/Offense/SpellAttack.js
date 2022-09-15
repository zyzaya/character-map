import React from 'react';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';

export default function SpellAttack(props) {
  return (
    <div className="spell_attack">
      <div className="spell_attack_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Spell Attack Bonus
      </div>
      <div className="spell_attack_output">
        {'+ '}
        <span className="spell_attack_modifier">
          {props.modifier + props.proficiency}
        </span>
      </div>
    </div>
  );
}
