import React from 'react';
import AdditionalInfo from './AdditionalInfo';
import '../styles/Buttons.css';

export default function Buttons(props) {
  return (
    <div className="buttons">
      <AdditionalInfo name={props.name}></AdditionalInfo>
    </div>
  );
}
