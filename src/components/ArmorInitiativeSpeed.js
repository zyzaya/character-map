import React, { useState } from 'react';
import ArmorClass from './ArmorClass';
import Initiative from './Initiative';
import Speed from './Speed';
import { Armors } from '../info/Armors';
import '../styles/ArmorInitiativeSpeed.css';
import { useEffect } from 'react';

export default function ArmorInitiativeSpeed(props) {
  let [speed, setSpeed] = useState(props.speed);
  let [armor, setArmor] = useState(undefined);

  useEffect(() => {
    if (
      armor !== undefined &&
      armor.strength_min !== undefined &&
      props.strength_modifier < armor.strength_min
    ) {
      setSpeed((prev) => props.speed - 10);
    } else {
      setSpeed((prev) => props.speed);
    }
  }, [props.strength_modifier, armor, props.speed]);

  function handleArmorChange(a) {
    setArmor(Armors.heavy[a]);
  }

  return (
    <div className="armor_initiative_speed">
      <ArmorClass
        dexterity_modifier={props.dexterity_modifier}
        strength={props.strength}
        onArmorChange={handleArmorChange}
      ></ArmorClass>
      <Initiative dexterity_modifier={props.dexterity_modifier}></Initiative>
      <Speed value={speed}></Speed>
    </div>
  );
}
