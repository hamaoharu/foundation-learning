# Unit 17：async/awaitと並行処理

**状態：完了（2026-11-19）**

## 学習項目

- `async`関数の戻り値
- `await`によるPromiseの成功値の受け取り
- rejected Promiseと`try/catch`
- `finally`による後処理
- 逐次実行と並行実行の違い
- `Promise.all()`

## 累積復習

- Promiseの状態と値の伝播
- `throw`・`try/catch/finally`
- 配列の抽出・変換・集計
- ES Modules

## 完了条件

- `async`関数が必ずPromiseを返すと説明できる
- `await`で成功値を受け取り、失敗を`try/catch`で扱える
- Promise chainをasync/awaitへ書き換えられる
- 依存する処理は逐次、独立する処理は並行として選択できる
- `Promise.all()`で複数の独立処理を待てる

Q001〜Q007を完了しました。各問題の判定と要復習事項は[`reviews/`](./reviews/)を参照してください。

