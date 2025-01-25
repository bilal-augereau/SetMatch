export const sendPointsToBackend = async (
  points: string[],
  player1: string,
  player2: string
) => {
  const response = await fetch("http://localhost:3310/score", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ points, player1, player2 }),
  });

  if (!response.ok) {
    console.error("Response error:", await response.text());
    throw new Error("Failed to fetch tennis sets");
  }

  const data = await response.json();
  return {
    sets: data.sets,
    currentSetGames: data.currentSetGames,
    currentGame: data.currentGame,
    winner: data.winner
  };
};