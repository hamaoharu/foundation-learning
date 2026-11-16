# Unit 16 教材：Promiseの基礎

## 1. Promiseとは

Promiseは、「今すぐには結果が決まらない処理の、将来の成功値または失敗理由」を表すオブジェクトです。

```js
const promise = fetch("/api/users");
```

通信結果はすぐには得られませんが、`promise`を通して後から結果を扱えます。

## 2. Promiseの3状態

Promiseは次のいずれかの状態を持ちます。

```text
pending   結果待ち
   ↓
fulfilled 成功して値が決まった

または

pending   結果待ち
   ↓
rejected  失敗して理由が決まった
```

一度fulfilledまたはrejectedになると、別の状態へ変わりません。

## 3. 成功済み・失敗済みのPromise

`Promise.resolve(value)`は、指定した値でfulfilledになったPromiseを返します。

```js
const promise = Promise.resolve(10);
```

`Promise.reject(reason)`は、指定した理由でrejectedになったPromiseを返します。

```js
const promise = Promise.reject(new Error("failed"));
```

どちらも戻り値は通常の値ではなくPromiseです。

## 4. `then()`で成功値を受け取る

fulfilledになった値は`then()`のcallbackへ渡されます。

```js
Promise.resolve(10).then((value) => {
  console.log(value); // 10
});
```

`then()`自体も新しいPromiseを返します。

```js
const firstPromise = Promise.resolve(10);

const secondPromise = firstPromise.then((value) => {
  return value * 2;
});
```

callbackが`20`をreturnすると、`secondPromise`は最終的に`20`でfulfilledになります。

```text
firstPromise
fulfilled: 10
    ↓ thenのcallbackへ10
return 20
    ↓
secondPromise
fulfilled: 20
```

## 5. Promise chain

`then()`が新しいPromiseを返すため、処理をつなげられます。

```js
Promise.resolve(5)
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    return value + 1;
  })
  .then((value) => {
    console.log(value); // 11
  });
```

各callbackのreturnが、次の`then()`で受け取る値になります。

## 6. `catch()`で失敗を受け取る

rejectedになった理由は`catch()`で受け取れます。

```js
Promise.reject(new Error("failed"))
  .catch((error) => {
    console.log(error.message); // "failed"
  });
```

`then()`の中でthrowされた例外も、後続の`catch()`へ伝わります。

```js
Promise.resolve(10)
  .then(() => {
    throw new Error("processing failed");
  })
  .catch((error) => {
    console.log(error.message);
  });
```

## 7. `catch()`後の回復

`catch()`から値をreturnすると、その後のchainは成功として続きます。

```js
Promise.reject(new Error("failed"))
  .catch(() => {
    return 0;
  })
  .then((value) => {
    console.log(value); // 0
  });
```

## 8. `finally()`

Promiseの`finally()`は、成功・失敗のどちらでも実行されます。

```js
Promise.resolve("done")
  .finally(() => {
    console.log("cleanup");
  });
```

通常、`finally()`は値を加工する場所ではなく、ローディング解除などの後処理に使います。

## 9. callbackでreturnを忘れない

波括弧付きのcallbackでは、次へ渡す値を明示的にreturnします。

```js
Promise.resolve(5)
  .then((value) => {
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 10
  });
```

returnを忘れると、次の`then()`へ渡る値は`undefined`です。

```js
Promise.resolve(5)
  .then((value) => {
    value * 2;
  })
  .then((value) => {
    console.log(value); // undefined
  });
```

## 10. 実行順の最小知識

Promiseがすでにfulfilledでも、`then()`のcallbackは現在実行中の同期処理が終わった後に実行されます。

```js
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");
```

表示順：

```text
A
C
B
```

詳しいevent loopとmicrotaskはUnit 18で扱います。

## 参照資料

- [MDN：Promise](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN：Promiseの使用](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises)
- [JavaScript Primer：Promiseを活用する](https://jsprimer.net/basic/async/)

