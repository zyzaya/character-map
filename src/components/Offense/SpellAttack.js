import React from 'react';
import useStatistic from '../../hooks/useStatistic';
import Buttons from '../Buttons';

export default function SpellAttack(props) {
  const [visual, setVisual] = useStatistic('spell_attack');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`spell_attack ${visual}`} onClick={toggleVisual}>
      <div className="spell_attack_title">
        <Buttons></Buttons>
        Spell Attack Bonus
      </div>
      <div className="spell_attack_output">
        {'+ '}
        <span className="spell_attack_modifier">
          {props.modifier + props.proficiency}
        </span>
      </div>
      <div className="spell_attack_calculation">
        {`${props.proficiency} (proficiency) + ${props.modifier} (${props.modifier_name})`}
      </div>
    </div>
  );
}
