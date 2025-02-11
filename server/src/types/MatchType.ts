export interface MatchResult {
  sets: [number, number][];
  currentGame: string;
  currentSetGames: [number, number];
  winner: string | null;
}
