interface MatchResult {
  sets: [number, number][]; 
  currentGame: string;
  currentSetGames: [number, number];
  winner: string | null;
}

export const calculateTennisSets = (points: string[]): MatchResult => {
  let player1Games = 0;
  let player2Games = 0;
  let player1Points = 0;
  let player2Points = 0;
  let player1Sets = 0;
  let player2Sets = 0;
  let sets: [number, number][] = [];
  let isTieBreak = false;

  const resetGame = () => {
    player1Points = 0;
    player2Points = 0;
  };

  const resetSet = () => {
    sets.push([player1Games, player2Games]);
    if (player1Games > player2Games) {
      player1Sets++;
    } else {
      player2Sets++;
    }
    
    player1Games = 0;
    player2Games = 0;
    isTieBreak = false;
  };

  const calculateGameScore = (): string => {
  const scoreMap = [0, 15, 30, 40];
  
  // game win
  if (player1Points >= 4 && player1Points - player2Points >= 2) {
    player1Games++;
    resetGame();
    return "Game Player 1";
  } else if (player2Points >= 4 && player2Points - player1Points >= 2) {
    player2Games++;
    resetGame();
    return "Game Player 2";
  }

  // advantage scenarios
  if (player1Points >= 3 && player2Points >= 3) {
    if (player1Points === player2Points) return "40 - 40";
    if (player1Points > player2Points) return "AV - 40";
    return "40 - AV";
  }

  // scoring without advantage
  return `${scoreMap[player1Points] || 0} - ${scoreMap[player2Points] || 0}`;
};

  const calculateTieBreak = (): string => {
    if (player1Points >= 7 && player1Points - player2Points >= 2) {
      player1Games++;
      isTieBreak = false;
      resetGame();
      return "Tie-break Player 1";
    } else if (player2Points >= 7 && player2Points - player1Points >= 2) {
      player2Games++;
      isTieBreak = false;
      resetGame();
      return "Tie-break Player 2";
    }
    return `${player1Points} - ${player2Points}`;
  };

  for (const point of points) {
    if (point === "player1") player1Points++;
    if (point === "player2") player2Points++;

    // Tie-break logic
    if (isTieBreak) {
      const tieBreakResult = calculateTieBreak();
      if (tieBreakResult.includes("Tie-break")) {
        resetSet();
      }
      continue;
    }

    calculateGameScore();

    // Set win
    if (
      (player1Games >= 6 && player1Games - player2Games >= 2) ||
      (player2Games >= 6 && player2Games - player1Games >= 2)
    ) {
      resetSet();
    }

    // Tie Break condition
    if (player1Games === 6 && player2Games === 6) {
      isTieBreak = true;
    }

    // Match win condition
    if (player1Sets === 3 || player2Sets === 3) {
      break;
    }
  }

  return {
  sets,
  currentGame: calculateGameScore(),
  currentSetGames: [player1Games, player2Games],
  winner: player1Sets === 3 ? "player1" : player2Sets === 3 ? "player2" : null,
};
};