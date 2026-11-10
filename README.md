# JavaScript Foundation Learning

JavaScriptの基礎知識と自力実装力を、初期診断から段階的に補強する学習記録です。

React・TypeScript・Next.jsを使った開発経験はある一方、AIによるコード生成へ依存し、JavaScriptの基礎を自分で説明・実装する力に不安がありました。そこで、完成物を増やす前に、知識の抜けと実装経験を体系的に確認する目的で開始しました。

## 現在の進捗

- 学習開始：2026-10-08
- 完了：Unit 1〜13
- 進行中：Unit 14「ES Modules・責務分割」
- 全体：13 / 25 Unit完了（52%）

詳細は[学習進捗](./practice/progress.md)を参照してください。

## 学習による変化

開始時診断では、配列メソッド、参照とコピー、非同期処理、DOM、API通信などに大きな不足がありました。

現在までに、次の内容をコード読解・実装・修正を通して確認しています。

- 値、型、比較、truthy / falsy
- 配列・文字列・オブジェクト操作
- `map`・`filter`・`reduce`・検索系配列メソッド
- 参照、浅いコピー、非破壊更新
- `Set`・`Map`・JSON
- スコープ、クロージャ、コールバック、高階関数
- `this`、クラス、継承、プロトタイプ

間違えた内容は消さず、回答・レビュー・修正過程を残しています。理解できた説明だけで完了とせず、後続Unitの問題へ過去単元を組み込み、再び自力で使えるか確認します。

## リポジトリ構成

```text
diagnostic/     学習開始時の実力診断
assessment/     診断時点の単元別評価
learning-plan/  全25 Unitの学習計画
practice/       教材、問題、自分の回答、レビュー
```

各Unitは次の構成です。

```text
practice/unitXX/
├─ README.md   学習項目と完了条件
├─ lesson.md   教材
├─ questions/  問題
├─ answers/    回答コード・回答文
└─ reviews/    採点結果と要復習事項
```

## 学習方法

1. Unitの教材から、その問題に必要な範囲を読む
2. 原則として自分でコードを書く
3. 実行して動作を確認する
4. レビューで、正しさ・理解不足・実装経験不足を区別する
5. 解説後は類題や後続Unitで再確認する
6. 合格した問題ごとにコミットする

資料やヒントを参照した場合は、レビュー上で自力回答と区別しています。

## AIの利用方針

AIを次の用途で利用しています。

- カリキュラムと問題の作成
- 回答コードのレビュー
- 間違いの解説
- 弱点に応じた類題と復習計画の調整

回答コードは原則として学習者が実装・修正し、ガイドや解答を参照した場合はレビューへ記録しています。AIの解説を読んだだけでは習得済みにせず、類題を自力で解けるか確認しています。

このリポジトリは「AIを使わなかった証明」ではなく、AIを教育支援として使いながら、自分で説明・実装できる範囲を増やす過程の記録です。

## 実行方法

多くの回答はNode.jsで個別に実行できます。

```bash
node practice/unit06/answers/q001-answer.js
```

ES Modulesの課題は`.mjs`の実行ファイルを指定します。

```bash
node practice/unit14/answers/q001/main.mjs
```

## 記録を読む際の注意

- [`assessment/final-assessment.md`](./assessment/final-assessment.md)は学習開始時点の診断結果であり、現在の評価ではありません。
- 回答には、初回の誤りやガイド後に完成したものも含まれます。
- 現在の到達状況は[`practice/progress.md`](./practice/progress.md)を基準にしています。

## 参照資料

- [MDN Web Docs](https://developer.mozilla.org/ja/docs/Web/JavaScript)
- [JavaScript Primer](https://jsprimer.net/)
- ECMAScript仕様（必要な項目の確認に使用）
