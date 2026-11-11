# Unit 15 教材：例外処理とデバッグ

## 1. エラーは原因を知らせる情報

エラーが出たときは、コード全体を眺めて推測する前に、表示された情報を順番に読みます。

```text
TypeError: Cannot read properties of undefined (reading 'name')
    at getUserName (app.mjs:4:23)
    at app.mjs:8:13
```

この例から、少なくとも次を読み取れます。

1. 種類は`TypeError`
2. `undefined`の`name`を読もうとした
3. 最初に確認する場所は`app.mjs`の4行目
4. その関数は8行目から呼ばれた

## 2. 代表的なエラー

### `SyntaxError`

JavaScriptの文法として解析できない場合に発生します。

```js
const user = {
  name: "Haru",
// 閉じる波括弧がない
```

### `ReferenceError`

存在しない変数を参照した場合などに発生します。

```js
console.log(userName);
// userNameが宣言されていない
```

### `TypeError`

値の型に対して実行できない操作をした場合などに発生します。

```js
const user = {};
user.profile.name;
// undefinedであるuser.profileからnameを読もうとしている
```

## 3. `Error`オブジェクト

エラーには、種類や説明、発生までの呼び出し履歴が含まれます。

```js
try {
  JSON.parse("not json");
} catch (error) {
  console.log(error.name);
  console.log(error.message);
  console.log(error.stack);
}
```

- `name`：エラーの種類
- `message`：何が起きたかの説明
- `stack`：どこから呼ばれてエラーに至ったか

## 4. `throw`で不正な入力を拒否する

関数が処理できない入力を受け取った場合、自分でエラーを発生させられます。

```js
function calculatePrice(price) {
  if (typeof price !== "number") {
    throw new TypeError("price must be a number");
  }

  return price * 1.1;
}
```

`throw`が実行されると、その関数の通常処理はそこで止まります。

## 5. `try/catch`

例外が起こる可能性のある処理を`try`へ書き、失敗時の処理を`catch`へ書きます。

```js
try {
  const data = JSON.parse(jsonText);
  console.log(data);
} catch (error) {
  console.error(`解析に失敗しました: ${error.message}`);
}
```

`catch`は、`try`内で例外が起きた場合だけ実行されます。

## 6. `finally`

`finally`は成功・失敗のどちらでも実行されます。

```js
try {
  console.log("処理開始");
} catch (error) {
  console.error(error.message);
} finally {
  console.log("後処理");
}
```

ローディング表示の解除や、利用した資源の後片付けなどに使います。

## 7. エラーを握りつぶさない

`catch`で何もしないと、失敗した事実や原因が呼び出し元へ伝わりません。

```js
try {
  riskyOperation();
} catch (error) {
  // 何もしない
}
```

その場所で回復できない場合は、必要な情報を付けて再度throwする方法があります。

```js
try {
  riskyOperation();
} catch (error) {
  throw new Error("ユーザー情報の処理に失敗しました", {
    cause: error,
  });
}
```

## 8. デバッグの基本手順

1. エラー名とメッセージを読む
2. stackの先頭にある自分のコードの行を見る
3. その行で使っている値を確認する
4. 値がどこから渡されたか、呼び出し元へ戻る
5. 問題を再現する最小の入力に絞る
6. 修正後、正常系と失敗系の両方を確認する

`console.log()`は値の確認に使えますが、ブラウザのブレークポイントを使うと、処理を一時停止してスコープ内の値を順に確認できます。

## 参照資料

- [MDN：エラー処理](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN：Error](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [MDN：try...catch](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/try...catch)
- [MDN：throw](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/throw)

