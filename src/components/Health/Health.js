import React from 'react';
import HitDice from './HitDice';
import HitPoints from './HitPoints';
import '../../styles/Health.css';

export default function Health(props) {
  return (
    <div className="health">
      <HitDice level={props.level} size={props.die_size}></HitDice>
      <HitPoints
        level={props.level}
        size={props.die_size}
        constitution_modifier={props.constitution_modifier}
      ></HitPoints>
    </div>
  );
}
