# Unit 11 教材：Set・Map・JSON

## 1. `Set`

`Set`は、同じ値を重複して保持しないコレクションです。

```js
const tags = new Set();

tags.add("JavaScript");
tags.add("React");
tags.add("JavaScript");

console.log(tags);
// Set(2) { "JavaScript", "React" }
```

基本操作は次のとおりです。

```js
tags.has("React");      // true
tags.delete("React");  // 削除できればtrue
tags.size;              // 要素数。メソッドではなくプロパティ
tags.clear();           // 全削除
```

### 配列から重複を除く

配列を`Set`へ渡すと、重複が除かれます。

```js
const values = ["a", "b", "a"];
const uniqueSet = new Set(values);
```

スプレッド構文で再び配列にできます。

```js
const uniqueValues = [...uniqueSet];
// ["a", "b"]
```

まとめて書くこともできます。

```js
const uniqueValues = [...new Set(values)];
```

## 2. `Map`

`Map`は、キーと値の組を保存します。

```js
const users = new Map();

users.set(1, "Haru");
users.set(2, "Aki");

users.get(1); // "Haru"
users.has(2); // true
users.size;   // 2
```

同じキーへ`set()`すると値を更新します。

```js
users.set(1, "Haru Updated");
```

削除もできます。

```js
users.delete(2);
users.clear();
```

### Objectとの違い

通常のオブジェクトでは、プロパティキーは文字列またはSymbolです。

```js
const counts = {};
counts["done"] = 2;
```

`Map`では、数値やオブジェクトなどもそのままキーにできます。

```js
const map = new Map();
const user = { id: 1 };

map.set(user, "online");
map.get(user); // "online"
```

まずは次の目安で十分です。

- 固定した項目を持つデータ：Object
- キーと値を頻繁に追加・削除する辞書：Map
- 重複のない値の集合：Set

## 3. `Map`の繰り返し

`Map`は`for...of`でキーと値を取り出せます。

```js
const scores = new Map([
  ["Haru", 80],
  ["Aki", 90],
]);

for (const [name, score] of scores) {
  console.log(name, score);
}
```

`Map`から配列への変換にはスプレッド構文を使えます。

```js
const entries = [...scores];
// [["Haru", 80], ["Aki", 90]]
```

## 4. JSON

JSONは、データを文字列として受け渡すための形式です。API通信やファイル保存でよく使います。

JavaScriptのオブジェクトとJSON文字列は別のものです。

```js
const user = { id: 1, name: "Haru" }; // オブジェクト
const json = '{"id":1,"name":"Haru"}'; // 文字列
```

### JavaScriptの値からJSON文字列へ

```js
const json = JSON.stringify(user);

console.log(typeof json); // "string"
```

### JSON文字列からJavaScriptの値へ

```js
const parsed = JSON.parse(json);

console.log(parsed.name); // "Haru"
```

`JSON.parse()`は元のオブジェクトを復元するのではなく、JSONの内容から新しい値を作ります。

## 5. JSONの注意点

JSONはJavaScriptのすべての値を表現できるわけではありません。

オブジェクト内の`undefined`や関数などは、`JSON.stringify()`で省略されます。

```js
JSON.stringify({
  name: "Haru",
  value: undefined,
  greet() {},
});
// '{"name":"Haru"}'
```

`Date`は通常文字列になります。変換後に元の`Date`オブジェクトへ自動では戻りません。

不正なJSONを`JSON.parse()`すると例外が発生します。

```js
JSON.parse("not json");
// SyntaxError
```

例外処理は後のUnitで詳しく扱います。現時点では、外部から来た文字列の解析は失敗する可能性があると理解してください。

## 参照資料

- [MDN：Set](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [MDN：Map](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [MDN：JSON.stringify()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [MDN：JSON.parse()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
