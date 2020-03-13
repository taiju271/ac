'use strict';

function Main(input) {
  // 改行と空白で分割
  const inputs = input.split(/\s/gm);

  // | 0 で整数型にすることができる
  const a = inputs[0] | 0;
  const b = inputs[1] | 0;
  const c = inputs[2] | 0;
  const s = inputs[3];

  // a,b,c の合計値と文字列 s を出力
  console.log(`${a + b + c} ${s}`);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
