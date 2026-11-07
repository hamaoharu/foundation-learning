# Unit 12 教材：スコープ・クロージャ・高階関数

## 1. スコープとは

スコープは、変数や関数を参照できる範囲です。

```js
const appName = "Learning App";

function showName() {
  console.log(appName);
}
```

外側で定義された`appName`は、内側の関数から参照できます。

## 2. 関数スコープ

関数の中で定義した変数は、通常その関数の外から参照できません。

```js
function createMessage() {
  const message = "hello";
  return message;
}

console.log(message);
// ReferenceError
```

`message`が存在するのは`createMessage`の中だけです。

## 3. ブロックスコープ

`let`と`const`は、`{}`で囲まれたブロックの中だけで有効です。

```js
if (true) {
  const status = "ready";
  console.log(status); // "ready"
}

console.log(status);
// ReferenceError
```

`if`、`for`、`while`などの`{}`もブロックを作ります。

```js
for (let index = 0; index < 3; index += 1) {
  console.log(index);
}

console.log(index);
// ReferenceError
```

## 4. 外側から内側、内側から外側

内側からは外側の変数を参照できます。

```js
const outer = "外側";

function example() {
  console.log(outer); // 参照できる
}
```

外側から内側だけの変数は参照できません。

```js
function example() {
  const inner = "内側";
}

console.log(inner);
// ReferenceError
```

## 5. シャドーイング

内側で外側と同じ名前の変数を定義すると、内側では近いほうの変数が使われます。

```js
const name = "外側";

function showName() {
  const name = "内側";
  console.log(name);
}

showName();         // "内側"
console.log(name);  // "外側"
```

内側の変数が、そこでだけ外側の同名変数を隠している状態です。外側の値が書き換わったわけではありません。

## 6. レキシカルスコープ

関数がどの変数を参照できるかは、関数を**呼び出した場所**ではなく、基本的に**定義した場所**で決まります。

```js
const message = "global";

function showMessage() {
  console.log(message);
}

function run() {
  const message = "local";
  showMessage();
}

run();
// "global"
```

`showMessage`はグローバルな場所で定義されているため、そこで見える`message`を参照します。

## 7. クロージャ

関数は、定義された場所で参照できた外側の変数を、後からも利用できます。この性質をクロージャと呼びます。

```js
function createCounter() {
  let count = 0;

  return function increment() {
    count += 1;
    return count;
  };
}

const counter = createCounter();

counter(); // 1
counter(); // 2
counter(); // 3
```

`createCounter()`の実行が終わった後も、返された`increment`関数は`count`を利用できます。

別々に作ったカウンターは、別々の状態を持ちます。

```js
const counterA = createCounter();
const counterB = createCounter();

counterA(); // 1
counterA(); // 2
counterB(); // 1
```

## 8. 関数は値として扱える

JavaScriptでは、関数を変数へ入れたり、引数として渡したり、戻り値として返したりできます。

```js
function greet(name) {
  return `Hello, ${name}`;
}

const greetFunction = greet;

greetFunction("Haru");
// "Hello, Haru"
```

## 9. コールバック関数

別の関数へ渡され、必要なタイミングで呼び出される関数をコールバック関数と呼びます。

```js
function execute(value, callback) {
  return callback(value);
}

function double(number) {
  return number * 2;
}

execute(5, double);
// 10
```

ここでは`double`を実行せず、関数そのものとして渡します。

```js
execute(5, double);   // 関数を渡す
execute(5, double()); // 先に実行した結果を渡すため別の意味
```

## 10. 高階関数

次のどちらかに当てはまる関数を高階関数と呼びます。

- 関数を引数として受け取る
- 関数を戻り値として返す

`map()`や`filter()`も、コールバック関数を受け取る高階関数です。

```js
const doubled = [1, 2, 3].map((number) => {
  return number * 2;
});
```

関数を返す例です。

```js
function createMultiplier(multiplier) {
  return function multiply(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5); // 10
triple(5); // 15
```

返された関数は、外側の引数`multiplier`をクロージャとして利用しています。

## 参照資料

- [MDN：スコープ](https://developer.mozilla.org/ja/docs/Glossary/Scope)
- [MDN：クロージャ](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Closures)
- [MDN：関数](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Functions)
- [MDN：コールバック関数](https://developer.mozilla.org/ja/docs/Glossary/Callback_function)
