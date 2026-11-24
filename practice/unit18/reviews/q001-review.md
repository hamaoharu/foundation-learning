# Unit 18 / Q001 レビュー

## 判定

合格

## 確認できたこと

- 実行順を `A → D → C → B` と判断できた
- `A` と `D` が同期処理であることを区別できた
- Promiseのコールバックがmicrotask、`setTimeout`のコールバックがtaskとして処理されることを説明できた

## 補足

microtaskになるのは `.then` という記述自体ではなく、`.then` に渡したコールバックです。

```js
Promise.resolve().then(() => console.log("C"));
```

この例では `() => console.log("C")` がmicrotaskとして予約されます。現在実行中の同期処理がすべて終わった後、taskより先に実行されます。

