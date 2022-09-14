import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function Proficiency(props) {
  function onChange(e) {
    props.onChange(e.target.value);
  }

  return (
    <div className="proficiency">
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <label htmlFor="proficiency_value">Proficiency Bonus</label>
      <input
        type="number"
        min="2"
        max="6"
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
}
