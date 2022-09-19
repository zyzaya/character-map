import React, { useEffect, useState } from 'react';
import '../styles/Info.css';
import yaml from 'js-yaml';
import raw from '../info/Help.yaml';
import { useSelector } from 'react-redux';
import { setVisible } from '../state/infoSlice';
import { useDispatch } from 'react-redux';

export default function Info(props) {
  let [title, setTitle] = useState('');
  let [body, setBody] = useState('');
  let [data, setData] = useState(undefined);
  const visible = useSelector((state) => state.info.visible);
  const key = useSelector((state) => state.info.value);
  const dispatch = useDispatch();

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
    if (data === undefined || data[key] === undefined) setTitle('');
    else setTitle(data[key].title);
  }, [title, data, key]);
  useEffect(() => {
    if (data === undefined || data[key] === undefined) setBody('');
    else setBody(data.strength_score.info);
  }, [body, data, key]);

  function handleClose(e) {
    dispatch(setVisible(false));
  }

  return (
    <div className={`info ${visible ? '' : 'hidden'}`}>
      <div className="info_container">
        <h1 className="info_title">{title}</h1>
        <button className="info_close" onClick={handleClose}>
          Close
        </button>
        <hr className="separator"></hr>
        <div className="info_text">{body}</div>
      </div>
    </div>
  );
}
