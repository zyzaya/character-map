import React from 'react';
import Buttons from './Buttons';
import useStatistic from '../hooks/useStatistic';

export default function AbilityScore(props) {
  const [visual, setVisual] = useStatistic(`${props.name}_score`);

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  function editValue(e) {
    props.onChange(parseInt(e.target.value));
  }

  let short = props.name.substring(0, 3).toUpperCase();
  let displayName = props.name[0].toUpperCase() + props.name.substring(1);
  displayName += ` (${short})`;

  return (
    <div className={`score ${visual}`}>
      <Buttons></Buttons>
      <label htmlFor={`${props.name}_score_input`} onClick={toggleVisual}>
        {displayName}
      </label>
      <input
        type="number"
        id={`${props.name}_score_input`}
        min="1"
        max="30"
        value={props.score}
        onChange={editValue}
      />
    </div>
  );
}
