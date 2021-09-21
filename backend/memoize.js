// // stores data (value) by key
// async function cache_store(key, value) {
// }
// // retrieves data by key (if it exists)
// async function cache_retrieve(key) {
// }
// fetches data from a slow data sourc
//async function slow_function(n) { 
//}

// runs faster than slow_function by using cache functions
async function memoize(slow_function) {
    var cache = [];
    return function(n){
        var i = n.toString();
        if(cache[i] == undefined){
            cache[i] = slow_function(n);
        }
        return cache[i];
    };
}

function fast_function(value){
    const {performance} = require('perf_hooks');
    const start = performance.now();
    slow_function(value)
    const end = performance.now();
    var slow = end - start

    const start1 = performance.now();
    memoize(value)
    const end1 = performance.now();
    var fast = end1 - start1

    if(slow<fast){
        slow_function(value)
    }else{
        memoize(value)
    }
}

