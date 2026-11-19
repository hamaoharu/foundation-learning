# Unit 17 / Q003 レビュー

## 判定

解説後合格。

## 確認できたこと

- async関数がPromiseを返すと判断できている
- 成功時のreturnがPromiseの成功値`"Hello, Haru"`になると読めている
- 成功時にも`finally`が実行されると判断できている
- rejected Promiseをawaitすると`catch`へ進むと説明できている
- `catch`が`"Hello, guest"`をreturnすると、最終的なPromiseがfulfilledになると理解できている
- 失敗時にも`finally`が実行されると判断できている

## 補足した点

回答の「tryは実行せずcatchを実行」は、厳密には`try`内の`await getUser(false)`までは実行される。そのawaitでrejectedを受け取った時点から、同じtry内の後続処理を飛ばしてcatchへ進む。

問7の説明どおり、catch内でErrorを再throwせず通常の文字列をreturnしているため、失敗から回復し、async関数のPromiseはその文字列でfulfilledになる。

