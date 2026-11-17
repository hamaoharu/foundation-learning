# Unit 16 / Q002 レビュー

## 判定

解説後合格。

## 確認できたこと

- 最初のPromiseの成功値`4`が最初の`then()`へ渡ると判断できている
- `return value + 1`によって、次のPromiseの成功値が`5`になると読めている
- 2番目の`then()`に`5`が渡ると判断できている
- callbackにreturnがない場合、次のPromiseの成功値が`undefined`になると説明できている

## 初回に不足していた点

①までの値は追えていたが、②とその理由が未回答だった。解説後、`console.log()`の実行とcallbackの戻り値は別であり、returnがない関数は`undefined`を返すと整理できた。

## 継続確認

波括弧付きcallbackのreturn抜けは過去にも発生しているため、Promise chainの実装問題でも再確認する。

