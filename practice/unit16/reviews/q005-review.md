# Unit 16 / Q005 レビュー

## 判定

軽微な文字列修正後に合格。

## 確認できたこと

- Promise chain全体を`formatScore`からreturnできている
- `then()`で成功値を受け取り、加工した文字列をreturnできている
- `catch()`でエラーを受け取り、代替値をreturnして成功状態へ回復できている
- `finally()`で成功・失敗の両方へ後処理を適用できている
- `new Promise()`を不要に使わず、既存のPromiseへ処理をつなげられている

## 修正した点

初回は成功時の表示が`Score 80`となり、仕様の`Score: 80`にあるコロンが不足していた。文字列だけを修正し、両ケースが通った。

## 補足した点

`try/catch/finally`はJavaScriptの例外処理構文でありcallbackではない。一方、Promiseの`.then()`・`.catch()`・`.finally()`はメソッドであり、引数として渡している関数がcallback。

