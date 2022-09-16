import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';
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
    <div className={`score ${visual}`} onClick={toggleVisual}>
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <label htmlFor={`${props.name}_score_input`}>{displayName}</label>
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
