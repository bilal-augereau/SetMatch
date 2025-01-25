import { useState } from "react";

interface MatchFormProps {
  onGeneratePoints: (points: string[], player1: string, player2: string) => void;
}

function MatchForm ({ onGeneratePoints }: MatchFormProps) {
  const [player1, setPlayer1] = useState("");
  const [level1, setLevel1] = useState(5);
  const [player2, setPlayer2] = useState("");
  const [level2, setLevel2] = useState(5);
  const [pointLength, setPointLength] = useState(150);

  const handleGeneratePoints = () => {
    if (!player1.trim() || !player2.trim()) {
      alert("Please enter names for both players");
      return;
    }

    const points = Array.from({ length: pointLength }, () =>
      Math.random() < level1 / (level1 + level2) ? "player1" : "player2"
    );
    onGeneratePoints(points, player1, player2);
  };
    
    const handleLevelChange = (value: number, setLevel: (level: number) => void) => {
    const forcedValue = Math.max(1, Math.min(10, value));
    setLevel(forcedValue);
  };

  return (
    <>
      <div>
        <h3>Player 1</h3>
        <input
          type="text"
          placeholder="Name"
          value={player1}
          onChange={(e) => setPlayer1(e.target.value)}
          required
        />
        <label>
          Level (1-10):
          <input
            type="number"
            min="1"
            max="10"
            value={level1}
            onChange={(e) => handleLevelChange(Number(e.target.value), setLevel1)}
            required
          />
        </label>
      </div>
      <div>
        <h3>Player 2</h3>
        <input
          type="text"
          placeholder="Name"
          value={player2}
          onChange={(e) => setPlayer2(e.target.value)}
          required
        />
        <label>
          Level (1-10):
          <input
            type="number"
            min="1"
            max="10"
            value={level2}
            onChange={(e) => handleLevelChange(Number(e.target.value), setLevel2)}
            required
          />
        </label>
      </div>
      <div>
        <h3>Match Length</h3>
        <label>
          Points:
          <input
            type="number"
            min="50"
            max="1000"
            value={pointLength}
            onChange={(e) => setPointLength(Number(e.target.value))}
          />
        </label>
      </div>
      <button onClick={handleGeneratePoints}>Generate Points</button>
    </>
  );
};

export default MatchForm;