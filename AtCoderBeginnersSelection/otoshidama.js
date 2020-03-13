'use strict';

const yen10000 = 10000;
const yen5000 = 5000;
const yen1000 = 1000;

function search(N, Y) {
  let x = 0, y = 0, z = 0;

  for (z = 0; z <= N; z++) {
    for (y = 0; y + z <= N; y++) {
      x = N - y - z;

      if (yen10000 * x + yen5000 * y + yen1000 * z == Y) {
        return [x, y, z];
      }
    }
  }

  return [-1, -1, -1]
}

function Main(input) {
  const inputs = input.split(/\s/g);

  const N = inputs[0] | 0;
  const Y = inputs[1] | 0;

  const result = search(N, Y);

  console.log(`${result[0]} ${result[1]} ${result[2]}`)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
