# Unit 9 / Q006 レビュー

## 判定

合格（初回・修正なし）

## 確認結果

- `Object.keys()`でキー配列：合格
- `Object.values()`で値配列：合格
- `Object.entries()`でペアの配列：合格
- 値`0`を維持：合格
- 空オブジェクトから3つの空配列：合格
- 元オブジェクトの非変更：合格
- 各メソッドが別の新しい配列を返す：合格

## ルールとの差異

問題では返却時のプロパティ省略記法を指定したが、実装は各メソッドをオブジェクト内で直接呼び出している。動作と可読性に問題はなく、Q004で省略記法は確認済みのため、今回は必須修正としない。

変数へ保存する場合は次の形にできる。

```js
const productNames = Object.keys(stockByProduct);
const stockCounts = Object.values(stockByProduct);
const entries = Object.entries(stockByProduct);

return { productNames, stockCounts, entries };
```
