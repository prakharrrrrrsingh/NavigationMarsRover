// algorithms/astar.js
function heuristic(a, b) {
    return Math.abs(a.x - b.x) + Math.abs(a.y - b.y); // Manhattan distance
  }
  
  function astar(grid, start, end) {
    const rows = grid.length;
    const cols = grid[0].length;
    const openSet = new Set([`${start.x},${start.y}`]);
    const cameFrom = {};
    const gScore = Array(rows).fill().map(() => Array(cols).fill(Infinity));
    const fScore = Array(rows).fill().map(() => Array(cols).fill(Infinity));
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
    gScore[start.x][start.y] = 0;
    fScore[start.x][start.y] = heuristic(start, end);
  
    while (openSet.size > 0) {
      // Find node with lowest fScore
      let current = null;
      let lowestFScore = Infinity;
      for (const coord of openSet) {
        const [x, y] = coord.split(',').map(Number);
        if (fScore[x][y] < lowestFScore) {
          lowestFScore = fScore[x][y];
          current = { x, y };
        }
      }
  
      if (current.x === end.x && current.y === end.y) break;
  
      openSet.delete(`${current.x},${current.y}`);
  
      for (const [dx, dy] of directions) {
        const nx = current.x + dx, ny = current.y + dy;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] !== 1) {
          const tentativeGScore = gScore[current.x][current.y] + 1;
          if (tentativeGScore < gScore[nx][ny]) {
            cameFrom[`${nx},${ny}`] = [current.x, current.y];
            gScore[nx][ny] = tentativeGScore;
            fScore[nx][ny] = gScore[nx][ny] + heuristic({ x: nx, y: ny }, end);
            if (!openSet.has(`${nx},${ny}`)) {
              openSet.add(`${nx},${ny}`);
            }
          }
        }
      }
    }
  
    // Reconstruct path
    const path = [];
    let current = [end.x, end.y];
    while (current.toString() !== [start.x, start.y].toString()) {
      path.unshift({ x: current[0], y: current[1] });
      current = cameFrom[`${current[0]},${current[1]}`] || [start.x, start.y];
    }
    path.unshift({ x: start.x, y: start.y });
  
    return { 
      path, 
      visited: Object.keys(cameFrom).map(coord => ({ 
        x: +coord.split(',')[0], 
        y: +coord.split(',')[1] 
      })) 
    };
  }
  
  module.exports = { astar };