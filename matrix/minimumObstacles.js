var minimumObstacles = function(grid) {
    const m = grid.length;
  const n = grid[0].length;
  const directions = [
    [0, 1],   // right
    [1, 0],   // down
    [0, -1],  // left
    [-1, 0],  // up
  ];

  // Deque for 0-1 BFS: [x, y, obstaclesRemoved]
  const deque = new Deque([[0, 0, 0]]); // Start at (0, 0) with 0 obstacles removed
  const visited = new Set(["0,0"]);

  while (!deque.isEmpty()) {
    const [x, y, obstaclesRemoved] = deque.popFront();

    // If we reach the bottom-right corner
    if (x === m - 1 && y === n - 1) {
      return obstaclesRemoved;
    }

    for (const [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited.has(`${nx},${ny}`)) {
        visited.add(`${nx},${ny}`);
        if (grid[nx][ny] === 0) {
          deque.pushFront([nx, ny, obstaclesRemoved]); // No obstacle to remove
        } else {
          deque.pushBack([nx, ny, obstaclesRemoved + 1]); // Remove the obstacle
        }
      }
    }
  }

  return -1;
};