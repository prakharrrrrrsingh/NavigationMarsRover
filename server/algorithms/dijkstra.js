// algorithms/dijkstra.js
function dijkstra(grid, start, end) {
    const rows = grid.length;
    const cols = grid[0].length;
    const distances = Array(rows).fill().map(() => Array(cols).fill(Infinity));
    const visited = new Set();
    const cameFrom = {};
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  
    // Priority queue: [x, y, distance]
    const queue = [[start.x, start.y, 0]];
    distances[start.x][start.y] = 0;
  
    while (queue.length > 0) {
      queue.sort((a, b) => a[2] - b[2]); // Sort by distance
      const [x, y, dist] = queue.shift();
      visited.add(`${x},${y}`);
  
      if (x === end.x && y === end.y) break;
  
      for (const [dx, dy] of directions) {
        const nx = x + dx, ny = y + dy;
        if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && grid[nx][ny] !== 1) {
          const newDist = dist + 1; // Uniform cost for all moves
          if (newDist < distances[nx][ny]) {
            distances[nx][ny] = newDist;
            cameFrom[`${nx},${ny}`] = [x, y];
            queue.push([nx, ny, newDist]);
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
      visited: Array.from(visited).map(s => ({ 
        x: +s.split(',')[0], 
        y: +s.split(',')[1] 
      })) 
    };
  }
  
  module.exports = { dijkstra };