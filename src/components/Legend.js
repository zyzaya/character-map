import React from 'react';
import '../styles/Legend.css';
import RightArrow from '../right-arrow.png';

export default function Legend(props) {
  return (
    <div className="legend">
      <div className="legend_explanation">
        Click on a value to change the current selection, displaying what values
        affect the selection and what values are affected by the selection.
      </div>
      <div className="legend_display">
        <div className="legend_sourced sourced">
          <div className="legend_text">
            Values that affect the Current Selection
          </div>
        </div>
        <img className="legend_arrow" src={RightArrow} alt="RightArrow" />
        <div className="legend_focused focused">
          <div className="legend_text">Current Selection</div>
        </div>
        <img className="legend_arrow" src={RightArrow} alt="RightArrow" />
        <div className="legend_affected affected">
          <div className="legend_text">
            Values that are affected by the Curent Selection
          </div>
        </div>
      </div>
    </div>
  );
}
