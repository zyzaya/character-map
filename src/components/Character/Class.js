import React from 'react';
import { Classes } from '../../info/Classes';

export default function Class(props) {
  return (
    <div className="class">
      <label htmlFor="class"></label>
      <select name="class" id="class">
        {Object.keys(Classes).map((k) => {
          return <option value={k}>{Classes[k].name}</option>;
        })}
      </select>
    </div>
  );
}
