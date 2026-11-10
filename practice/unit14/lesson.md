# Unit 14 教材：ES Modulesと責務分割

## 1. モジュールとは

モジュールは、コードをファイル単位に分け、必要な値や関数だけを他のファイルへ公開する仕組みです。

```text
user-utils.mjs
└─ ユーザーを整形する関数

main.mjs
└─ 関数を読み込み、実際のデータへ使う
```

ファイルを分けることで、次の利点があります。

- 1ファイルの役割を小さくできる
- 同じ関数を複数箇所から再利用できる
- 個別にテストしやすくなる
- 変更の影響範囲を追いやすくなる

## 2. 名前付きexport

関数や変数の前に`export`を書くと、別ファイルから名前を指定して読み込めます。

```js
// math.mjs
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}
```

定義後にまとめてexportすることもできます。

```js
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

export { add, subtract };
```

## 3. 名前付きimport

名前付きexportは、`{}`の中へ同じ名前を書いてimportします。

```js
// main.mjs
import { add, subtract } from "./math.mjs";

add(5, 3);      // 8
subtract(5, 3); // 2
```

`./`は、現在のファイルから見た相対パスです。

```text
./math.mjs
│
├─ .     現在のフォルダ
└─ /     その中の
   math.mjs
```

Node.jsのES Modulesでは、ローカルファイルの拡張子まで書くのが基本です。

```js
import { add } from "./math.mjs";
```

## 4. 別名でimportする

名前が衝突する場合などは、`as`で別名を付けられます。

```js
import { add as addNumbers } from "./math.mjs";

addNumbers(2, 3);
// 5
```

## 5. default export

モジュールの代表となる値を1つ、default exportできます。

```js
// User.mjs
export default class User {
  constructor(name) {
    this.name = name;
  }
}
```

default exportは、import側で任意の名前を付けられます。

```js
import User from "./User.mjs";
```

比較すると：

```js
// named export
import { add } from "./math.mjs";

// default export
import User from "./User.mjs";
```

基礎学習では、まず名前が一致して分かりやすいnamed exportを中心に使います。

## 6. モジュールスコープ

モジュール内で定義した変数は、自動的にグローバル変数にはなりません。

```js
// settings.mjs
const secret = "private";

export const publicValue = "public";
```

別ファイルからimportできるのは、exportした`publicValue`だけです。

```js
import { publicValue } from "./settings.mjs";
```

公開する必要がない実装詳細はexportせず、モジュール内だけで使えます。

## 7. ファイルを分ける基準

単に行数が増えたから分けるのではなく、役割で考えます。

```text
user-utils.mjs
→ ユーザーのデータを整形する

api.mjs
→ API通信を担当する

main.mjs
→ 各処理を組み合わせて実行する
```

一つの関数が複数の異なる役割を持ちすぎないようにします。

## 8. データ処理と入出力の分離

次の関数は、データの変換だけを担当しています。

```js
export function formatUser(user) {
  return {
    id: user.id,
    displayName: user.name.trim(),
  };
}
```

`console.log()`やAPI通信は別の実行側で行います。

```js
import { formatUser } from "./user-utils.mjs";

const formatted = formatUser({ id: 1, name: "  Haru  " });
console.log(formatted);
```

データ処理だけの関数は、入力と戻り値を確認しやすく、テストしやすくなります。

## 9. 依存関係

`main.mjs`が`user-utils.mjs`をimportする場合：

```text
main.mjs
  ↓ 依存
user-utils.mjs
```

`user-utils.mjs`は`main.mjs`を知らなくても動く設計が分かりやすいです。

お互いにimportし合う循環依存は、処理順や初期化を分かりにくくするため、基礎段階では避けます。

```text
a.mjs → b.mjs
  ↑       ↓
  └───────┘
```

共通処理を別のモジュールへ移すことで、循環を解消できる場合があります。

## 10. 実行方法

`.mjs`ファイルはNode.jsから実行できます。

```bash
node main.mjs
```

importされる側を直接実行する必要はありません。通常は処理の入口となる`main.mjs`を実行します。

## 参照資料

- [MDN：JavaScriptモジュール](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules)
- [MDN：export](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/export)
- [MDN：import](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/import)
