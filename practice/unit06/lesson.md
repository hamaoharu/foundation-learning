# Unit 6 教材：`map`と`filter`

## 一番重要な違い

```text
map    : 各要素を別の値へ変換する
filter : 条件に合う要素だけを残す
```

## `map`

配列のすべての要素を変換し、同じ要素数の新しい配列を返します。

```js
const numbers = [1, 2, 3];

const doubled = numbers.map((number) => {
  return number * 2;
});

// doubled: [2, 4, 6]
// numbers:  [1, 2, 3]
```

コールバックが返した値が、新しい配列の要素になります。

```text
1 → return 2 → 結果へ2を追加
2 → return 4 → 結果へ4を追加
3 → return 6 → 結果へ6を追加
```

1行だけなら、`return`を省略できます。

```js
const doubled = numbers.map((number) => number * 2);
```

## `filter`

条件に合う要素だけを残した、新しい配列を返します。

```js
const numbers = [1, 2, 3, 4];

const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

// evenNumbers: [2, 4]
// numbers:     [1, 2, 3, 4]
```

コールバックが返した値をtruthy/falsyとして判定します。

```text
1 → false → 残さない
2 → true  → 2を残す
3 → false → 残さない
4 → true  → 4を残す
```

## 戻り値の違い

```js
numbers.map((number) => number * 2);
// コールバックは、結果へ入れる値を返す

numbers.filter((number) => number > 0);
// コールバックは、その要素を残すかどうかを返す
```

## オブジェクト配列の変換

```js
const users = [
  { id: 1, name: "Haru" },
  { id: 2, name: "Sora" },
];

const names = users.map((user) => user.name);
// ["Haru", "Sora"]
```

新しいオブジェクトを返す場合、丸括弧で囲むと簡潔に書けます。

```js
const labels = users.map((user) => ({
  id: user.id,
  label: user.name.toUpperCase(),
}));
```

最初は省略形を使わず、波括弧と`return`を明示しても構いません。

## コールバックの2番目の引数

`map`のコールバックは、2番目の引数で現在の添字を受け取れます。

```js
const names = ["Haru", "Sora"];

const labels = names.map((name, index) => {
  return `${index + 1}: ${name}`;
});

// ["1: Haru", "2: Sora"]
```

添字は`0`から始まるため、表示上の番号を`1`から始める場合は`index + 1`にします。

## 選び方

- 全員の名前を整形する → `map`
- 有効なユーザーだけ残す → `filter`
- 有効なユーザーだけ残して名前を整形する → `filter`の後に`map`

## 参照資料

- [MDN：Array.prototype.map()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [MDN：Array.prototype.filter()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
