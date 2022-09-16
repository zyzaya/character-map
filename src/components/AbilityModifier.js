import React from 'react';
import useStatistic from '../hooks/useStatistic';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function AbilityModifier(props) {
  const [visual, setVisual] = useStatistic(`${props.name}_modifier`);

  function toggleVisual(e) {
    e.preventDefault();
    console.log(`tv:${props.name}_modifier:${visual}`);
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  let value = Math.floor((props.score - 10) / 2);
  let displayValue = `${value >= 0 ? `+${value}` : value}`;
  return (
    <div className="modifier" onClick={toggleVisual}>
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
        {visual}
      </div>
      <div className="modifier_title">Ability Modifier</div>
      <div className="modifier_value">{displayValue}</div>
    </div>
  );
}
