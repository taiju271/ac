'use strict';

function Main(input) {
  const inputs = input.split('\n');
  inputs.shift();  // 1つ目は総数なので不要

  // モチリストを生成
  const mochi_list = inputs
    .map((x) => x | 0)       // 文字列から数値へ変換
    .sort((a, b) => b - a);  // 降順でソート

  const result = [101];

  mochi_list.forEach((mochi) => {
    if (0 < mochi && mochi < result[0]) {
      result.unshift(mochi);
    }
  });

  console.log(result.length - 1);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
