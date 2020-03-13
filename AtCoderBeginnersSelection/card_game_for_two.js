'use strict';

function Main(input) {
  // カードリストを生成
  const cards = input
    .split('\n')[1]          // 2行目だけ使う
    .split(' ')              // 空白で区切られた整数リストを分割
    .map((x) => x | 0)       // 文字列から数値へ変換
    .sort((a, b) => b - a);  // 降順でソート

  let alice_points = 0;
  let bob_points = 0;

  for (let i = 0; i < cards.length; i += 2) {
    alice_points += cards[i];
    bob_points += cards[i + 1] || 0;
  }

  console.log(alice_points - bob_points);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));
