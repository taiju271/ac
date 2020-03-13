'use strict';

function Main(input) {
  const r = /^(dream|dreamer|erase|eraser)+$/gm.test(input);
  console.log(r ? 'YES' : 'NO')
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
