# Unit 15 / Q005 レビュー

## 判定

資料参照あり・修正なしで合格。

## 確認できたこと

- Q004の関数を名前付きimportして再利用できている
- 例外が起こる可能性のある処理を`try`内で実行できている
- 正常時に`ok: true`のオブジェクトをreturnできている
- `catch`で`Error`オブジェクトを受け取れている
- `error.name`と`error.message`から失敗内容を組み立てられている
- `TypeError`と通常の`Error`の両方を同じ`catch`で処理できている

## 実行確認

```text
正常な文字列 → { ok: true, email: "haru@example.com" }
数値         → { ok: false, error: "TypeError: email must be a string" }
空白文字列   → { ok: false, error: "Error: email is required" }
```

## 参照状況

教材を参照して実装したため、資料なしの自力実装とは区別する。`try/catch`は後続の複合問題でも再確認する。

