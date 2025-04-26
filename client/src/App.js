import React, { useState } from 'react';
import './App.css';

function App() {
  const [grid, setGrid] = useState(() => {
    return Array(20).fill().map(() => Array(20).fill(0));
  });
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [end, setEnd] = useState({ x: 19, y: 19 });
  const [algorithm, setAlgorithm] = useState('astar');
  const [path, setPath] = useState([]);
  const [visited, setVisited] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawType, setDrawType] = useState('obstacle'); // 'obstacle', 'start', 'end'

  const handleCellClick = (x, y) => {
    const newGrid = [...grid];
    if (drawType === 'start') {
      setStart({ x, y });
    } else if (drawType === 'end') {
      setEnd({ x, y });
    } else {
      newGrid[x][y] = grid[x][y] === 1 ? 0 : 1;
      setGrid(newGrid);
    }
  };

  const handleMouseDown = (x, y) => {
    setIsDrawing(true);
    handleCellClick(x, y);
  };

  const handleMouseEnter = (x, y) => {
    if (isDrawing) handleCellClick(x, y);
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const solvePath = async () => {
    try {
      const response = await fetch('http://localhost:5000/path', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ grid, start, end, algorithm })
      });
      const data = await response.json();
      setVisited(data.visited || []);
      setPath(data.path || []);
    } catch (error) {
      alert('Error finding path!');
    }
  };

  const clearBoard = () => {
    setGrid(Array(20).fill().map(() => Array(20).fill(0)));
    setPath([]);
    setVisited([]);
  };

  return (
    <div className="app">
      <div className="controls">
        <select 
          value={algorithm} 
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="bfs">Breadth-First Search</option>
          <option value="dfs">Depth-First Search</option>
          <option value="dijkstra">Dijkstra's Algorithm</option>
          <option value="astar">A* Search</option>
          <option value="bestfirst">Best-First Search</option>
        </select>

        <div className="draw-buttons">
          <button 
            className={drawType === 'start' ? 'active' : ''}
            onClick={() => setDrawType('start')}
          >
            Set Start
          </button>
          <button 
            className={drawType === 'end' ? 'active' : ''}
            onClick={() => setDrawType('end')}
          >
            Set End
          </button>
          <button 
            className={drawType === 'obstacle' ? 'active' : ''}
            onClick={() => setDrawType('obstacle')}
          >
            Draw Walls
          </button>
        </div>

        <button onClick={solvePath}>Find Path</button>
        <button onClick={clearBoard}>Clear Board</button>
      </div>

      <div className="grid-container">
        <div className="grid">
          {grid.map((row, x) => (
            <div key={x} className="row">
              {row.map((cell, y) => {
                const isStart = x === start.x && y === start.y;
                const isEnd = x === end.x && y === end.y;
                const isPath = path.some(p => p.x === x && p.y === y);
                const isVisited = visited.some(v => v.x === x && v.y === y);
                
                return (
                  <div
                    key={`${x}-${y}`}
                    className={`cell 
                      ${isStart ? 'start' : ''} 
                      ${isEnd ? 'end' : ''} 
                      ${isPath ? 'path' : ''} 
                      ${isVisited ? 'visited' : ''} 
                      ${cell === 1 ? 'obstacle' : ''}`}
                    onClick={() => handleCellClick(x, y)}
                    onMouseDown={() => handleMouseDown(x, y)}
                    onMouseEnter={() => handleMouseEnter(x, y)}
                    onMouseUp={handleMouseUp}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;