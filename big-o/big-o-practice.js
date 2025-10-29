// calculate time complexity
// answer = O(n) - grows proportionally with n -> n console logs
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// O(1) - constant time bc minimum of n and 10 chosen - capped at 10 console logs
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// O(n) - time complexity based on n bc of Math.max
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// pay attention - O(n) - linear time complexity based on n bc of array.length
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}




// O(n^2) - nested loop = n * n = n^2
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}