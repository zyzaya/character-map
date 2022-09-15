import React from 'react';
import Weapons from './Weapons';

export default function Offense(props) {
  return (
    <div className="offense">
      <Weapons
        proficiency={props.proficiency}
        strength_modifier={props.strength_modifier}
        dexterity_modifier={props.dexterity_modifier}
      ></Weapons>
    </div>
  );
}
