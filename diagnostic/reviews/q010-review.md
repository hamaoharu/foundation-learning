# Q010 採点結果

## 質問1：実行環境

```text
Array    : 言語（ECMAScript）
document : ブラウザ（DOM API）
fetch    : ブラウザのWeb APIとして普及。現在はNode.jsも提供する
process  : Node.js
node:fs  : Node.js
Promise  : 言語（ECMAScript）
```

ECMAScriptは言語の構文と標準オブジェクトを定義し、DOMやファイル操作などは実行環境が提供します。

## 質問2：ES Modules

回答にはexport/importの形が現れており、名前付きexportの存在は認識できています。ただし、`math.js`内で`add`を定義しておらず、相対パスの`./`も不足しています。

```js
// math.js
export function add(a, b) {
  return a + b;
}
```

```js
// app.js
import { add } from "./math.js";
```

## 質問3：Node.jsとnpm

`package.json`を管理用ファイルと捉えた点は部分的に正解です。プロジェクト情報、依存パッケージ、scripts、モジュール形式などを記録します。

`npm run test`は、通常`package.json`の`scripts.test`に定義されたコマンドを実行します。

## 質問4：デバッグ

エラー行と`name`プロパティを最初に確認する方針は正しいです。さらに次を確認します。

1. スタックトレース先頭の`app.js:12:24`を開く
2. `.name`の直前にある値が何か特定する
3. breakpointまたはログで、その値が`undefined`になることを確認する
4. 呼び出し元`showUser`の`app.js:25:18`で渡した引数を確認する
5. 値が生成された場所まで遡り、未取得・検索失敗・引数の渡し忘れなどを特定する

## 質問5：テスト

3件とも適切です。

- 通常の整数除算：`divide(4, 2)` → `2`
- 結果が小数になる除算：`divide(1, 5)` → `0.2`
- 異常系：`divide(2, 0)` → `Error("zero division")`

## 暫定所見

- 実行環境の区別：知識不足
- ES Modules：構文を部分的に認識しているが、自力実装は不安定
- package.json：部分理解
- npm scripts：知識不足
- デバッグ：初動の方向性は理解。具体的な値の追跡手順は不足
- テスト観点：基本的な正常系・異常系を選べる

