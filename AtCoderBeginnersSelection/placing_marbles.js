'use strict';

function Main(input) {
  // 1 にマッチする部分を配列ですべて出す
  // 一つもマッチしない場合は null が帰ってくるため、空の配列をフェイルセーフで入れる
  const result = input.match(/1/g) || [];

  // 配列の長さを出力すれば、1 の数がわかる
  console.log(result.length);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
