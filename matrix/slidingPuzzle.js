var slidingPuzzle = function(board) {
    const dir = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];
        const target = "123450";
        const vis = new Set(); // Track visited configurations
        const q = [];
        let start = "";

        // Convert 2D board to a single string
        for (let row of board) {
            for (let col of row) {
                start += col;
            }
        }

        q.push(start);
        vis.add(start);
        let step = 0;

        // Perform BFS
        while (q.length > 0) {
            let size = q.length;
            for (let i = 0; i < size; i++) {
                let current = q.shift();

                // Check if target is reached
                if (current === target) return step;

                let zero = current.indexOf('0'); // Find position of '0'

                // Generate next moves
                for (let move of dir[zero]) {
                    let next = current.split('');
                    [next[zero], next[move]] = [next[move], next[zero]];
                    next = next.join('');

                    if (!vis.has(next)) { // Add unvisited states to the queue
                        vis.add(next);
                        q.push(next);
                    }
                }
            }
            step++;
        }
        return -1;
};