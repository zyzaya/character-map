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
        <Buttons></Buttons>
        {`${props.character_class === 'monk' ? 'Ki' : 'Spell'}`} Save DC
      </div>
      <div className="spell_save_output">
        {8 + props.modifier + props.proficiency}
      </div>
    </div>
  );
}
