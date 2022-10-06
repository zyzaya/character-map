import React from 'react';
import '../../styles/WeaponProperty.css';

export default function WeaponProperty(props) {
  return (
    <button className="weapon_property">
      <span>{`${props.name}`}</span>
      <span>{`${props.last ? '' : ', '}`}</span>
    </button>
  );
}
