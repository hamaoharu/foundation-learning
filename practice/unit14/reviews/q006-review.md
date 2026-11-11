# Unit 14 / Q006 レビュー

## 判定

用語修正後に合格。

## 確認できたこと

- `main.mjs`の直接の依存先を判別できている
- `order-service.mjs`の直接の依存先を判別できている
- `main → order-service → order-utils`という依存方向を読めている
- 依存関係がループする状態を循環依存と説明できている
- 合計計算の変更対象を、その責務を持つ`order-utils.mjs`に限定できている

## 修正した点

- 「依存関係が複雑になる」という説明へ「循環依存」という用語を追加した
- `calculateTotal`をメソッドではなく関数として表現した

## 関連する改善

Q005の`main.mjs`も、`getPaidOrders(orders)`の結果を`paidOrders`へ保存し、件数と合計へ使い回す形に改善できた。

