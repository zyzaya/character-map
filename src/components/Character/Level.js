import React from 'react';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';

export default function Level(props) {
  return (
    <div className="level">
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <label htmlFor="level" className="level_title">
        Class
      </label>
      <input
        type="number"
        name="level"
        id="level"
        min="1"
        max="20"
        level={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
