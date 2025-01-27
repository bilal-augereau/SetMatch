# **SetMatch** 🎾

![Capture d'écran 2025-01-25 191759 (1)](https://github.com/user-attachments/assets/61ffa18b-50c7-4886-8ac6-81491f6bc5b4)

**SetMatch** is a web application that allows users to simulate a tennis match, track the score, and view detailed stats such as the number of points played, sets won, and the current game progress.

---

## 🌟 **Features**

- 🎾 **Simulate a Match:** Generate random tennis points between two players based on their skill levels.
- 📊 **Track Scoring:** Displays the score for each set, the total sets won, and the current game.
- 🛠️ **Backend Logic:** The scoring logic, based on official tennis rules (e.g., sets, tie-breaks, advantage games), is handled in the backend.
- 🌟 **Player Customization:** Input player names, skill levels (1-10), and the number of points to simulate.

---

## 💻 **Tech Stack**

### **Frontend**
- **React:** Dynamic, component-based UI.
- **TypeScript:** Ensures type safety and better code readability.
- **CSS:** Styled for simplicity and clarity.

### **Backend**
- **Node.js + Express:** Handles requests, processes tennis scoring logic, and delivers JSON responses.
- **Tennis Scoring Logic:** Implements official tennis rules:
  - Best of 5 sets.
  - Tie-breaks for sets at 6-6.
  - Advantage games.

---

## 🌿 **How It Works**

1. **Input Players:** Enter the names and skill levels of Player 1 and Player 2.
2. **Generate Points:** Randomly simulate points based on player skill levels.
3. **View Results:**
   - See the total points played.
   - Track the score for each set.
   - Monitor the current game progress (including advantage, deuce, and tie-break situations).
4. **Backend Processing:** The backend computes the match results and sends them to the frontend for visualization.

---

## ⚙️ **How to Run the Project**

### **Prerequisites**
- Ensure **Node.js** and **npm** are installed on your system.

### **Setup Steps**

1. Clone the repository:  
   git clone https://github.com/<your-username>/SetMatch.git  
   cd SetMatch  

2. Copy `.env.sample` to `.env` and configure the environment variables.

### **Run the Backend**
1. Navigate to the server folder:  
   cd server  

2. Install dependencies:  
   npm install  

3. Start the backend server:  
   npm run dev  

### **Run the Frontend**
1. Navigate to the client folder:  
   cd client  

2. Install dependencies:  
   npm install  

3. Start the frontend app:  
   npm run dev  

---

## 📊 **Preview**

- **Input Player Names and Levels**  
- **Match Results**  

---

## 🛠️ **Future Improvements**

- 🏆 **Match History:** Save match results and replay them.  
- 📈 **Statistics Dashboard:** Display player statistics such as win rates and average set scores.  
- 🌐 **Multiplayer Mode:** Allow two users to play a live match against each other.  

---

Feel free to personalize this further with specific installation commands or additional features unique to your project! 😊
