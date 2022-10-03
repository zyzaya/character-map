import React from 'react';
import { Weapons } from '../../info/Weapons';

export default function WeaponSelect(props) {
  function onWeaponChange(e) {
    props.onWeaponSelect(e.target.value);
  }

  return (
    <select name="weapon_select" id="weapon_select" onChange={onWeaponChange}>
      <optgroup label="Simple Melee Weapons">
        {Object.keys(Weapons.simple_melee).map((k) => {
          return (
            <option value={k} key={k}>
              {Weapons.simple_melee[k].name}
            </option>
          );
        })}
      </optgroup>
      <optgroup label="Simple Ranged Weapons">
        {Object.keys(Weapons.simple_ranged).map((k) => {
          return (
            <option value={k} key={k}>
              {Weapons.simple_ranged[k].name}
            </option>
          );
        })}
      </optgroup>
      <optgroup label="Martial Melee Weapons">
        {Object.keys(Weapons.martial_melee).map((k) => {
          return (
            <option value={k} key={k}>
              {Weapons.martial_melee[k].name}
            </option>
          );
        })}
      </optgroup>
      <optgroup label="Martial Ranged Weapons">
        {Object.keys(Weapons.martial_range).map((k) => {
          return (
            <option value={k} key={k}>
              {Weapons.martial_range[k].name}
            </option>
          );
        })}
      </optgroup>
    </select>
  );
}
