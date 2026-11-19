# Unit 17 / Q004 レビュー

## 判定

解説後合格。

## 確認できたこと

- `formatScore`をasync関数として実装できている
- `await getScore()`でPromiseの成功値を受け取れている
- rejected Promiseを通常の`try/catch`で扱えている
- 成功・失敗の両方で指定された表示文字列をreturnできている
- `finally`で両ケースに`end`を追加できている
- Promise chainをasync/await形式へ書き換えられている

## 修正した点

初回は引数`logs`と同名の`const logs`を関数内で再宣言し、`SyntaxError`になった。再宣言を削除し、渡された配列を使用する形へ修正した。

また、成功時に数値`80`をそのままreturnしていたため、仕様どおり`"Score: 80"`へ修正した。

## 補足した点

async関数内で通常の値をreturnすると、その値がasync関数の返すPromiseの成功値になる。

```text
return "Score: 80"
↓
成功値が"Score: 80"のPromise
```

