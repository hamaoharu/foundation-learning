# Unit 16 / Q006 レビュー

## 判定

軽微なログ文字列修正後に合格。

## 確認できたこと

- Promise chain全体を関数からreturnできている
- 1つ目の`then()`で`filter()`した配列をreturnできている
- 2つ目の`then()`で前段の配列を受け取り、`map()`した名前配列をreturnできている
- 波括弧付きの`filter`・`map` callbackで必要なreturnを書けている
- `catch()`で空配列をreturnし、失敗から回復できている
- `finally()`で成功・失敗の両方に`end`を追加できている
- 元のユーザー配列を変更していない

## 修正した点

初回はログ文字列が`maped`となっていたため、仕様どおり`mapped`へ修正した。処理内容とPromiseの値の伝播は初回から正しかった。

## 評価

過去に繰り返し抜けていた波括弧付きcallbackのreturnを、今回はPromise chain、`filter`、`map`の各段階で維持できた。

