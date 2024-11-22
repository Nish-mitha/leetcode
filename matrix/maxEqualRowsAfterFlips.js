var maxEqualRowsAfterFlips = (matrix) => {
    const map = new Map();
    for(let i = 0; i < matrix.length; i++) {
        const initialValue = matrix[i][0];
        const pattern = matrix[i].map((item) => initialValue ? (item === 1 ? 0 : 1) : item ).join('')

        map.set(pattern, (map.get(pattern) || 0) + 1);
    }

    return Math.max(...map.values());
}