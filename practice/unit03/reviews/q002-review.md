# Unit 3 / Q002 採点結果

## 判定

8問すべて正解。

## optional chainingの戻り値

```js
const user = {};
user.profile?.name; // undefined
```

`?.`の左側が`null`または`undefined`なら、そこで停止して式全体が`undefined`になります。

```js
const user = { profile: null };
user.profile?.name; // undefined
```

一方、プロパティまで正常に到達し、その値自体が`null`なら`null`が返ります。

```js
const user = {
  profile: {
    name: null,
  },
};

user.profile?.name; // null
```

## 確認できたこと

- プロパティが未定義の場合に`?.`で安全に停止できると判断した
- `null`に対しても`?.`で安全に停止できると判断した
- `0`と空文字に対する`||`・`??`の違いを維持できている

