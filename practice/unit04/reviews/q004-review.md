# Unit 4 / Q004 初回採点結果

## 判定

4ケース中1ケース合格。修正が必要。

## できていたこと

- `trim()`・`toLowerCase()`・`replaceAll()`によるslug生成
- 本文の前後空白の削除
- `.length`による長さの確認
- `slice()`とテンプレートリテラルを使う構成
- `includes()`を使う構成
- 新しいプレーンオブジェクトの返却

## 1. previewの条件が逆

現在：

```js
const preview = trimedBody.length >= 20
  ? trimedBody
  : `${trimedBody.slice(0, 20)}...`;
```

これでは20文字以上をそのまま返し、短い本文に`...`を付けます。

仕様は次のとおりです。

- 20文字以下：そのまま
- 20文字を超える：先頭20文字＋`...`

したがって条件は`trimmedBody.length <= 20`です。

## 2. 大文字・小文字を揃えていない

現在：

```js
trimedBody.includes(keyword);
```

`includes()`は大文字・小文字を区別します。両方を同じ形式へ変換してから検索します。

```js
trimmedBody.toLowerCase().includes(keyword.toLowerCase());
```

## 3. 変数名のスペル

`trimedBody`でも実行できますが、英語の綴りは`trimmedBody`です。可読性のため修正を推奨します。

## 累積復習の所見

- 三項演算子の構文は書けている
- 条件と真・偽それぞれの結果の対応付けが逆になった
- 要件の境界値「20文字以下／20文字を超える」の翻訳を再確認する必要がある

## 修正後

4ケースすべて合格。

- 20文字未満：合格
- 20文字ちょうど：合格
- 21文字以上：合格
- 大文字・小文字を無視した検索：合格
- slug生成：合格

`trimedBody`は動作上の問題はないが、一般的な綴りは`trimmedBody`。今後の命名時に注意する。

## Unit 4判定

完了。

- 文字列メソッドの戻り値を判別できた
- `trim`、大小文字変換、`split`、`join`、`replaceAll`、`slice`、`includes`を扱った
- 複数メソッドを組み合わせた初見実装に成功した
- optional chaining、論理演算子、プレーンオブジェクト生成を累積復習できた
- `replace`の置換範囲と三項演算子の条件は今後も課題内で再確認する
- 本人申告により、Unit 4は外部資料を参照せずに取り組んだ


