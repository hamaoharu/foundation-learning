# Unit 16 / Q001 レビュー

## 判定

解説後合格。

## 確認できたこと

- `Promise.resolve(5)`の戻り値が数値ではなくPromiseだと判断できている
- `firstPromise`が成功値`5`でfulfilledになると理解できている
- 最初の`then()`へ`5`が渡ると判断できている
- `then()`が新しいPromiseを返すと理解できている
- `return value * 2`によって、`secondPromise`が最終的に`10`でfulfilledになると判断できている
- 最後の`console.log()`が`10`を表示すると読めている

## 用語の訂正

回答中の`filfiiled`は`fulfilled`の誤記として扱う。

## 参照状況

回答前に、Promise・resolve・成功値・`then()`が返す新しいPromiseについて解説を受けた。資料なしの初見回答とは区別し、後続問題で値の伝播を再確認する。

