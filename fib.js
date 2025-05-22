function fib() {
  var i = 0;
  var j = 1;

  return function fun() {
    let temp = i;
    let sum = i + j;
    i = j;
    j = sum;
    return temp;
  };
}
let n = 5; //no of fib numbers to print
let handle = fib();
for (var j = 0; j <= n; j++) {
  console.log(handle());
}
