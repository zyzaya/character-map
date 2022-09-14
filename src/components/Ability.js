import React, { useState } from 'react';
import AbilityModifier from './AbilityModifier';
import AbilityScore from './AbilityScore';

export default function Ability(props) {
  const [score, setScore] = useState(10);

  return (
    <div className={props.name}>
      <AbilityScore
        name={props.name}
        score={score}
        onChange={setScore}
      ></AbilityScore>
      <AbilityModifier name={props.name} score={score}></AbilityModifier>
    </div>
  );
}
