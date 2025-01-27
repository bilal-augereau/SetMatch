import express, { Request, Response } from "express";
import { calculateTennisSets } from "./modules/Score/CalSets";

const router = express.Router();

router.post("/score", (req: Request, res: Response) => {

  const { points, player1, player2 } = req.body;

  if (
  !Array.isArray(points) || 
  typeof player1 !== "string" || 
  player1.trim() === "" ||
  typeof player2 !== "string" || 
  player2.trim() === ""
) {
    res.status(400).json({ error: "Invalid data format" });
    return;
  }

  try {
    const result = calculateTennisSets(points); 
    res.json(result);
  } catch (error) {
    console.error("Error calculating tennis sets:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


export default router;