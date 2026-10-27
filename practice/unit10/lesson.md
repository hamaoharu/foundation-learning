# Unit 10 教材：参照・コピー・イミュータブルな更新

## 1. プリミティブ値の代入

数値・文字列・真偽値などのプリミティブ値を代入すると、値がコピーされます。

```js
let original = 10;
let copied = original;

copied = 20;

console.log(original); // 10
console.log(copied);   // 20
```

`copied`を変更しても、`original`には影響しません。

## 2. オブジェクトの代入と参照共有

オブジェクトを別の変数へ代入しても、オブジェクト自体はコピーされません。2つの変数が同じオブジェクトを参照します。

```js
const original = { name: "Haru" };
const another = original;

another.name = "Aki";

console.log(original.name); // "Aki"
```

`original`と`another`は同じオブジェクトを見ています。

配列もオブジェクトの一種なので、同じことが起こります。

```js
const original = [1, 2];
const another = original;

another.push(3);

console.log(original); // [1, 2, 3]
```

## 3. `===`と参照

オブジェクト同士の`===`は、中身ではなく同じオブジェクトかを比較します。

```js
const a = { id: 1 };
const b = a;
const c = { id: 1 };

console.log(a === b); // true
console.log(a === c); // false
```

`a`と`c`は中身が同じでも、別々に作られたオブジェクトです。

## 4. スプレッド構文による浅いコピー

オブジェクトを新しく作るには、スプレッド構文を使えます。

```js
const user = {
  id: 1,
  name: "Haru",
};

const copiedUser = { ...user };
```

`copiedUser`は、`user`とは別のオブジェクトです。

```js
console.log(user === copiedUser); // false
```

コピーしながら一部を更新できます。

```js
const renamedUser = {
  ...user,
  name: "Aki",
};
```

後ろに書いたプロパティが、前の値を上書きします。

```js
console.log(user.name);        // "Haru"
console.log(renamedUser.name); // "Aki"
```

元の`user`を変更しないこのような更新を、イミュータブルな更新と呼びます。

## 5. 配列の浅いコピー

配列もスプレッド構文でコピーできます。

```js
const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];
```

要素を追加した新しい配列も作れます。

```js
const addedNumbers = [...numbers, 4];

console.log(numbers);      // [1, 2, 3]
console.log(addedNumbers); // [1, 2, 3, 4]
```

`slice()`も、引数なしで使うと配列の浅いコピーを返します。

```js
const copiedNumbers = numbers.slice();
```

## 6. 浅いコピーの注意点

スプレッド構文でコピーされるのは、最上位の1階層だけです。

```js
const user = {
  name: "Haru",
  profile: {
    city: "Tokyo",
  },
};

const copiedUser = { ...user };

console.log(user === copiedUser);                 // false
console.log(user.profile === copiedUser.profile); // true
```

外側のオブジェクトは別ですが、内側の`profile`は共有されています。

```js
copiedUser.profile.city = "Osaka";

console.log(user.profile.city); // "Osaka"
```

## 7. ネストした値を変更せずに更新する

変更する階層もコピーします。

```js
const movedUser = {
  ...user,
  profile: {
    ...user.profile,
    city: "Osaka",
  },
};
```

この場合は、外側の`user`と内側の`profile`の両方が新しく作られます。

```js
console.log(user.profile.city);      // "Tokyo"
console.log(movedUser.profile.city); // "Osaka"
```

すべてを無条件にコピーするのではなく、変更する場所までの経路をコピーするのが基本です。

## 8. `structuredClone()`

対応している実行環境では、`structuredClone()`でネストしたデータを深くコピーできます。

```js
const copiedUser = structuredClone(user);
```

ただし、関数などコピーできない値もあります。普段の部分更新ではスプレッド構文を使い、独立したデータ全体の複製が必要な場合に`structuredClone()`を検討します。

## 参照資料

- [MDN：オブジェクト初期化子（スプレッドプロパティ）](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E3%82%B9%E3%83%97%E3%83%AC%E3%83%83%E3%83%89%E3%83%97%E3%83%AD%E3%83%91%E3%83%86%E3%82%A3)
- [MDN：スプレッド構文](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
- [MDN：structuredClone()](https://developer.mozilla.org/ja/docs/Web/API/Window/structuredClone)
