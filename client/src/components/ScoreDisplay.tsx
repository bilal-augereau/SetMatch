import './ScoreDisplay.css';
import ball from '../assets/images/ball.png';

interface ScoreDisplayProps {
  score: {
    sets: [number, number][];
    currentGame: string;
    currentSetGames: [number, number]; 
    winner: string | null;
  };
  player1: string;
  player2: string;
}

function ScoreDisplay({ score, player1, player2 }: ScoreDisplayProps) {
  if (!score || !score.currentGame || !score.currentSetGames) {
    return <div>Loading score...</div>;
  }

    function parseCurrentScore({ currentGame }: ScoreDisplayProps["score"]) {
    if (currentGame === "Game Player 1") return ["0", "0"];
    if (currentGame === "Game Player 2") return ["0", "0"];
    if (currentGame === "40 - 40") return ["40", "40"];
    if (currentGame === "AV - 40") return ["AV", "40"];
    if (currentGame === "40 - AV") return ["40", "AV"];
    return currentGame.split(" - ");
  };

  const [player1CurrentScore, player2CurrentScore] = parseCurrentScore(score);
  const [player1SetGames, player2SetGames] = score.currentSetGames;
  const currentSetNumber = score.sets.length + 1;

    return (
    <>
       {!score.winner && (
                <div>
                    <img className='ballsizing' src={ball} alt="ball" />
          Résultat : <strong>Jeu en cours, pas de vainqueur</strong>
        </div>
      )}
    <table className="score-display">
      <thead>
        <tr>
          <th>Player</th>
          {score.sets.map((_, index) => (
            <th key={`set-${index + 1}`}>Set {index + 1}</th>
          ))}
          {!score.winner && <th>Set {currentSetNumber}</th>}
          <th>Current Game</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className='tdplayers'><strong>{player1}</strong></td>
          {score.sets.map(([player1Games, player2Games], index) => (
            <td key={`p1-set-${index + 1}`}>
              {player1Games > player2Games ? <strong>{player1Games}</strong> : player1Games}
            </td>
          ))}
          {!score.winner && <td>{player1SetGames}</td>}
          <td>{player1CurrentScore}</td>
        </tr>
        <tr>
          <td className='tdplayers'><strong>{player2}</strong></td>
          {score.sets.map(([player1Games, player2Games], index) => (
            <td key={`p2-set-${index + 1}`}>
              {player2Games > player1Games ? <strong>{player2Games}</strong> : player2Games}
            </td>
          ))}
          {!score.winner && <td>{player2SetGames}</td>}
          <td>{player2CurrentScore}</td>
        </tr>
      </tbody>
      {score.winner && (
        <tfoot>
          <tr>
            <td colSpan={score.sets.length + 2}>
              Winner: {score.winner === 'player1' ? player1 : player2}
            </td>
          </tr>
        </tfoot>
      )}
            </table>
             </>
            );
           
};

export default ScoreDisplay;