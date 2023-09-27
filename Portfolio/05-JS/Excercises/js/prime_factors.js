var getPrimeFactors = function (n) {
    "use strict";

    function isPrime(n) {
        var i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    var i, sequence = [];

    for (i = 2; i <= Math.sqrt(n); i++) {
        if (isPrime(i) & n % i === 0 & !sequence.includes(i)) {
            sequence.push(i);
        }
    }

    return sequence;
};

// the prime factors for this number are: [ 2, 3, 5, 7, 11, 13 ]
console.log(getPrimeFactors(30030));