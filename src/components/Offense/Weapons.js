import React from 'react';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';
import Weapon from './Weapon';
import '../../styles/Weapons.css';

export default function Weapons(props) {
  return (
    <div className="weapons">
      <div className="weapons_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Weapons
      </div>
      <Weapon
        name="Greatsword"
        modifier={props.strength_modifier}
        proficiency={props.proficiency}
        dice_count={2}
        dice_size={6}
        damage_type="slashing"
      ></Weapon>
      <Weapon
        name="Longbow"
        modifier={props.dexterity_modifier}
        proficiency={props.proficiency}
        dice_count={1}
        dice_size={6}
        damage_type="piercing"
      ></Weapon>
      <Weapon
        name="Rapier"
        modifier={Math.max(props.dexterity_modifier, props.strength_modifier)}
        proficiency={props.proficiency}
        dice_count={1}
        dice_size={8}
        damage_type="piercing"
      ></Weapon>
    </div>
  );
}
