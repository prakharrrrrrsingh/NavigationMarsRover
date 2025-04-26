#!/bin/bash

# Create project structure
mkdir -p mars-rover-navigation/{client,server/algorithms}

# Initialize React frontend
cd mars-rover-navigation/client
npx create-react-app . --template typescript
npm install axios

# Create React components
cat > src/App.js << 'EOL'
import React, { useState, useEffect } from 'react';
import Grid from './Grid';
import axios from 'axios';

const App = () => {
  // ... [Paste the full App.js code from previous answer here] ...
};

export default App;
EOL

cat > src/Grid.js << 'EOL'
import React from 'react';

const Grid = ({ grid, start, end, path, visited, onCellClick }) => {
  // ... [Paste the full Grid.js code from previous answer here] ...
};

export default Grid;
EOL

# Initialize Node.js backend
cd ../server
npm init -y
npm install express cors

# Create server.js
cat > server.js << 'EOL'
const express = require('express');
const cors = require('cors');
const { bfs, dfs, dijkstra, astar, bestFirst } = require('./algorithms');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/path', (req, res) => {
  // ... [Paste the full server.js code from previous answer here] ...
});

app.listen(5000, () => console.log('Server running on port 5000'));
EOL

# Create algorithms
mkdir algorithms
cat > algorithms/bfs.js << 'EOL'
function bfs(grid, start, end) {
  // ... [Paste the full BFS algorithm code from previous answer here] ...
}
module.exports = { bfs };
EOL

# Repeat for other algorithms (dfs.js, dijkstra.js, etc.)

echo "Project setup complete!"
echo "To start:"
echo "1. Frontend: cd mars-rover-navigation/client && npm start"
echo "2. Backend: cd mars-rover-navigation/server && node server.js"
