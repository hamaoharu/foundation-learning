# Unit 8 教材：`reduce`・`sort`・集計

## `reduce`とは

配列の要素を順番に処理し、最終的に1つの値へまとめるメソッドです。

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((accumulator, number) => {
  return accumulator + number;
}, 0);

// 60
```

ここでは次の役割があります。

- `accumulator`：前回のコールバックが返した値
- `number`：現在処理している配列要素
- 最後の`0`：accumulatorの初期値
- コールバックの`return`：次の処理へ渡すaccumulator

## 合計が作られる流れ

```text
初期値 0
0  + 10 → return 10
10 + 20 → return 30
30 + 30 → return 60
最終結果 60
```

`reduce`自身が返すのは、最後に残ったaccumulatorです。配列とは限りません。

## 初期値は省略しない

```js
numbers.reduce(callback, 0);
```

初期値を明示すると、accumulatorの意味が分かりやすく、空配列も扱えます。

用途ごとの代表的な初期値：

- 合計 → `0`
- 文字列連結 → `""`
- 配列へ集約 → `[]`
- オブジェクトへ集約 → `{}`

## オブジェクト配列の合計

```js
const products = [
  { name: "A", price: 100 },
  { name: "B", price: 200 },
];

const total = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

// 300
```

## 頻度表を作る

初期値を空オブジェクトにすると、値ごとの件数を持つオブジェクトへ集約できます。

```js
const statuses = ["todo", "done", "todo"];

const counts = statuses.reduce((result, status) => {
  const currentCount = result[status] ?? 0;
  result[status] = currentCount + 1;
  return result;
}, {});

// { todo: 2, done: 1 }
```

`status`の中身がキー名になるため、動的なプロパティ参照にはブラケット記法を使います。

```js
result[status]
```

初めて登場した値ではまだプロパティがなく`undefined`になるため、`?? 0`で件数0として扱います。

ここで変更しているのは、`reduce`のために新しく作った初期値のオブジェクトです。入力配列は変更していません。

## 要素をグループ化する

頻度表では各キーに数値を保存しましたが、グループ化では各キーに配列を保存します。

```js
const users = [
  { name: "Haru", team: "A" },
  { name: "Sora", team: "B" },
  { name: "Ren", team: "A" },
];

const grouped = users.reduce((groups, user) => {
  const team = user.team;

  if (groups[team] === undefined) {
    groups[team] = [];
  }

  groups[team].push(user);
  return groups;
}, {});
```

結果：

```js
{
  A: [
    { name: "Haru", team: "A" },
    { name: "Ren", team: "A" },
  ],
  B: [
    { name: "Sora", team: "B" },
  ],
}
```

初めて登場したキーでは、要素を入れる空配列を先に作ります。その後、対応する配列へ現在の要素を`push()`します。

## `sort`とは

配列の要素を並べ替えるメソッドです。ただし、`sort()`は呼び出した元配列を変更します。

```js
const numbers = [30, 5, 100];
numbers.sort();

// [100, 30, 5]
```

比較関数なしでは文字列として比較されるため、数値の並べ替えには比較関数が必要です。

```js
numbers.sort((a, b) => {
  return a - b;
});

// 昇順：[5, 30, 100]
```

```js
numbers.sort((a, b) => {
  return b - a;
});

// 降順：[100, 30, 5]
```

## 元配列を守って並べ替える

先に新しい配列を作り、そのコピーを`sort`します。

```js
const original = [30, 5, 100];
const sorted = original.slice().sort((a, b) => {
  return a - b;
});

// original: [30, 5, 100]
// sorted:   [5, 30, 100]
```

配列のスプレッド構文を学んだ後は、次の形も使えます。

```js
const sorted = [...original].sort((a, b) => a - b);
```

Unit 8では、これまで学んだ`slice()`を主に使います。

## 参照資料

- [MDN：Array.prototype.reduce()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [MDN：Array.prototype.sort()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
