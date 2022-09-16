import React from 'react';
import useStatistic from '../hooks/useStatistic';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function AbilityModifier(props) {
  const [statistic, setStatistic] = useStatistic('str_mod');

  let value = Math.floor((props.score - 10) / 2);
  let displayValue = `${value >= 0 ? `+${value}` : value}`;
  return (
    <div className="modifier">
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
        {statistic}
      </div>
      <div className="modifier_title">Ability Modifier</div>
      <div className="modifier_value">{displayValue}</div>
    </div>
  );
}
