# Unit 17 / Q006 レビュー

## 判定

修正後に合格。

## 確認できたこと

- 独立した2つのPromiseを`Promise.all()`へ渡せている
- `await Promise.all()`の成功値配列を分割代入できている
- async関数内で`try/catch/finally`を使えている
- 成功時と失敗時に指定されたオブジェクトをPromiseの成功値として返せている
- `catch`で受け取ったErrorのmessageを代替結果へ含められている
- 成功・失敗の両方で`finally`を実行できている

## 修正した点

初回は`theme: settings`として、設定オブジェクト全体をthemeへ入れていた。`settings.theme`へ修正し、文字列`"dark"`を設定できた。

また、失敗時のエラーメッセージを固定文字列で書いていたため、`catch(error)`で受け取った`error.message`を使う形へ修正した。

