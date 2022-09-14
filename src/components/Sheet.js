import React, { useState } from 'react';
import AbilitySection from './AbilitySection';
import Proficiency from './Proficiency';

export default function Sheet(props) {
  const [proficiency, setProficiency] = useState(2);

  function handleProficiencyChange(p) {
    setProficiency(p);
  }

  return (
    <div className="sheet">
      <Proficiency
        value={proficiency}
        onChange={handleProficiencyChange}
      ></Proficiency>
      <AbilitySection proficiency={proficiency}></AbilitySection>
    </div>
  );
}
