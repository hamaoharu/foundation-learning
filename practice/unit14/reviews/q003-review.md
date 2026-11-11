# Unit 14 / Q003 レビュー

## 判定

軽微な出力修正後に合格。

## 確認できたこと

- 関数をdefault exportできている
- 定数を名前付きexportできている
- default exportを元の関数名とは異なる`createProductLabel`でimportできている
- default importと名前付きimportを1つのimport文へ書けている
- 同じモジュール内の`taxRate`を関数から参照できている

## 修正した点

初回は出力が`Keyboard: 5500`となり、仕様にある`円`が不足していた。テンプレートリテラルへ`円`を追加し、期待結果へ修正できた。

## 書式上の補足

`{ taxRate }`のように波括弧の内側へ空白を入れるのが一般的だが、動作や合否には影響しない。

