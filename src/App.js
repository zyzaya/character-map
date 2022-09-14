import './App.css';
import Ability from './components/Ability';

function App() {
  return (
    <div className="App">
      <Ability name="strength" proficiency={2}></Ability>
    </div>
  );
}

export default App;
