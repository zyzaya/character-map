import React from 'react';
import '../styles/Info.css';

export default function Info(props) {
  return (
    <div className="info hidden">
      <div className="info_container">
        <h1 className="info_title">Info</h1>
        <button className="info_close">Close</button>
        <hr class="separator"></hr>
        <div className="info_text"></div>
      </div>
    </div>
  );
}
