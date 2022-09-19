import React from 'react';
import { useState } from 'react';
import useStatistic from '../hooks/useStatistic';
import Buttons from './Buttons';

export default function SavingThrow(props) {
  const [proficient, setProficient] = useState(false);
  const [visual, setVisual] = useStatistic(`${props.name}_save`);

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  function editProficient(e) {
    setProficient(e.target.checked);
    props.onProficiencyChanged(e.target.checked);
  }

  let value = parseInt(props.modifier);
  if (proficient) value += props.proficiency;
  let displayValue = `${value >= 0 ? `+${value}` : value}`;

  return (
    <div className={`save ${visual}`}>
      <Buttons></Buttons>
      <label htmlFor={`${props.name}_save_input`}>
        <div className="save_title" onClick={toggleVisual}>
          Saving Throw
        </div>
        <input
          type="checkbox"
          id={`${props.name}_save_input`}
          value={proficient}
          onChange={editProficient}
        />
        <div className="save_value">{displayValue}</div>
      </label>
    </div>
  );
}
