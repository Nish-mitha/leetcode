var rotateTheBox = function(box) {
    const rotatedBox = Array.from({ length: box[0].length }, () => new Array(box.length).fill(0));
    for (let i = 0; i < box.length; i++) {
        for (let j = box[0].length; j >= 0; j--) {
            let tmp = j;
            let prev = j + 1;
            if(j < box[0].length - 1 && box[i][j] == "#") {
                while(prev < box[0].length && box[i][prev] === '.') {
                    box[i][prev] = "#";
                    box[i][j] = ".";
                    prev++;
                    j++;
                }
            }
            j = tmp;
        }
    }
    box.reverse();
    for (let i = 0; i < box.length; i++) {
        for (let j = 0; j < box[0].length; j++) {
            rotatedBox[j][i] = box[i][j];
        }
    }
    return rotatedBox;
};