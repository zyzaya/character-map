import React, { useState } from 'react';
import Buttons from '../Buttons';
import '../../styles/Weapons.css';
import WeaponSelect from './WeaponSelect';
import { Weapons as WeaponData } from '../../info/Weapons';
import Weapon from './Weapon';

export default function Weapons(props) {
  const [weapon_list, setWeaponList] = useState([]);

  function addWeapon(weapon) {
    let new_list = weapon_list.slice();
    if (new_list.indexOf(weapon) === -1) new_list.push(weapon);
    setWeaponList(new_list);
  }

  function handleWeaponSelect(value) {
    console.log(value);
    addWeapon(value);
  }

  return (
    <div className="weapons">
      <div className="weapons_title">
        <Buttons></Buttons>
        Weapons
      </div>
      <div>
        Add Weapon:
        <WeaponSelect onWeaponSelect={handleWeaponSelect} />
      </div>
      <table className="weapons_table">
        <thead>
          <tr>
            <td>Name</td>
            <td>To hit</td>
            <td>damage</td>
            <td>type</td>
            <td>properties</td>
          </tr>
        </thead>
        <tbody>
          {weapon_list
            .filter((v) => WeaponData.simple_melee[v] !== undefined)
            .map((v, i) => {
              let weapon = WeaponData.simple_melee[v];
              return (
                <Weapon
                  proficiency={props.proficiency}
                  strength_modifier={props.strength_modifier}
                  dexterity_modifier={props.dexterity_modifier}
                  weapon={weapon}
                  key={i}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
