function addUpTo(n) {
    let total = 0;

    // basic loop = O(n)
    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

// time function execution with markers before and after
const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();
// performance.now tracks in milliseconds --- divide by 1000
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);