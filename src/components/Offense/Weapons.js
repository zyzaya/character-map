import React from 'react';
import Buttons from '../Buttons';
import '../../styles/Weapons.css';
import WeaponSelect from './WeaponSelect';

export default function Weapons(props) {
  return (
    <div className="weapons">
      <div className="weapons_title">
        <Buttons></Buttons>
        Weapons
      </div>
      <div>
        Add Weapon:
        <WeaponSelect />
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
      </table>
    </div>
  );
}
