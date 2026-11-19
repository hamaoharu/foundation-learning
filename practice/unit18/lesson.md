# Unit 18 教材：イベントループとキャンセル

## 1. JavaScriptの同期処理

JavaScriptは、現在実行している同期処理を上から順番に処理します。

```js
console.log("A");
console.log("B");
console.log("C");
```

表示順：

```text
A
B
C
```

関数を呼び出すと、その関数の処理がcall stackへ積まれ、完了後に呼び出し元へ戻ります。

## 2. 非同期callbackは後で実行される

timerやPromiseのcallbackは、登録したその場では実行されません。

```js
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

まず現在の同期処理が完了します。

```text
A
D
```

その後、待機している非同期callbackが実行されます。

## 3. taskとmicrotask

基礎範囲では、非同期callbackの待機場所を次の2種類に分けて考えます。

### microtask

- Promiseの`then/catch/finally` callback
- `await`より後ろの処理
- `queueMicrotask()`のcallback

### task

- `setTimeout()`のcallback
- `setInterval()`のcallback
- 一部のイベントcallback

現在の同期処理が終わった後は、基本的にtaskよりmicrotaskが先に実行されます。

```text
同期処理
↓
待機中のmicrotask
↓
次のtask
```

先ほどの表示順は：

```text
A
D
C
B
```

となります。

## 4. microtaskの追加

microtaskの中で新しいmicrotaskを登録した場合、次のtaskへ進む前にそのmicrotaskも実行されます。

```js
Promise.resolve()
  .then(() => {
    console.log("A");
  })
  .then(() => {
    console.log("B");
  });

setTimeout(() => {
  console.log("C");
}, 0);
```

表示順：

```text
A
B
C
```

## 5. async/awaitとmicrotask

`await`したPromiseがfulfilledになると、awaitより後ろの処理はmicrotaskとして再開されます。

```js
async function run() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
}

console.log("A");
run();
console.log("D");
```

`run()`は呼び出されると、最初のawaitまでは同期的に実行されます。

表示順：

```text
A
B
D
C
```

## 6. timerの0ミリ秒

```js
setTimeout(callback, 0);
```

はcallbackを今すぐ実行する意味ではありません。少なくとも現在の同期処理と、先に処理されるmicrotaskが終わった後のtaskとして実行されます。

## 7. キャンセルが必要な場面

検索欄へ素早く入力すると、古い検索と新しい検索が同時に進む場合があります。

```text
"j"で検索開始
↓
"js"で新しい検索開始
↓
古い"j"の結果が遅れて到着
↓
新しい画面を古い結果で上書きする危険
```

不要になった古い処理を中止するために`AbortController`を使えます。

## 8. AbortController

```js
const controller = new AbortController();

fetch("/api/users", {
  signal: controller.signal,
});
```

- `controller`：中止を指示する側
- `controller.signal`：中止状態を処理へ伝える側

中止するとき：

```js
controller.abort();
```

## 9. 中止エラーを区別する

fetchを中止すると、通常は`AbortError`として失敗します。

```js
try {
  const response = await fetch(url, {
    signal: controller.signal,
  });
} catch (error) {
  if (error.name === "AbortError") {
    console.log("中止しました");
    return;
  }

  throw error;
}
```

ユーザー操作による意図的な中止と、本当の通信障害を区別します。

## 10. 自作の非同期処理でsignalを使う

fetch以外でも、`signal.aborted`や`abort`イベントを確認できます。

```js
function wait(ms, signal) {
  return new Promise((resolve, reject) => {
    const timerId = setTimeout(() => {
      resolve("done");
    }, ms);

    signal.addEventListener("abort", () => {
      clearTimeout(timerId);
      reject(new DOMException("Aborted", "AbortError"));
    });
  });
}
```

この詳しい実装は後半の演習で扱います。

## 参照資料

- [MDN：JavaScriptの実行モデル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Execution_model)
- [MDN：queueMicrotask](https://developer.mozilla.org/ja/docs/Web/API/HTML_DOM_API/Microtask_guide)
- [MDN：AbortController](https://developer.mozilla.org/ja/docs/Web/API/AbortController)
- [MDN：AbortSignal](https://developer.mozilla.org/ja/docs/Web/API/AbortSignal)

