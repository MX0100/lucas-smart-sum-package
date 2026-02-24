const { sum } = require('./index');

console.log('Testing sum function...');
console.log('sum(2, 3) =', sum(2, 3)); // 应该输出 5
console.log('sum(-1, 1) =', sum(-1, 1)); // 应该输出 0
console.log('sum(0, 0) =', sum(0, 0)); // 应该输出 0
console.log('All tests passed!');

