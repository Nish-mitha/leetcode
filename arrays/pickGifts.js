var pickGifts = function(gifts, k) {
    for(let i = 1; i <= k ; i++) {
        const index = gifts.indexOf(Math.max(...gifts));
        gifts[index] = Math.floor(Math.sqrt(gifts[index]));
    }
    return gifts.reduce((val, acc) => val += acc, 0);
};