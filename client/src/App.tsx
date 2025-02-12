import "./App.css";
import ball from "./assets/images/ball.png";
import { useState } from "react";
import Header from "./components/Header.tsx";
import MatchForm from "./components/MatchForm.tsx";
import PointsList from "./components/PointsList.tsx";
import ScoreDisplay from "./components/ScoreDisplay.tsx";
import { startPoints } from "./services/api.ts";

function App() {
  const [points, setPoints] = useState<string[]>([]);
  interface Score {
    sets: [number, number][];
    currentSetGames: [number, number];
    currentGame: string;
    winner: string | null;
  }

  const [score, setScore] = useState<Score | null>(null);
  const [player1, setPlayer1] = useState<string>("");
  const [player2, setPlayer2] = useState<string>("");

  const handleGeneratePoints = (
    generatedPoints: string[],
    p1: string,
    p2: string,
  ) => {
    setPoints(generatedPoints);
    setPlayer1(p1);
    setPlayer2(p2);
  };

  const handleSendPoints = async () => {
    try {
      const result = await startPoints(points, player1, player2);
      setScore(result);
    } catch (error) {
      console.error("Error sending points:", error);
    }
  };

  return (
    <>
      <Header />
      <MatchForm onGeneratePoints={handleGeneratePoints} />
      <button
        id="cal-color"
        type="button"
        onClick={handleSendPoints}
        disabled={points.length === 0}
      >
        Calculate Score
      </button>
      {score && (
        <ScoreDisplay score={score} player1={player1} player2={player2} />
      )}
      <div className="pointdisplay">
        <img className="ballsizing" src={ball} alt="ball" />
        <PointsList points={points} player1={player1} player2={player2} />
      </div>
    </>
  );
}

export default App;
