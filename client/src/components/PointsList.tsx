interface PointsListProps {
  points: string[];
  player1: string; // Nom du joueur 1
  player2: string; // Nom du joueur 2
}

function PointsList({ points, player1, player2 }: PointsListProps) {
  return (
    <div>
      <h3>Points</h3>
      <ul>
        {points.map((point, index) => (
          <li
            key={index}
            style={{
              color: point === "player1" ? "black" : "white",
              fontWeight: "bold",
            }}
          >
            Point {index + 1} : remporté par{" "}
            {point === "player1" ? player1 : player2}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PointsList;
