import React from 'react';
import { Classes } from '../../info/Classes';
import AdditionalInfo from '../AdditionalInfo';
import CycleArrow from '../CycleArrow';
import '../../styles/Class.css';

export default function Class(props) {
  return (
    <div className="class">
      <div className="buttons">
        <AdditionalInfo></AdditionalInfo>
        <CycleArrow></CycleArrow>
      </div>
      <label htmlFor="class" className="class_title">
        Class
      </label>
      <select name="class" id="class">
        {Object.keys(Classes).map((k) => {
          return <option value={k}>{Classes[k].name}</option>;
        })}
      </select>
    </div>
  );
}
