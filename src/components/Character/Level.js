import React from 'react';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';
import '../../styles/Level.css';
import useStatistic from '../../hooks/useStatistic';

export default function Level(props) {
  const [visual, setVisual] = useStatistic('level');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`level ${visual}`}>
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <label htmlFor="level" className="level_title" onClick={toggleVisual}>
        Level
      </label>
      <input
        type="number"
        name="level"
        className="level_value"
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
