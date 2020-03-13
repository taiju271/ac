'use strict';

function Main(input) {
  const inputs = input.split('\n');
  const n = inputs.shift() | 0;

  let src = [0, 0, 0];

  for (let i = 0; i < n; i++) {
    const dst = inputs.shift().split(' ').map((x) => x | 0);

    const t = dst[0] - src[0];
    const d = Math.abs(src[1] - dst[1]) + Math.abs(src[2] - dst[2]);

    if (d > t || d % 2 != t % 2) {
      console.log('No');
      return;
    }

    src = dst;
  }

  console.log('Yes');
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
