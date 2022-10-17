import React from 'react';
import '../styles/Legend.css';
import RightArrow from '../right-arrow.png';

export default function Legend(props) {
  return (
    <div className="legend">
      <div className="sourced">
        <div className="legend_text">
          Values that affect the Current Selection
        </div>
      </div>
      <img className="legend_arrow" src={RightArrow} alt="RightArrow" />
      <div className="focused">
        <div className="legend_text">Current Selection</div>
      </div>
      <img className="legend_arrow" src={RightArrow} alt="RightArrow" />
      <div className="affected">
        <div className="legend_text">
          Values that are affected by the Curent Selection
        </div>
      </div>
    </div>
  );
}
