import logo from './logo.svg';
import './App.css';
import { FaHandRock, FaHandPaper, FaHandScissors} from 'react-icons/fa';

function App() {
  return (
    <div className="center">
      <h1>Rock Paper Scissors</h1>
      <div>
        <div className="container">
          <div className="player">
            <div className="score">Player 1: 0</div>
            <div></div>
          </div>
          <div className="player">
            <div className="score">Player 2: 0</div>
            <div></div>
          </div>
        </div>
        <div>
          <button className="round-btn">
            <FaHandRock size={20} /></button>
          <button className="round-btn">
            <FaHandPaper size={20}/></button>
          <button className="round-btn">
            <FaHandScissors size={20}/></button>
        </div>
        </div>
        <h1>Player 1 Wins</h1>
      </div>
  );
}

export default App;
