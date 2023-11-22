function fib(n) {
    var store = [0];
    if(n == 0) return store;
    store[1] = 1;
    if(n == 1) return store;
    for(var i = 2; i <= n; i++) 
        store[i] = store[i-1] + store[i-2];
    return store;
 };
 
