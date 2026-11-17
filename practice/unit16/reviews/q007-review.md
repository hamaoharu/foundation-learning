# Unit 16 / Q007 レビュー

## 判定

`reduce()`修正後に合格。Unit 16完了。

## 確認できたこと

- Promise chain全体を関数からreturnできている
- 1つ目の`then()`でデータ形式を検証し、不正時にthrowできている
- 2つ目の`then()`で支払い済み注文を非破壊で抽出できている
- 3つ目の`then()`で件数と合計のオブジェクトをreturnできている
- 通信失敗とデータ形式エラーを同じ`catch()`へ伝播させられている
- `catch()`で代替オブジェクトをreturnし、失敗から回復できている
- `finally()`で全ケースへ後処理を適用できている

## 修正した点

初回は`reduce()`の累積値と現在要素の引数順が逆で、注文オブジェクト自体を加算し、初期値も省略していた。そのため合計が`[object Object][object Object]`になった。

次の形へ修正し、`3500`を得られた。

```js
paidOrders.reduce((total, order) => {
  return total + order.price;
}, 0);
```

## Unit 16の評価

Promiseの概念は当初かなり曖昧だったが、成功値、`then()`が返す新しいPromise、callbackのreturn、エラー伝播、`catch()`後の回復を段階的に説明・実装できた。

実装ではPromise chainを正しく構成できている。一方、仕組みの言語化と`reduce()`はまだ不安定なため、async/await課題でも値の出所と集計処理を再確認する。

