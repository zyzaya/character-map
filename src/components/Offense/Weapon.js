import React from 'react';

export default function Weapon(props) {
  return (
    <div className="weapon">
      <div className="weapon_title">{props.name}</div>
      <div className="tohit">
        {`+${props.modifier + props.proficiency} to hit`}
      </div>
      <div className="damage">
        {`${props.dice_count}d${props.dice_size} + ${props.modifier}`}
      </div>
    </div>
  );
}
