import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="center">
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className="container">
          <div className="player">
            <div>Player 1: 0</div>
            <div></div>
          </div>
          <div className="player">
            <div>Player 2: 0</div>
            <div></div>
          </div>
        </div>
        <div>
          <button className="round-btn">Rock</button>
          <button className="round-btn">Paper</button>
          <button className="round-btn">Scissors</button>
        </div>
        </div>
        <h1>Player 1 Wins</h1>
      </div>
  );
}

export default App;
