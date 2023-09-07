function sum(a, b) {
  return a + b;
}

module.exports.sum = sum;

function mul(a, b) {
  return a * b;
}

module.exports.mul = mul;

function del(a, b) {
  return a - b;
}

module.exports.del = del;


var x = 5;
var y = "10";

// This line will cause a TypeError because you cannot add a number and a string.
var result = x + y;

console.log(result);

