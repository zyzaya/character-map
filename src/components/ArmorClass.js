import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useStatistic from '../hooks/useStatistic';
import { Armors } from '../info/Armors';
import '../styles/ArmorClass.css';
import Buttons from './Buttons';

export default function ArmorClass(props) {
  const [ac, setAC] = useState(10);
  const [armor, setArmor] = useState('none');
  const [armor_calc, setArmorCalc] = useState('');
  const [shield, setShield] = useState(false);
  const [visual, setVisual] = useStatistic('armor_class');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  useEffect(() => {
    let val = 0;
    let equiped = Armors[armor];
    if (equiped === undefined) equiped = Armors.light[armor];
    if (equiped === undefined) equiped = Armors.medium[armor];
    if (equiped === undefined) equiped = Armors.heavy[armor];
    val = equiped.base;
    let dex_addition = '';

    if (equiped.dex !== undefined) {
      if (equiped.dex === true) {
        dex_addition = ` \n+ ${props.dexterity_modifier} (dexterity modifier)`;
        val += props.dexterity_modifier;
      } else if (props.dexterity_modifier <= equiped.dex) {
        dex_addition = ` \n+ ${props.dexterity_modifier} (dexterity modifier, max ${equiped.dex})`;
        val += props.dexterity_modifier;
      } else if (props.dexterity_modifier > equiped.dex) {
        dex_addition = ` \n+ ${equiped.dex} (dexterity modifier, max ${equiped.dex})`;
        val += equiped.dex;
      }
    }

    if (shield) val += 2;
    let calc = `${equiped.base} (${equiped.name})${dex_addition}${
      shield ? ' \n+ 2 (shield) ' : ''
    }`;
    setArmorCalc(calc);
    setAC(val);
  }, [armor, shield, props.dexterity_modifier, armor_calc]);

  function onArmorChange(e) {
    setArmor(e.target.value);
  }

  function onShieldChange(e) {
    setShield(e.target.checked);
  }

  return (
    <div className={`armor_class ${visual}`}>
      <div className="armor_title" onClick={toggleVisual}>
        <Buttons name="armor_class" />
        Armor Class
      </div>
      <div className="equipped_armor">
        <Buttons name="armor" />
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
              let min_str = Armors.heavy[k].strength_min;
              return (
                <option
                  value={k}
                  key={k}
                  disabled={min_str !== undefined && props.strength < min_str}
                >
                  {Armors.heavy[k].name}
                </option>
              );
            })}
          </optgroup>
        </select>
      </div>
      <div className="shield">
        <Buttons name="shield" />
        <label htmlFor="shield_input" onClick={toggleVisual}>
          Shield (+2 AC)
        </label>
        <input
          type="checkbox"
          name="shield"
          id="shieldinput"
          className="shield_input"
          onChange={onShieldChange}
        />
      </div>
      <div className="armor_output" onClick={toggleVisual}>
        {ac}
      </div>
      <div className="armor_calculation" onClick={toggleVisual}>
        {armor_calc}
      </div>
    </div>
  );
}
