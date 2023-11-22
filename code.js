function fib(n){
    var index = new Array(val+1);
    var store = new Array(val+1);
    for (i=0; i < index.length; i++){
        index[i] = i;
        store[i] = createFib(i);
    }
    console.log("Index: " + index);
    console.log("Value: " + store + "\n");
}

function createFib(n){
    if (n <= 1)
        return n;
    else 
       return createFib(val-1) + createFib(val-2);    
}
