import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';
import '../styles/Proficiency.css';

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
      <label className="proficiency_title" htmlFor="proficiency_value">
        Proficiency Bonus
      </label>
      <input
        id="proficiency_value"
        className="proficiency_value"
        type="number"
        min="2"
        max="6"
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
}
