# Unit 2 教材：型変換とtruthy/falsy

## 1. 値には型がある

```js
0      // number
"0"    // string
false  // boolean
```

見た目が似ていても別の型です。

```js
0 === "0"; // false
```

`===`は、型を勝手に変換せずに比較します。通常の実装では`==`ではなく`===`を使います。

## 2. 明示的な型変換

```js
Number("20");  // 20
String(20);     // "20"
Boolean(1);     // true
```

フォームの入力値は、数字を入力しても基本的に文字列です。数値計算を行う前に`Number`で変換します。

```js
const input = "20";

input + 5;         // "205"
Number(input) + 5; // 25
```

## 3. truthyとfalsy

`if`の条件はbooleanへ変換して判定されます。

代表的なfalsy値：

```js
false
0
-0
0n
""
null
undefined
NaN
```

それ以外の値は基本的にtruthyです。次の値もtruthyです。

```js
"0"
"false"
" "
[]
{}
```

文字列`"0"`は空文字ではないためtruthyですが、数値`0`はfalsyです。

## 4. `||`と`&&`

`||`は、左側がtruthyなら左側、falsyなら右側を返します。

```js
"Alice" || "ゲスト"; // "Alice"
"" || "ゲスト";      // "ゲスト"
0 || 10;              // 10
```

`&&`は、左側がfalsyなら左側、truthyなら右側を返します。

```js
true && "表示";  // "表示"
false && "表示"; // false
```

これらは必ずbooleanを返すわけではなく、評価した値そのものを返します。

## 参照資料

- [JavaScript Primer：暗黙的な型変換](https://jsprimer.net/basic/implicit-coercion/)
- [MDN：Truthy](https://developer.mozilla.org/ja/docs/Glossary/Truthy)
- [MDN：Falsy](https://developer.mozilla.org/ja/docs/Glossary/Falsy)

