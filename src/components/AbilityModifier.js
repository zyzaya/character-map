import React from 'react';
import useStatistic from '../hooks/useStatistic';
import Buttons from './Buttons';

export default function AbilityModifier(props) {
  const [visual, setVisual] = useStatistic(`${props.name}_modifier`);

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  let value = Math.floor((props.score - 10) / 2);
  let displayValue = `${value >= 0 ? `+${value}` : value}`;
  return (
    <div className={`modifier ${visual}`}>
      <Buttons name={`${props.name}_modifier`}></Buttons>
      <div className="modifier_title" onClick={toggleVisual}>
        Ability Modifier
      </div>
      <div className="modifier_value" onClick={toggleVisual}>
        {displayValue}
      </div>
    </div>
  );
}
