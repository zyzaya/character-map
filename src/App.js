import './App.css';
import Statistic from './components/Statistic';
import AbilityModifier from './components/AbilityModifier';
import AbilityScore from './components/AbilityScore';

function App() {
  return (
    <div className="App">
      <AbilityScore name="strength" value="16"></AbilityScore>
      <AbilityModifier name="strength" score="16"></AbilityModifier>
    </div>
  );
}

export default App;
