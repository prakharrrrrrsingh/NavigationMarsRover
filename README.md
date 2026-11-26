# 🚀 Mars Rover Navigation Simulator

An interactive pathfinding visualizer that simulates a Mars rover navigating through obstacles on a grid. Explore and compare different graph traversal and pathfinding algorithms to understand how they discover routes from a starting point to a destination.

## 🌐 Project Overview

The Mars Rover Navigation Simulator provides an interactive 20 × 20 grid where users can:

- Set custom starting and destination points.
- Draw obstacles to create different navigation environments.
- Select from five pathfinding algorithms.
- Visualize explored cells and the resulting path.
- Clear the board and experiment with different configurations.

## ✨ Features

- **Interactive Grid:** Create custom navigation environments.
- **Obstacle Placement:** Draw walls to block the rover's movement.
- **Multiple Algorithms:** Compare five different pathfinding approaches.
- **Path Visualization:** View the explored nodes and calculated route.
- **REST API:** Communicate with the backend to calculate paths.
- **Dynamic Controls:** Change start, end and obstacle positions.

## 🧠 Pathfinding Algorithms

| Algorithm | Description |
|---|---|
| BFS | Explores nodes level by level using a queue. |
| DFS | Explores deeper paths using a stack. |
| Dijkstra | Finds shortest paths using cumulative distances. |
| A* Search | Uses path cost and Manhattan distance heuristic. |
| Best-First Search | Prioritizes nodes based on heuristic distance. |

## 🛠️ Tech Stack

**Frontend**
- React.js
- JavaScript
- CSS
- HTML

**Backend**
- Node.js
- Express.js
- REST API

**Libraries & Tools**
- Axios
- Git
- GitHub

## 📁 Project Structure

```text
NavigationMarsRover/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── ...
│   └── package.json
│
├── server/
│   ├── algorithms/
│   │   ├── bfs.js
│   │   ├── dfs.js
│   │   ├── dijkstra.js
│   │   ├── astar.js
│   │   └── bestfirst.js
│   │
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ⚙️ Installation & Setup

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/prakharrrrrrsingh/NavigationMarsRover.git

cd NavigationMarsRover
```

### 2. Start the backend

Open a terminal:

```bash
cd server

npm install

node server.js
```

The Express server runs on:

```text
http://localhost:5000
```

### 3. Start the frontend

Open another terminal from the project root:

```bash
cd client

npm install

npm start
```

The React application runs on:

```text
http://localhost:3000
```

## 🔌 API Endpoint

The backend exposes a REST API for pathfinding calculations.

**POST** `/path`

Request body:

```json
{
  "grid": [],
  "start": {
    "x": 0,
    "y": 0
  },
  "end": {
    "x": 19,
    "y": 19
  },
  "algorithm": "astar"
}
```

Supported algorithm values:

- `bfs`
- `dfs`
- `dijkstra`
- `astar`
- `bestfirst`

The API returns the calculated path and visited nodes.

## 🎯 Learning Objectives

This project explores:

- Graph traversal and pathfinding.
- Algorithm design and implementation.
- Heuristic-based search techniques.
- Frontend and backend integration.
- RESTful API development.
- Interactive visualization using React.

## 👨‍💻 Author

**Prakhar Singh**

- GitHub: [@prakharrrrrrsingh](https://github.com/prakharrrrrrsingh)
- Project Repository: [NavigationMarsRover](https://github.com/prakharrrrrrsingh/NavigationMarsRover)

---

⭐ If you find this project interesting, consider giving the repository a star!
