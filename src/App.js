import './App.css';
import getComponent from './utils/routing';

function App() {
  const component = getComponent();
  return (
    <div className="App">
      {component}
    </div>
  );
}

export default App;
