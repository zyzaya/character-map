import { useSelector, useDispatch } from 'react-redux';

export default function useStatistic(name, newVisual) {
  const dispatch = useDispatch();
  const current = useSelector((state) => state[name]);

  let setVisual = (newVisual) => {
    if (newVisual === 'focused') {
      current.sources.forEach((s) => {
        dispatch(setVisual({ name: s, visual: 'sourced' }));
      });
      current.affecting.forEach((a) => {
        dispatch(setVisual({ name: a, visual: 'affected' }));
      });
    } else if (newVisual === 'none' && current === 'focused') {
      current.sources.forEach((s) => {
        dispatch(setVisual({ name: s, visual: 'none' }));
      });
      current.affecting.forEach((a) => {
        dispatch(setVisual({ name: a, visual: 'none' }));
      });
    }
  };

  return [current, setVisual];
}
