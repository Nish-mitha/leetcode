var maxCount = function(banned, n, maxSum) {
    let ans = 0, sum = 0;
    for(let i = 1; i <= n; i++) {
        if(banned.indexOf(i) < 0) {
            sum += i;
            if(sum <= maxSum) ans++;
        }
    }
    return ans;
};