// algorithms/bfs.js
function bfs(grid, start, end) {
  const rows = grid.length;
  const cols = grid[0].length;
  const queue = [[start.x, start.y]];
  const visited = new Set([`${start.x},${start.y}`]);
  const cameFrom = {};
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (x === end.x && y === end.y) break;

    for (const [dx, dy] of directions) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols && !visited.has(`${nx},${ny}`) && grid[nx][ny] !== 1) {
        queue.push([nx, ny]);
        visited.add(`${nx},${ny}`);
        cameFrom[`${nx},${ny}`] = [x, y];
      }
    }
  }

  // Reconstruct path
  const path = [];
  let current = [end.x, end.y];
  while (current.toString() !== [start.x, start.y].toString()) {
    path.unshift({ x: current[0], y: current[1] });
    current = cameFrom[current] || [start.x, start.y];
  }
  path.unshift({ x: start.x, y: start.y });

  return { path, visited: Array.from(visited).map(s => ({ x: +s.split(',')[0], y: +s.split(',')[1] })) };
}

module.exports = { bfs };