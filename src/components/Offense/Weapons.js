import React from 'react';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';
import Weapon from './Weapon';

export default function Weapons(props) {
  return (
    <div className="weapons">
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <div className="weapons_title">Weapons</div>
      <Weapon
        name="Greatsword"
        modifier={props.strength_modifier}
        proficiency={props.proficiency}
        dice_count={2}
        dice_size={6}
      ></Weapon>
      <Weapon
        name="Longbow"
        modifier={props.dexterity_modifier}
        proficiency={props.proficiency}
        dice_count={1}
        dice_size={6}
      ></Weapon>
      <Weapon
        name="Rapier"
        modifier={Math.max(props.dexterity_modifier, props.strength_modifier)}
        proficiency={props.proficiency}
        dice_count={1}
        dice_size={8}
      ></Weapon>
    </div>
  );
}
