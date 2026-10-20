# Unit 4 / Q001 採点結果

## 判定

8問中7問正解。

## 不正解

H：

```js
"a-b-c".replace("-", "/"); // "a/b-c"
```

文字列を検索値として渡した通常の`replace`は、最初に一致した部分だけを置換します。

すべて置換する場合：

```js
"a-b-c".replaceAll("-", "/"); // "a/b/c"
```

## 確認できたこと

- `trim`、`toLowerCase`、`includes`、`slice`の結果と型を判断できた
- `split`が配列を返すと判断できた
- `join`が文字列を返すと判断できた
- `replace`と`replaceAll`の違いは追加確認が必要

