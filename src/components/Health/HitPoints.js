import React, { useEffect, useState } from 'react';
import Buttons from '../Buttons';
import '../../styles/HitPoints.css';
import useStatistic from '../../hooks/useStatistic';

export default function HitDice(props) {
  const [visual, setVisual] = useStatistic('hit_points');
  const [hitpoints_calc, setHitPointsCalc] = useState('');

  useEffect(() => {
    // 8 (hit dice size) + c (constitution modifier)
    // + L (levels after first) * (5 + constitution modifier)
    let output = `${props.size} (hit dice) + ${props.constitution_modifier} (constitution modifier)`;
    if (props.level > 1) {
      output += `\n+ ${props.level - 1} (levels after first) * (${
        props.size / 2 + 1
      } + ${props.constitution_modifier} (constitution modifier)`;
    }
    setHitPointsCalc(output);
  }, [props.level, props.size, props.constitution_modifier, hitpoints_calc]);

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
      <div className="hitpoints_calculation">{hitpoints_calc}</div>
    </div>
  );
}
