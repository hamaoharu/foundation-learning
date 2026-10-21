# Unit 7 教材：検索・判定系の配列メソッド

## 最初に見るべき違い

どのメソッドを使うかは、「最終的に何を返したいか」で選びます。

| 欲しいもの | メソッド | 見つからない場合 |
|---|---|---|
| 条件に合う最初の要素 | `find` | `undefined` |
| 条件に合う最初の添字 | `findIndex` | `-1` |
| 1つでも条件を満たすか | `some` | `false` |
| すべて条件を満たすか | `every` | 条件による。空配列では`true` |
| 指定した値そのものを含むか | `includes` | `false` |

## `find`

条件に合う最初の要素を返します。

```js
const users = [
  { id: 1, name: "Haru" },
  { id: 2, name: "Sora" },
];

const user = users.find((user) => {
  return user.id === 2;
});

// { id: 2, name: "Sora" }
```

見つからなければ`undefined`です。

## `findIndex`

条件に合う最初の要素の添字を返します。

```js
const index = users.findIndex((user) => {
  return user.id === 2;
});

// 1
```

見つからなければ`-1`です。添字`0`は先頭要素が見つかったという正常な結果なので、truthy/falsyだけで判定しないようにします。

## `some`

1つでも条件を満たす要素があれば`true`を返します。

```js
const hasOutOfStock = products.some((product) => {
  return product.stock === 0;
});
```

## `every`

すべての要素が条件を満たす場合に`true`を返します。

```js
const allPublished = products.every((product) => {
  return product.isPublished;
});
```

空配列では、条件に違反する要素が1つもないため`true`になります。実務では空配列を別に扱う必要があるか、仕様を確認します。

## `includes`

配列が指定した値そのものを含むか調べます。コールバックは使いません。

```js
const roles = ["admin", "editor"];

roles.includes("admin"); // true
roles.includes("guest"); // false
```

オブジェクトでは、同じ内容ではなく同じ参照かどうかを比較します。オブジェクトのプロパティ条件で探す場合は`find`や`some`を使います。

## `filter`との違い

```js
users.filter条件 // 条件に合う要素をすべて配列で返す
users.find条件   // 条件に合う最初の要素を1つ返す
users.some条件   // 条件に合う要素があるかBooleanで返す
```

同じ条件でも、必要な戻り値によって選ぶメソッドが変わります。

## 参照資料

- [MDN：Array.prototype.find()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
- [MDN：Array.prototype.findIndex()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- [MDN：Array.prototype.some()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [MDN：Array.prototype.every()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
- [MDN：Array.prototype.includes()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
