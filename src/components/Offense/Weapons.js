import React from 'react';
import Buttons from '../Buttons';
import Weapon from './Weapon';
import '../../styles/Weapons.css';

export default function Weapons(props) {
  return (
    <div className="weapons">
      <div className="weapons_title">
        <Buttons></Buttons>
        Weapons
      </div>
      <Weapon
        name="Greatsword"
        weapon_type="melee_weapon"
        modifier={props.strength_modifier}
        proficiency={props.proficiency}
        dice_count={2}
        dice_size={6}
        damage_type="slashing"
      ></Weapon>
      <Weapon
        name="Longbow"
        weapon_type="range_weapon"
        modifier={props.dexterity_modifier}
        proficiency={props.proficiency}
        dice_count={1}
        dice_size={6}
        damage_type="piercing"
      ></Weapon>
      <Weapon
        name="Rapier"
        weapon_type="finesse_weapon"
        modifier={Math.max(props.dexterity_modifier, props.strength_modifier)}
        proficiency={props.proficiency}
        dice_count={1}
        dice_size={8}
        damage_type="piercing"
      ></Weapon>
    </div>
  );
}
