import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function Speed(props) {
  return (
    <div className="speed">
      <div className="speed_title">
        <div className="buttons">
          <AdditionalInfo></AdditionalInfo>
          <CycleArrow></CycleArrow>
        </div>
        Speed
      </div>
      <div className="speed_output">{`${props.value}ft`}</div>
    </div>
  );
}
