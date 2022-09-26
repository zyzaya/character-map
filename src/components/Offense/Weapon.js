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
        <div className="tohit_info">
          {'+ '}
          <span className="attack_modifier">
            {props.modifier + props.proficiency}
          </span>
          {' to hit.'}
        </div>
        <div className="tohit_calculation">
          {`${props.proficiency} (proficiency) + ${props.modifier} (${props.modifier_name})`}
        </div>
      </div>
      <div className="damage">
        <div className="damage_info">
          <span className="dice_count">{props.dice_count}</span>
          {'d'}
          <span className="dice_size">{props.dice_size}</span>
          {' + '}
          <span className="damage_addition">{props.modifier}</span>
          <span className="damage_calculation">{` (${props.modifier_name}) `}</span>
          <span className="damage_type">{props.damage_type}</span>
          {/* {' damage on hit.'} */}
        </div>
      </div>
      <div className="weapon_properties">{'heavy, two-handed'}</div>
    </div>
  );
}
