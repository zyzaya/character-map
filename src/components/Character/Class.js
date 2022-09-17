import React from 'react';
import { Classes } from '../../info/Classes';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';
import '../../styles/Class.css';
import useStatistic from '../../hooks/useStatistic';

export default function Class(props) {
  const [visual, setVisual] = useStatistic('character_class');

  function toggleVisual(e) {
    e.preventDefault();
    setVisual(visual === 'focused' ? 'none' : 'focused');
  }

  return (
    <div className={`class ${visual}`}>
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <label htmlFor="class" className="class_title" onClick={toggleVisual}>
        Class
      </label>
      <select
        className="class_value"
        name="class"
        id="class"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      >
        {Object.keys(Classes).map((k) => {
          return (
            <option key={k} value={k}>
              {Classes[k].name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
