import React from 'react';
import ArmorClass from './ArmorClass';
import Initiative from './Initiative';
import Speed from './Speed';

export default function ArmorInitiativeSpeed(props) {
  return (
    <div className="armor_initiative_speed">
      <ArmorClass
        dexterity_modifier={props.dexterity_modifier}
        strength={props.strength_modifier}
      ></ArmorClass>
      <Initiative dexterity_modifier={props.dexterity_modifier}></Initiative>
      <Speed value={props.speed}></Speed>
    </div>
  );
}
