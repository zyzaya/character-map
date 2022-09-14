import React from 'react';
import '../styles/Statistic.css';
import AdditionalInfo from './AdditionalInfo';
import CycleArrow from './CycleArrow';

export default function Statistic(props) {
  return (
    <div className="statistic">
      <AdditionalInfo></AdditionalInfo>
      <CycleArrow></CycleArrow>
      <div>{props.name}</div>
      <div>{props.value}</div>
    </div>
  );
}
