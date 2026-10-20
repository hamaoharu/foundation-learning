# Q006 採点結果

## 結果

2件のテストはいずれも実行時エラーになりました。

```text
TypeError: user.email.split(...).toLowerCase is not a function
```

## 問題点

### `split()`と`trim()`の混同

`split()`は文字列を分割して配列にするメソッドです。前後の空白を削除するのは`trim()`です。

```js
"  Taro  ".trim(); // "Taro"
```

`split()`の戻り値は配列なので、文字列用の`toLowerCase()`を直接呼べません。

### 変数宣言がない

```js
id = user.id;
```

`const`や`let`がありません。ES Modulesなどのstrict modeでは`ReferenceError`になります。

### オブジェクトを作って返していない

関数の仕様は、整形済みの新しいオブジェクトを返すことです。現在の関数には`return`がありません。

## 修正版

```js
function formatUser(user) {
  return {
    id: user.id,
    displayName: `${user.firstName.trim()} ${user.lastName.trim()}`,
    email: user.email.trim().toLowerCase(),
  };
}
```

## 暫定所見

- オブジェクトのプロパティ参照：一部できる
- 文字列メソッド：知識不足
- 新しいオブジェクトの生成：実装が不安定
- 関数の戻り値：Q003に続いて欠落
- 変数宣言：実装時に抜ける

