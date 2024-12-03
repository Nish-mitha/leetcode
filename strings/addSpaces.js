var addSpaces = function(s, spaces) {
    let ans = "";
    for(let i = 0; i < spaces.length; i++) {
        ans += s.slice((i == 0 ? 0 : spaces[i - 1]), spaces[i]) + " ";
        if(i == spaces.length - 1 && spaces[i] < s.length) ans += s.slice(spaces[i])
    }
    return ans;
};