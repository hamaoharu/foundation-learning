# Unit 17 教材：async/awaitと並行処理

## 1. async/awaitとは

async/awaitは、Promiseを普通の処理順に近い見た目で扱うための構文です。

Promise chain：

```js
fetchUser()
  .then((user) => {
    return user.name;
  })
  .then((name) => {
    console.log(name);
  });
```

async/await：

```js
async function printUserName() {
  const user = await fetchUser();
  const name = user.name;
  console.log(name);
}
```

見た目は同期処理に近くなりますが、内部でPromiseを扱っています。

## 2. async関数は必ずPromiseを返す

`async`を付けた関数の戻り値は、必ずPromiseです。

```js
async function getNumber() {
  return 5;
}

const result = getNumber();
// resultは5ではなくPromise
```

`return 5`は、そのasync関数が返すPromiseの成功値を`5`にします。

```js
getNumber().then((value) => {
  console.log(value); // 5
});
```

概念的には次に近い動作です。

```js
function getNumber() {
  return Promise.resolve(5);
}
```

## 3. awaitで成功値を受け取る

`await`はPromiseの結果が決まるのを待ち、fulfilledになった成功値を取り出します。

```js
async function showNumber() {
  const value = await Promise.resolve(5);
  console.log(value); // 5
}
```

```text
Promise.resolve(5)
↓ await
成功値5を取り出す
↓
valueに5を代入
```

通常、`await`はasync関数内で使います。

## 4. 複数のawait

前の結果が次に必要なら、順番にawaitします。

```js
async function getUserPosts() {
  const user = await fetchUser();
  const posts = await fetchPosts(user.id);

  return posts;
}
```

`fetchPosts`には`user.id`が必要なので、2つの処理は順番に行う必要があります。

## 5. rejected Promiseとtry/catch

awaitしたPromiseがrejectedになると、その場所で例外がthrowされたように動きます。

```js
async function loadUser() {
  try {
    const user = await fetchUser();
    return user;
  } catch (error) {
    return {
      error: error.message,
    };
  }
}
```

Promise chainの`catch()`に相当する処理を、通常の`try/catch`で書けます。

## 6. finally

async/awaitでも、通常の`try/catch/finally`を使います。

```js
async function loadData(logs) {
  try {
    return await fetchData();
  } catch (error) {
    return null;
  } finally {
    logs.push("end");
  }
}
```

成功・失敗のどちらでも`finally`が実行されます。

## 7. 逐次実行

次のコードは1つ目が終わってから2つ目を開始します。

```js
const user = await fetchUser();
const settings = await fetchSettings();
```

処理同士が独立していても、この書き方では逐次実行です。

```text
fetchUser開始 → 完了
                  ↓
              fetchSettings開始 → 完了
```

## 8. 独立処理の並行実行

互いの結果を必要としない処理は、先に両方のPromiseを作れます。

```js
const userPromise = fetchUser();
const settingsPromise = fetchSettings();

const user = await userPromise;
const settings = await settingsPromise;
```

より一般的には`Promise.all()`を使います。

```js
const [user, settings] = await Promise.all([
  fetchUser(),
  fetchSettings(),
]);
```

両方がfulfilledになると、同じ順番の配列で成功値を受け取れます。

```text
Promise.allへ渡した順番：fetchUser, fetchSettings
結果の順番：              user,      settings
```

完了した時間順ではなく、渡したPromiseの順番です。

## 9. Promise.allの失敗

渡したPromiseのどれか1つがrejectedになると、`Promise.all()`もrejectedになります。

```js
try {
  const results = await Promise.all([
    fetchUser(),
    fetchSettings(),
  ]);
} catch (error) {
  console.error(error.message);
}
```

## 10. よくある間違い

### awaitを忘れる

```js
async function loadUser() {
  const user = fetchUser();
  console.log(user.name); // userはPromise
}
```

```js
const user = await fetchUser();
```

### async関数の戻り値を通常の値だと思う

```js
const value = getNumber();
// valueはPromise
```

### 独立処理を不要に逐次実行する

```js
const a = await fetchA();
const b = await fetchB();
```

互いに依存しない場合は`Promise.all()`を検討します。

## 参照資料

- [MDN：async function](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN：await](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/await)
- [MDN：Promise.all](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
- [JavaScript Primer：Async Function](https://jsprimer.net/basic/async/)

