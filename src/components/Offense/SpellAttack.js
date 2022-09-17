import React from 'react';
import useStatistic from '../../hooks/useStatistic';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';

export default function SpellAttack(props) {
  const [visual, setVisual] = useStatistic('spell_attack');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`spell_attack ${visual}`} onClick={toggleVisual}>
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
