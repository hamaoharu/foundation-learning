# Unit 3 教材：`||`・`??`・`?.`

## 1. `||`はfalsyを置き換える

`||`は、左側がfalsyなら右側を返します。

```js
0 || 10;            // 10
"" || "未入力";     // "未入力"
false || true;      // true
null || "なし";     // "なし"
undefined || "なし"; // "なし"
```

数値`0`、空文字`""`、booleanの`false`も置き換わります。

## 2. `??`は値が存在しない場合だけ置き換える

`??`が右側を返すのは、左側が次のどちらかの場合だけです。

```js
null
undefined
```

```js
0 ?? 10;            // 0
"" ?? "未入力";     // ""
false ?? true;      // false
null ?? "なし";     // "なし"
undefined ?? "なし"; // "なし"
```

したがって、`0`、`""`、`false`が有効な設定値なら`??`を使います。

## 3. `null`と`undefined`

大まかには次のように整理できます。

- `undefined`：値が設定されていない、またはプロパティが存在しない
- `null`：値がないことを意図的に表す

```js
const user = {};

user.name; // undefined

const selectedUser = null; // 意図的に「選択なし」
```

## 4. optional chaining `?.`

存在しない可能性がある値へ、そのままプロパティアクセスするとエラーになります。

```js
const user = {};

user.profile.name;
// TypeError: Cannot read properties of undefined
```

`?.`を使うと、途中の値が`null`または`undefined`の場合に、エラーではなく`undefined`を返します。

```js
user.profile?.name; // undefined
```

既定値と組み合わせることもできます。

```js
const displayName = user.profile?.name ?? "ゲスト";
```

## 5. `?.`を使いすぎない

必ず存在すべき値まで`?.`で隠すと、不具合に気づきにくくなります。値が存在しないことを仕様上許可する場所だけで使います。

## 参照資料

- [MDN：Null合体演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
- [MDN：Optional chaining](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Optional_chaining)

