import { useSelector, useDispatch } from 'react-redux';
import { setVisual } from '../state/statisticsSlice';

export default function useStatistic(name) {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.statistics)[name];

  let set = (newVisual) => {
    if (newVisual === 'focused') {
      current.sources.forEach((s) => {
        dispatch(setVisual({ name: s, visual: 'sourced' }));
      });
      current.affecting.forEach((a) => {
        dispatch(setVisual({ name: a, visual: 'affected' }));
      });
    } else if (newVisual === 'none' && current.visual === 'focused') {
      current.sources.forEach((s) => {
        dispatch(setVisual({ name: s, visual: 'none' }));
      });
      current.affecting.forEach((a) => {
        dispatch(setVisual({ name: a, visual: 'none' }));
      });
    }
    console.log(`${name}:${current.visual}:${newVisual}`);
    dispatch(setVisual({ name: name, visual: newVisual }));
  };

  return [current.visual, set];
}
