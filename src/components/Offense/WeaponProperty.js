import React from 'react';
import '../../styles/WeaponProperty.css';
import { setVisible, setValue } from '../../state/infoSlice';
import { useDispatch } from 'react-redux';

export default function WeaponProperty(props) {
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(setValue(props.name));
    dispatch(setVisible(true));
  }

  return (
    <button className="weapon_property">
      <span onClick={handleClick}>{`${props.name}`}</span>
      <span>{`${props.last ? '' : ', '}`}</span>
    </button>
  );
}
