# Unit 17 / Q007 レビュー

## 判定

複数回の修正後に合格。Unit 17完了。

## 確認できたこと

- 商品ID一覧を先にawaitし、依存する処理を逐次実行できている
- `map()`で各商品取得Promiseを作り、`Promise.all()`で並行取得できている
- async関数内で`try/catch/finally`を使えている
- ID取得失敗と商品取得失敗を同じcatchで処理できている
- 販売中商品の抽出・名前整形・価格集計を行える
- 成功・失敗の全ケースで指定されたログを残せている

## 修正した点

1. `filter()` callbackで条件をreturnしていなかった
2. `map()` callbackで整形した名前をreturnしていなかった
3. `reduce()` callbackで計算結果をreturnしていなかった
4. 返却キーを`names`ではなく`name`としていた
5. 変数だけ`names`へ直し、return側に存在しない`name`が残ってReferenceErrorになった

最終的に、成功・ID取得失敗・商品取得失敗の3ケースが仕様どおり通った。

## Unit 17の評価

async関数の戻り値、await、try/catch、Promise.allの基本構文は実装できるようになった。逐次と並行の判断は解説後に整理できた。

一方、波括弧付きcallbackのreturn抜けが複数箇所で再発し、変数名と返却キーの対応にも修正が必要だった。非同期処理だけでなく、同期的な配列加工と返却形式を実装後に確認する習慣が必要。

