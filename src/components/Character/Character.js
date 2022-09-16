import React from 'react';
import Class from './Class';
import Level from './Level';
import '../../styles/Character.css';

export default function Character(props) {
  return (
    <div className="character">
      <Class onChange={props.onClassChange} value={props.class}></Class>
      <Level onChange={props.onLevelChange} value={props.level}></Level>
    </div>
  );
}
