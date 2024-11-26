var findChampion = function(n, edges) {
    if(n == 1) return 0;

    const weaker = new Set();
    const stronger = new Set();
    
    for(let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        if(!weaker.has(a)) stronger.add(a);
        if(stronger.has(b)) stronger.delete(b)
        weaker.add(b);
    }
    return stronger.size == 1 && weaker.size == n - 1? [...stronger.values()][0] : -1;
};