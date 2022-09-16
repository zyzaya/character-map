import React from 'react';
import Class from './Class';
import Level from './Level';

export default function Character(props) {
  return (
    <div className="character">
      <Class onChange={props.onClassChange}></Class>
      <Level onChange={props.onLevelChange}></Level>
    </div>
  );
}
