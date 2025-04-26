// Grid.js
import React from 'react';

const Grid = ({ grid, start, end, path, visited, onCellClick }) => {
  return (
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
                className={`cell ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''} ${isPath ? 'path' : ''} ${isVisited ? 'visited' : ''} ${cell === 1 ? 'obstacle' : ''}`}
                onClick={() => onCellClick(x, y, isStart, isEnd)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;