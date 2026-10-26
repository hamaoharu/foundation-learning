# Unit 9 / Q007 レビュー

## 判定

合格（2回の修正後、全ケース合格）

## 修正後の確認

- `reduce`の結果を`counts`へ保存：合格
- 動的キーの現在件数へ`?? 0`を適用：合格
- 各周回でaccumulatorを返す：合格
- `Object.entries()`と`map`：合格
- 配列の分割代入：合格
- 通常・空配列・1種類・重複：合格
- 元配列の非変更：合格

## 正しくできている点

- 動的キーとして`counts[vote]`を使おうとしている
- `Object.entries(counts)`と`map`を選べている
- コールバック引数で`[key, value]`を分割代入している
- 表示文字列の形式は正しい
- 最後に`{ counts, labels }`を返す設計は正しい

## 必須の修正

### 1. `reduce`全体の戻り値を`counts`へ保存する

`reduce`は最後のaccumulatorを返す。後続処理で使うため、呼び出し結果を変数へ代入する必要がある。

```text
const counts = votes.reduce(...);
```

### 2. 現在件数へ先にデフォルト値を適用する

現在の式：

```js
counts[vote] + 1 ?? 0
```

初登場時は`undefined + 1`が先に計算されて`NaN`になる。`NaN`はnullishではないため、`?? 0`では0にならない。

必要な順番：

```text
現在件数がundefinedなら0
↓
その値へ1を足す
```

括弧で、どこへ`?? 0`を適用するか明示する。

### 3. コールバックから`counts`を返す

現在は、`return`の直後で改行している。

```js
return
```

JavaScriptの自動セミコロン挿入により、これは`return;`として扱われ、`undefined`を返す。次の周回ではaccumulatorが`undefined`になってエラーになる。

同じ行または直後に返す値を書く。

```text
return counts;
```

## 実行結果

```text
TypeError: Cannot read properties of undefined
```

## 原因の分類

- 知識不足：`??`の適用順序
- 実装経験不足：`reduce`結果の変数保存
- 構文上の注意：`return`直後の改行

## 次の完了条件

- `reduce`全体を`counts`へ代入する
- 初登場を0としてから1増やす
- 各周回で`counts`を返す
- 空配列で`{ counts: {}, labels: [] }`を返す
- 元配列を変更しない

すべて達成した。ただし、`reduce`構文の想起には指摘が必要だったため、後続Unitでも累積復習する。
