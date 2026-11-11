# Unit 14 / Q002 レビュー

## 判定

修正なしで合格。

## 確認できたこと

- 1つのファイルから複数の関数を名前付きexportできている
- 1つのimport文で複数の名前付きexportを読み込めている
- `formatYen as toYenLabel`によってimport時に別名を付けられている
- importした2つの関数を組み合わせ、`1100円`を出力できている
- 計算・整形・出力の責務をファイル間で分けられている

## 書式上の補足

次のように波括弧の内側へ空白を入れる書式が一般的。

```js
import { addTax, formatYen as toYenLabel } from "./price-utils.mjs";
```

これは動作や正しさの問題ではなく、フォーマッターやチームの規約によって統一される部分。

