# Q008 採点結果

## 質問1

正しい表示順と内容は次のとおりです。

```text
A
B
C 80
D failed
E
```

大まかな順番は正解です。

`showScore()`を呼ぶと、最初の`await`までは同期的に実行されるため、`B`はすぐに表示されます。`await`以降はPromiseの処理として後で再開されます。Promiseの処理は、`setTimeout`のcallbackより先に実行されるため、`C`と`D`の後に`E`が表示されます。

## 質問2

`showScore()`の戻り値はPromiseです。

`async`関数は、明示的にPromiseを書いていなくても必ずPromiseを返します。この関数はエラーを内部でcatchして正常に終了するため、最終的には`undefined`でfulfilledになるPromiseを返します。

## 質問3

`getScore()`が返すPromiseがrejectされると、`await getScore()`の位置で例外が発生したように扱われ、同じ`try`文の`catch`で処理されます。

```js
} catch (error) {
  console.log("D", error.message);
}
```

## 暫定所見

- 同期コードと非同期コードの大まかな実行順：部分的に判断できる
- `async`関数の戻り値：知識不足
- Promiseのresolve/reject：知識不足
- `await`と例外処理：知識不足
- microtaskとtimer：説明できる状態かは未確認だが、再学習対象に含める

