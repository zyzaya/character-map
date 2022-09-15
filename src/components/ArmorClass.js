import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Armors } from './Armors';
import '../styles/ArmorClass.css';

export default function ArmorClass(props) {
  const [ac, setAC] = useState(10);
  const [armor, setArmor] = useState('none');
  const [shield, setShield] = useState(false);

  useEffect(() => {
    let val = 0;
    let equiped = Armors[armor];
    if (equiped === undefined) equiped = Armors.light[armor];
    if (equiped === undefined) equiped = Armors.medium[armor];
    if (equiped === undefined) equiped = Armors.heavy[armor];

    val = equiped.base;
    if (equiped.dex !== undefined) {
      if (equiped.dex === true || props.dexterity_modifier < equiped.dex)
        val += props.dexterity_modifier;
      else val += equiped.dex;
    }

    if (shield) val += 2;

    setAC(val);
  }, [armor, shield, props.dexterity_modifier]);

  function onArmorChange(e) {
    setArmor(e.target.value);
  }

  function onShieldChange(e) {
    setShield(e.target.checked);
  }

  return (
    <div className="armor_class">
      <div className="armor_title">Armor Class</div>
      <select name="armor" onChange={onArmorChange}>
        <option value="none">{Armors.none.name}</option>
        <optgroup label="Light Armor">
          {Object.keys(Armors.light).map((k) => {
            return (
              <option value={k} key={k}>
                {Armors.light[k].name}
              </option>
            );
          })}
        </optgroup>
        <optgroup label="Medium Armor">
          {Object.keys(Armors.medium).map((k) => {
            return (
              <option value={k} key={k}>
                {Armors.medium[k].name}
              </option>
            );
          })}
        </optgroup>
        <optgroup label="Heavy Armor">
          {Object.keys(Armors.heavy).map((k) => {
            return (
              <option value={k} key={k}>
                {Armors.heavy[k].name}
              </option>
            );
          })}
        </optgroup>
      </select>
      <div className="shield">
        <label htmlFor="shield_input">Shield (+2 AC)</label>
        <input
          type="checkbox"
          name="shield"
          id="shieldinput"
          className="shield_input"
          onChange={onShieldChange}
        />
      </div>
      <div className="armor_output">{ac}</div>
    </div>
  );
}
