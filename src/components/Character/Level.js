import React from 'react';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';
import '../../styles/Level.css';

export default function Level(props) {
  return (
    <div className="level">
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <label htmlFor="level" className="level_title">
        Level
      </label>
      <input
        type="number"
        name="level"
        id="level"
        min="1"
        max="20"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      />
    </div>
  );
}
