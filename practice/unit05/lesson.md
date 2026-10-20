# Unit 5 教材：配列とループ

## 配列

配列は、複数の値を順番に保持するオブジェクト型です。

```js
const numbers = [10, 20, 30];

numbers[0];     // 10
numbers.length; // 3
```

## `const`と配列の変更

`const`は変数への再代入を禁止しますが、配列の中身の変更までは禁止しません。

```js
const numbers = [1, 2];
numbers.push(3); // 可能

numbers = [1, 2, 3]; // エラー
```

## 破壊的なメソッド

元の配列を変更します。

```js
const numbers = [1, 2];

numbers.push(3); // 戻り値は新しいlengthの3
// numbersは[1, 2, 3]

numbers.pop(); // 戻り値は削除した3
// numbersは[1, 2]
```

## 新しい配列を返すメソッド

`slice()`は元の配列を変更せず、新しい配列を返します。

```js
const numbers = [10, 20, 30, 40];
const selected = numbers.slice(1, 3);

// selected: [20, 30]
// numbers:  [10, 20, 30, 40]
```

終了位置の要素は含みません。

## `for...of`

配列の値を順番に扱う場合に使えます。

```js
const numbers = [10, 20, 30];
let total = 0;

for (const number of numbers) {
  total += number;
}

// total: 60
```

ループごとの`number`自体は再代入しないため`const`を使えます。累積する`total`は再代入するため`let`です。

## 最大値を自分で求める場合

空配列にも対応するなら、初期値を`null`にできます。

```js
let max = null;

for (const number of numbers) {
  if (max === null || number > max) {
    max = number;
  }
}
```

空配列ならループが一度も動かず、`max`は`null`のままです。

## 参照資料

- [MDN：配列](https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Scripting/Arrays)
- [MDN：Array](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array)

