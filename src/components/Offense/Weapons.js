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

  function removeWeapon(weapon) {
    let new_list = weapon_list.filter((v) => v !== weapon);
    setWeaponList(new_list);
  }

  function handleWeaponSelect(value) {
    addWeapon(value);
  }

  return (
    <div className="weapons">
      <div className="weapons_header">
        <div className="weapons_title">
          <Buttons name="weapons" />
          Weapons
        </div>
        <div className="add_weapons">
          Add Weapon:
          <WeaponSelect onWeaponSelect={handleWeaponSelect} />
        </div>
      </div>
      <div className="weapon_table_title">Simple Melee Weapons</div>
      <table className="simple_melee none">
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
                  onRemove={() => removeWeapon(v)}
                  key={i}
                />
              );
            })}
        </tbody>
      </table>
      <div className="weapon_table_title">Simple Ranged Weapons</div>
      <table className="simple_range">
        <tbody>
          {weapon_list
            .filter((v) => WeaponData.simple_ranged[v] !== undefined)
            .map((v, i) => {
              let weapon = WeaponData.simple_ranged[v];
              return (
                <Weapon
                  proficiency={props.proficiency}
                  strength_modifier={props.strength_modifier}
                  dexterity_modifier={props.dexterity_modifier}
                  weapon={weapon}
                  onRemove={() => removeWeapon(v)}
                  key={i}
                />
              );
            })}
        </tbody>
      </table>
      <div className="weapon_table_title">Martial Melee Weapons</div>
      <table className="martial_melee">
        <tbody>
          {weapon_list
            .filter((v) => WeaponData.martial_melee[v] !== undefined)
            .map((v, i) => {
              let weapon = WeaponData.martial_melee[v];
              return (
                <Weapon
                  proficiency={props.proficiency}
                  strength_modifier={props.strength_modifier}
                  dexterity_modifier={props.dexterity_modifier}
                  weapon={weapon}
                  onRemove={() => removeWeapon(v)}
                  key={i}
                />
              );
            })}
        </tbody>
      </table>
      <div className="weapon_table_title">Martial Ranged Weapons</div>
      <table className="martial_range">
        <tbody>
          {weapon_list
            .filter((v) => WeaponData.martial_range[v] !== undefined)
            .map((v, i) => {
              let weapon = WeaponData.martial_range[v];
              return (
                <Weapon
                  proficiency={props.proficiency}
                  strength_modifier={props.strength_modifier}
                  dexterity_modifier={props.dexterity_modifier}
                  weapon={weapon}
                  onRemove={() => removeWeapon(v)}
                  key={i}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
