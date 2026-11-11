# Unit 14 / Q007 レビュー

## 判定

default export修正後に合格。Unit 14完了。

## 確認できたこと

- `filter`で完了タスクを非破壊で抽出できている
- 完了件数・全件数・完了率を正しく計算できている
- 0件の場合にゼロ除算を避け、`0%`を返せている
- 名前付きexport/importとdefault export/importを使い分けられている
- `main → task-service → utils`の依存方向を守れている
- `console.log()`を実行入口の`main.mjs`だけに置けている
- 通常ケース、空配列、元配列の非変更を実行確認できた

## 修正した点

初回は`createProgressReport`を名前付きexportしながら、利用側でdefault importしていたため、モジュール読み込み時に`SyntaxError`となった。

export側をdefault exportへ修正し、import形式と一致させた。

## Unit 14の評価

小問ではnamed/default export、別名import、モジュールスコープを確認した。複合課題では中間結果の受け渡しに修正が必要だったが、最終課題では責務と依存方向を保った4ファイル構成をほぼ自力で実装できた。

モジュールの基本実装は到達。今後は、export/importの形式をエラーメッセージから特定する経験を積みながら定着させる。

