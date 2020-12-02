import './App.css';
import Counter from './components/Counter/Counter';

const divStyle = {
  width: '100vw',
  height: '100vh',
};

function App() {
  return (
    <div className="App d-flex flex-column justify-content-center align-items-center" style={divStyle}>
      <h1 className="animated fadeInDownBig" style={{ fontFamily: "Arvo, serif", fontWeight: "700" }}>Countdown to New Year 2021</h1>
      <Counter />
    </div>
  );
}

export default App;
