'use strict';

function Main(input) {
  // 一行目の整数の数は不要なので二行目だけ使う
  const second_line = input.split('\n')[1];

  // 整数のリストに変換
  let int_list = second_line.split(' ');
  // 2で割った回数
  let count = 0;

  // リスト内のすべての整数が2で割り切れる間ループする
  while (int_list.every((i) => {
    return i % 2 == 0;
  })) {
    // リスト内のすべての整数を2で割る
    int_list = int_list.map((i) => {
      return i / 2;
    });
    // 2で割った回数を増やす
    count += 1;
  }

  console.log(count);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
