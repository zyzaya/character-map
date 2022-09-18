import React from 'react';
import useStatistic from '../../hooks/useStatistic';

export default function Weapon(props) {
  const [visual, setVisual] = useStatistic(props.weapon_type);

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`weapon ${visual}`} onClick={toggleVisual}>
      <div className="weapon_title">{props.name}</div>
      <div className="tohit">
        {'+ '}
        <span className="attack_modifier">
          {props.modifier + props.proficiency}
        </span>
        {' to hit.'}
      </div>
      <div className="damage">
        <span className="dice_count">{props.dice_count}</span>
        {' d '}
        <span className="dice_size">{props.dice_size}</span>{' '}
        <span className="damage_type">{props.damage_type}</span>
        {' damage on hit.'}
      </div>
    </div>
  );
}
