function piglatin() {
    "use strict";
    var n = document.getElementById("num").value;
    var val = f(n);
    document.getElementById("pigLbl").textContent = val;
}

function f(n) {
    var value;
    // Check if the memory array already contains the requested number
    if (memo.hasOwnProperty(n)) {
        value = memo[n];
    } else {
        value = f(n - 1) + f(n - 2);
        memo[n] = value;
    }

    return value;
}