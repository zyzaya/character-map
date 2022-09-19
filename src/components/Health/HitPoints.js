import React from 'react';
import Buttons from '../Buttons';
import '../../styles/HitPoints.css';
import useStatistic from '../../hooks/useStatistic';

export default function HitDice(props) {
  const [visual, setVisual] = useStatistic('hit_points');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  let value = props.size + props.constitution_modifier;
  value +=
    (props.level - 1) * (props.size / 2 + 1 + props.constitution_modifier);

  return (
    <div className={`hitpoints ${visual}`} onClick={toggleVisual}>
      <div className="hitpoints_title">
        <Buttons></Buttons>
        Hit Point Maximum
      </div>
      <div className="hitpoints_output">{value}</div>
    </div>
  );
}
