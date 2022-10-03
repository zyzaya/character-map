import React from 'react';
import useStatistic from '../../hooks/useStatistic';

export default function Weapon(props) {
  const [visual, setVisual] = useStatistic(props.weapon_type);

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  let to_hit_modifier = props.dexterity_modifier;
  let damage = props.dexterity_modifier;
  let modifier = 'dexterity';
  if (
    props.weapon.melee ||
    (props.weapon.properties.includes('finesse') &&
      props.strength_modifier > props.dexterity_modifier)
  ) {
    to_hit_modifier = props.strength_modifier;
    damage = props.strength_modifier;
    modifier = 'strength';
  }

  let to_hit = to_hit_modifier + props.proficiency;

  return (
    <tr className="weapon">
      <td>{props.weapon.name}</td>
      <td>
        <div className="to_hit">{`+${to_hit} to hit`}</div>
        <div className="to_hit_calculation">{`${props.proficiency} (proficiency) + ${to_hit_modifier} (${modifier} modifier)`}</div>
      </td>
      <td>
        <div className="damage">
          {`${props.weapon.damage} + ${damage}`}
          <span className="damage_calculation">{` (${modifier} modifier) `}</span>
          {props.weapon.damage_type}
        </div>
      </td>
      <td>{props.weapon.properties.join(', ')}</td>
    </tr>
  );
}
