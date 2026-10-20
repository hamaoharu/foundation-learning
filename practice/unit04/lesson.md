# Unit 4 教材：文字列メソッド

文字列メソッドは、元の文字列を変更せず、新しい値を返します。文字列はイミュータブルです。

## `trim()`

前後の空白を削除し、文字列を返します。

```js
"  Alice  ".trim(); // "Alice"
```

## `toLowerCase()`・`toUpperCase()`

大文字・小文字を変換した文字列を返します。

```js
"Hello".toLowerCase(); // "hello"
"Hello".toUpperCase(); // "HELLO"
```

メソッドは続けて呼べます。

```js
"  ALICE  ".trim().toLowerCase(); // "alice"
```

## `includes()`

指定した文字列を含むかbooleanで返します。

```js
"JavaScript".includes("Script"); // true
```

大文字・小文字は区別されます。

## `slice()`

文字列の一部を切り出し、文字列を返します。終了位置は含みません。

```js
"JavaScript".slice(0, 4); // "Java"
```

## `replace()`

一致した部分を置き換えた文字列を返します。

```js
"hello world".replace("world", "JavaScript");
// "hello JavaScript"
```

文字列を渡した通常の`replace`は、最初の一致だけを置き換えます。

## `split()`

文字列を区切り文字で分割し、配列を返します。

```js
"red,green,blue".split(",");
// ["red", "green", "blue"]
```

## `join()`

配列の要素を結合し、文字列を返します。これは配列メソッドです。

```js
["red", "green", "blue"].join("-");
// "red-green-blue"
```

## テンプレートリテラル

バッククォートと`${}`で値を埋め込みます。

```js
const firstName = "Taro";
const lastName = "Yamada";

`${firstName} ${lastName}`; // "Taro Yamada"
```

## 戻り値の整理

| 操作 | 戻り値 |
|---|---|
| `trim()` | 文字列 |
| `toLowerCase()` | 文字列 |
| `toUpperCase()` | 文字列 |
| `includes()` | boolean |
| `slice()` | 文字列 |
| `replace()` | 文字列 |
| `split()` | 配列 |
| `join()` | 文字列 |

## 参照資料

- [MDN：String](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String)
- [MDN：便利な文字列メソッド](https://developer.mozilla.org/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods)

