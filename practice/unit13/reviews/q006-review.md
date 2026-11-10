# Unit 13 / Q006 レビュー

## 判定

合格。

## 確認できたこと

- `extends User`で親クラスを継承できている
- 派生クラスの`constructor`で`this`を使う前に`super(name, role)`を呼べている
- 親の`constructor`によって`name`と`role`を初期化できている
- 派生クラス固有の`permissions`を保存できている
- `includes()`で権限の有無を真偽値として返せている
- 親の`getIntroduction()`を再定義せずに利用できる

## 評価

クラス継承、`super()`、追加プロパティ、追加メソッドの基本を自力実装できた。
