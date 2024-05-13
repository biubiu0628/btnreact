import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isLose, setIsLose] = useState(false);
  const [player, setPlayer] = useState("");

  function loseProbability(score) {
    // Implement a more complex lose probability function
    // This example uses a logarithmic curve
    const baseProbability = 0.1; // Initial lose probability
    const growthFactor = 1.1; // Rate of probability increase
    return baseProbability * Math.pow(growthFactor, score);
  }

  const handleButtonClick = () => {
    const shouldLose = Math.random() < loseProbability(count);
    if (!shouldLose) {
      setCount(count + 1);
    } else {
      setIsLose(true);
      const enteredName = prompt("You Lose! Enter your name:");
      if (enteredName) {
        setPlayer(enteredName);
      }
    }
  };

  return (
    <div className="game-container">
      <h1>Clicker Game</h1>
      <p>Score: {count}</p>
      <button onClick={handleButtonClick}>Click me!</button>
      {isLose && (
        <div className="lose-screen">
          <p>Game Over!</p>
          <p>Your score: {count}</p>
          <p>Your name: {player}</p>
          <button onClick={() => window.location.reload()}>Restart Game</button>
        </div>
      )}
    </div>
  );
}

export default App;
