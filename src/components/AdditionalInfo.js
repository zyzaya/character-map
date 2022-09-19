import React from 'react';
import '../styles/Buttons.css';
import { setVisible, setValue } from '../state/infoSlice';
import { useDispatch } from 'react-redux';

export default function AdditionalInfo(props) {
  const dispatch = useDispatch();

  function handleClick(e) {
    dispatch(setValue(props.name));
    dispatch(setVisible(true));
  }

  return (
    <button className="info_button small_button" onClick={handleClick}>
      ?
    </button>
  );
}
