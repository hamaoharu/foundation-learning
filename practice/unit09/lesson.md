# Unit 9 教材：オブジェクト操作

## オブジェクトの生成

オブジェクトは、キーと値の組を保持します。

```js
const user = {
  id: 1,
  name: "Haru",
};
```

## ドット記法

コードを書く時点でプロパティ名が決まっている場合に使います。

```js
user.name; // "Haru"
user.id;   // 1
```

## ブラケット記法

文字列でプロパティ名を指定できます。

```js
user["name"]; // "Haru"
```

変数の中身をキーとして使う場合に重要です。

```js
const key = "name";

user[key]; // "Haru"
```

次は意味が異なります。

```js
user.key;  // "key"という固定名のプロパティ
user[key]; // key変数の中身をプロパティ名として使用
```

## 動的なキーで保存する

```js
const fieldName = "email";
const profile = {};

profile[fieldName] = "haru@example.com";

// { email: "haru@example.com" }
```

オブジェクト生成時にも、計算されたプロパティ名を使えます。

```js
const result = {
  [fieldName]: "haru@example.com",
};
```

## プロパティの省略記法

キー名と変数名が同じ場合は省略できます。

```js
const id = 1;
const name = "Haru";

const user = {
  id,
  name,
};
```

これは次と同じです。

```js
const user = {
  id: id,
  name: name,
};
```

## 分割代入

オブジェクトのプロパティを変数へ取り出せます。

```js
const user = {
  id: 1,
  name: "Haru",
};

const { id, name } = user;
```

別名やデフォルト値も指定できます。

```js
const { name: displayName, role = "guest" } = user;
```

## `Object.keys()`

キーの配列を返します。

```js
Object.keys({ name: "Haru", age: 20 });
// ["name", "age"]
```

## `Object.values()`

値の配列を返します。

```js
Object.values({ name: "Haru", age: 20 });
// ["Haru", 20]
```

## `Object.entries()`

`[キー, 値]`のペアを並べた配列を返します。

```js
Object.entries({ todo: 3, done: 2 });
// [["todo", 3], ["done", 2]]
```

分割代入と組み合わせられます。

```js
const labels = Object.entries({ todo: 3, done: 2 }).map(([key, value]) => {
  return `${key}: ${value}`;
});

// ["todo: 3", "done: 2"]
```

## 頻度表とのつながり

Unit 8で扱った次のコードも、動的なキーの操作です。

```js
const currentCount = counts[status] ?? 0;
counts[status] = currentCount + 1;
```

Unit 9では、まず単純な取得・保存から確認した後、この集計へ戻ります。

## 参照資料

- [MDN：オブジェクトの基本](https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Scripting/Object_basics)
- [MDN：分割代入](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Destructuring)
- [MDN：Object.keys()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [MDN：Object.values()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/values)
- [MDN：Object.entries()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
