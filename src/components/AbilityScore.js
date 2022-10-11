import React from 'react';
import Buttons from './Buttons';
import useStatistic from '../hooks/useStatistic';
import useWindowDimensions from '../hooks/useWindowDimensions';

export default function AbilityScore(props) {
  const [visual, setVisual] = useStatistic(`${props.name}_score`);
  const windowDimensions = useWindowDimensions();

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  function onScoreChange(e) {
    if (e.target.checkValidity() && e.target.value !== '')
      props.onChange(parseInt(e.target.value));
  }

  let short = props.name.substring(0, 3).toUpperCase();
  let displayName = props.name[0].toUpperCase() + props.name.substring(1);
  if (windowDimensions.width > 870) displayName += ` (${short})`;

  return (
    <div className={`score ${visual}`}>
      <Buttons name={`${props.name}_score`}></Buttons>
      <label htmlFor={`${props.name}_score_input`} onClick={toggleVisual}>
        {displayName}
      </label>
      <input
        type="number"
        id={`${props.name}_score_input`}
        min="1"
        max="30"
        value={props.score}
        onChange={onScoreChange}
      />
    </div>
  );
}
