# Unit 15 / Q006 レビュー

## 判定

修正後に合格。

## 確認できたこと

- `try/catch/finally`を組み合わせられている
- JSON解析の成功時に解析結果をreturnできている
- 失敗時に`error.name`を使ってログを作り、`null`をreturnできている
- `finally`がreturnの後でも実行されることをコードで確認できている
- 正しいJSONの`false`を失敗と誤判定せず、そのまま返せている

## 修正した点

初回は文字列に対して`jsonText.parse()`を呼び出していたため、すべて`TypeError`になった。`JSON.parse(jsonText)`へ修正した。

また、解析結果を`if`で判定すると、正しいJSONである`false`・`0`・`null`を成功として扱えない。解析時に例外が起きなければ成功として処理する形へ修正した。

失敗ログも仕様どおり`error: エラー名`へ修正できた。

