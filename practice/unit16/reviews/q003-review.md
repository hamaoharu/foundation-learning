# Unit 16 / Q003 レビュー

## 判定

解説後合格。

## 確認できたこと

- 最初の`then()`が成功値`10`を受け取ると判断できている
- `new Error()`へ渡した文字列が`error.message`になると確認できた
- `then()`内でthrowすると、その後の成功用`then()`が実行されず`catch()`へ進むと説明できている
- `catch()`でエラーのmessageを受け取れている
- `catch()`が`0`をreturnすると、次のPromiseが`0`でfulfilledになり、次の`then()`へ渡ると説明できている
- `finally()`が最後に実行されると判断できている

## 補足した点

`message`は自分で宣言した変数ではなく、`Error`オブジェクトが持つプロパティ。`new Error("failed: 10")`の引数が`error.message`になる。

問5は初回に理由が不足していたが、`catch()`のreturnが次の成功値になることを追記できた。

