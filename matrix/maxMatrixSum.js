var maxMatrixSum = function(matrix) {
    let sum = 0, counter = 0, min = 1000000;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] < 0) counter++;
            min = Math.min(min, Math.abs(matrix[i][j]));
            sum += Math.abs(matrix[i][j]);
        }
    }
    return counter % 2 == 0 ? sum : sum -  2 * min;
};