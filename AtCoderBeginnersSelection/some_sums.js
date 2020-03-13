'use strict';

function Main(input) {
  const inputs = input.split(' ');

  const n = inputs[0] | 0;
  const a = inputs[1] | 0;
  const b = inputs[2] | 0;

  let result = 0;

  for (let i = 1; i <= n; i++) {
    const digits = `${i}`.split('').map((x) => { return x | 0 });
    const sum = digits.reduce((x, y) => { return x + y; });
    if (a <= sum && sum <= b) {
      result += i;
    }
  }

  console.log(result);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
