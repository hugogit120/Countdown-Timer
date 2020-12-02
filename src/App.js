import './App.css';
import Counter from './components/Counter/Counter';

const divStyle = {
  width: '100vw',
  height: '100vh',
};

function App() {
  return (
    <div className="App d-flex justify-content-center" style={divStyle}>
      <Counter />
    </div>
  );
}

export default App;
