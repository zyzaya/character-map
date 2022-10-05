import React from 'react';
import useStatistic from '../../hooks/useStatistic';
import Buttons from '../Buttons';

export default function SpellSave(props) {
  const [visual, setVisual] = useStatistic('spell_save');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`spell_save ${visual}`} onClick={toggleVisual}>
      <div className="spell_save_title">
        <Buttons name="spell_save" />
        {`${props.character_class === 'monk' ? 'Ki' : 'Spell'}`} Save DC
      </div>
      <div className="spell_save_output">
        <span className="spell_save_value">
          {8 + props.modifier + props.proficiency}
        </span>
      </div>
      <div className="spell_save_calculation">
        {`8 + ${props.proficiency} (proficiency) + ${props.modifier} (${props.modifier_name})`}
      </div>
    </div>
  );
}
