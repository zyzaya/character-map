import React from 'react';
import useStatistic from '../../hooks/useStatistic';

export default function Weapon(props) {
  const [visual, setVisual] = useStatistic(props.weapon_type);

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  let to_hit = props.dexterity_modifier + props.proficiency;
  let damage = props.dexterity_modifier;
  if (
    props.weapon.melee ||
    (props.weapon.properties.includes('finesse') &&
      props.strength_modifier > props.dexterity_modifier)
  ) {
    to_hit = props.strength_modifier + props.proficiency;
    damage = props.strength_modifier;
  }

  return (
    <tr>
      <td>{props.weapon.name}</td>
      <td>{`+${to_hit} to hit`}</td>
      <td>{`${props.weapon.damage} + ${damage}`}</td>
      <td>{props.weapon.damage_type}</td>
      <td>{props.weapon.properties.join(', ')}</td>
    </tr>
  );
}
