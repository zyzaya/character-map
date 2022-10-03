import React from 'react';
import { Weapons } from '../../info/Weapons';

export default function WeaponSelect(props) {
  return (
    <select name="weapon_select" id="weapon_select">
      <optgroup label="Simple Melee Weapons"></optgroup>
      <optgroup label="Simple Ranged Weapons"></optgroup>
      <optgroup label="Martial Melee Weapons"></optgroup>
      <optgroup label="Martial Ranged Weapons"></optgroup>
    </select>
  );
}
