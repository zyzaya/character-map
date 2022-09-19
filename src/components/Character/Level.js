import React from 'react';
import Buttons from '../Buttons';
import '../../styles/Level.css';
import useStatistic from '../../hooks/useStatistic';

export default function Level(props) {
  const [visual, setVisual] = useStatistic('level');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  function onLevelChange(e) {
    if (e.target.checkValidity() && e.target.value !== '')
      props.onChange(e.target.value);
  }

  return (
    <div className={`level ${visual}`}>
      <Buttons></Buttons>
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
        onChange={onLevelChange}
      />
    </div>
  );
}
