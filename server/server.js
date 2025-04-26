// server.js
const express = require('express');
const cors = require('cors');
const { bfs } = require('./algorithms/bfs');
const {dfs}= require('./algorithms/dfs');
const {dijkstra}= require('./algorithms/dijkstra');
const {astar}= require('./algorithms/astar');
const {bestFirst}= require('./algorithms/bestfirst');
const app = express();
app.use(cors());
app.use(express.json());

// API endpoint to compute path
app.post('/path', (req, res) => {
  const { grid, start, end, algorithm } = req.body;
  let result;
  switch (algorithm) {
    case 'bfs':
      result = bfs(grid, start, end);
      break;
    case 'dfs':
      result = dfs(grid, start, end);
      break;
    case 'dijkstra':
      result = dijkstra(grid, start, end);
      break;
    case 'astar':
      result = astar(grid, start, end);
      break;
    case 'bestfirst':
      result = bestFirst(grid, start, end);
      break;
    default:
      return res.status(400).json({ error: 'Invalid algorithm' });
  }
  res.json(result);
});

app.listen(5000, () => console.log('Server running on port 5000'));