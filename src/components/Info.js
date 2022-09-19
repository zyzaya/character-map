import React, { useEffect, useState } from 'react';
import '../styles/Info.css';
import yaml from 'js-yaml';
import raw from '../info/Help.yaml';

export default function Info(props) {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');
  let [data, setData] = useState(undefined);
  useEffect(() => {
    fetch(raw)
      .then((response) => response.text())
      .then((val) => {
        try {
          let t = yaml.load(val, 'utf8');
          console.log(t);
          setData(t);
        } catch (e) {
          console.log(e);
        }
      });
  }, []);

  useEffect(() => {
    if (data === undefined) setTitle('');
    else setTitle(data.strength_score.title);
  }, [title, data]);
  useEffect(() => {
    if (data === undefined) setBody('');
    else setBody(data.strength_score.info);
  }, [body, data]);

  return (
    <div className="info">
      <div className="info_container">
        <h1 className="info_title">{title}</h1>
        <button className="info_close">Close</button>
        <hr className="separator"></hr>
        <div className="info_text">{body}</div>
      </div>
    </div>
  );
}
