import React from 'react';

export default function WeaponProperty(props) {
  return (
    <button className="weapon_property">
      {props.name}
      {`${props.last ? '' : ', '}`}{' '}
    </button>
  );
}
