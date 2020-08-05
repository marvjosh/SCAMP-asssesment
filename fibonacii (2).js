//fibonacii of a given number
let fibNum = {};

function fib (n) {
   if (n <= 1) return n;

if (fibNum[n]) {
   return fibNum[n];
}
   fibNum[n] = fib(n - 1) + fib(n - 2);
   return fibNum[n];
}


console.log(fib(7));

//output is 13