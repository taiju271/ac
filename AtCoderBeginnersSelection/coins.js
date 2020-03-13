'use strict';

function Main(input) {
  const inputs = input.split('\n');

  const n_500 = inputs[0];
  const n_100 = inputs[1];
  const n_50 = inputs[2];
  const x = inputs[3];

  let count = 0;

  for (let i = 0; i <= n_500; i++) {
    if (500 * i > x) continue;

    for (let j = 0; j <= n_100; j++) {
      if (500 * i + 100 * j > x) continue;

      for (let k = 0; k <= n_50; k++) {
        if (500 * i + 100 * j + 50 * k == x) {
          count += 1;
        }
      }
    }
  }

  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
