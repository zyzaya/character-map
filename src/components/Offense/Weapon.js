import React from 'react';
import useStatistic from '../../hooks/useStatistic';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import WeaponProperty from './WeaponProperty';

export default function Weapon(props) {
  const windowDimensions = useWindowDimensions();
  let to_hit_modifier;
  let damage;
  let modifier;
  let weapon_type;

  function setModifier(source) {
    if (source === 'dexterity') {
      to_hit_modifier = props.dexterity_modifier;
      damage = props.dexterity_modifier;
      modifier = 'dexterity';
    } else if (source === 'strength') {
      to_hit_modifier = props.strength_modifier;
      damage = props.strength_modifier;
      modifier = 'strength';
    }
  }

  if (props.weapon.properties.includes('finesse')) {
    if (props.dexterity_modifier > props.strength_modifier)
      setModifier('dexterity');
    else setModifier('strength');
    weapon_type = 'finesse_weapon';
  } else if (props.weapon.melee) {
    setModifier('strength');
    weapon_type = 'melee_weapon';
  } else {
    setModifier('dexterity');
    weapon_type = 'range_weapon';
  }

  let to_hit = to_hit_modifier + props.proficiency;

  const [visual, setVisual] = useStatistic(weapon_type);

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <tr className={`weapon ${visual}`}>
      <td className="remove_weapon">
        <button className="small_button" onClick={props.onRemove}>
          X
        </button>
      </td>
      <td onClick={toggleVisual}>{props.weapon.name}</td>
      <td onClick={toggleVisual}>
        <div className="to_hit">{`+${to_hit} to hit`}</div>
        {windowDimensions.width > 450 && (
          <div className="to_hit_calculation">{`${props.proficiency} (proficiency) + ${to_hit_modifier} (${modifier} modifier)`}</div>
        )}
      </td>
      <td onClick={toggleVisual}>
        <div className="damage">
          {`${props.weapon.damage} + ${damage}`}
          {windowDimensions.width > 450 ? (
            <span className="damage_calculation">{` (${modifier} modifier) `}</span>
          ) : (
            ' '
          )}
          {props.weapon.damage_type}
        </div>
      </td>
      <td>
        {props.weapon.properties.map((p, i) => {
          return (
            <WeaponProperty
              name={p}
              key={i}
              last={i === props.weapon.properties.length - 1}
            />
          );
        })}
      </td>
    </tr>
  );
}
