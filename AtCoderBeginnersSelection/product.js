'use strict';

function Main(input) {
  const inputs = input.split(/\s/gm);

  // | 0 で整数型にすることができる
  const a = inputs[0] | 0;
  const b = inputs[1] | 0;

  // a × b の結果が偶数か奇数か
  if (a * b % 2 == 0) {
    console.log('Even');
  } else {
    console.log('Odd');
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
