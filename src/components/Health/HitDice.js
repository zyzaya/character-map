import React from 'react';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';
import '../../styles/HitDice.css';
import useStatistic from '../../hooks/useStatistic';

export default function HitDice(props) {
  const [visual, setVisual] = useStatistic('hit_dice');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`hitdice ${visual}`} onClick={toggleVisual}>
      <div className="hitdice_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Hit Dice
      </div>
      <div className="hitdice_output">{`${props.level}d${props.size}`}</div>
    </div>
  );
}
