import './App.css';
import Statistic from './components/Statistic';
import AbilityModifier from './components/AbilityModifier';

function App() {
  return (
    <div className="App">
      <AbilityModifier name="strength_mod" score="16"></AbilityModifier>
    </div>
  );
}

export default App;
