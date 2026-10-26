# Unit 9 / Q002 レビュー

## 判定

合格（2回の修正後、全ケース合格）

## 修正後の確認

- プロパティが1つだけのオブジェクト：合格
- `fieldName`の中身をキーとして使用：合格
- 文字列・数値・Boolean・`null`・`0`を保存：合格
- 呼び出すたびに新しいオブジェクト：合格

## 正しくできている点

- 新しいオブジェクトを返している
- `value`の空文字・数値・Boolean・`null`をそのまま保持できる
- 呼び出すたびに別のオブジェクトを作っている

## 必須の修正

現在の次のコードは、プロパティ省略記法になっている。

```js
return {
  fieldName,
  value,
};
```

これは次と同じ。

```js
return {
  fieldName: fieldName,
  value: value,
};
```

結果は、常に`fieldName`と`value`という固定キーを持つ。

```js
{ fieldName: "email", value: "haru@example.com" }
```

今回必要なのは、`fieldName`変数の中身をキーにする計算されたプロパティ名。

```text
fieldNameが"email" → emailというキー
fieldNameが"age"   → ageというキー
```

オブジェクトリテラルのキー部分で、変数をブラケットで囲む必要がある。値には`value`変数を指定する。

## 次の完了条件

- プロパティが1つだけのオブジェクトを返す
- キーが`fieldName`の中身に応じて変わる
- 値が`value`の内容になる
- 呼び出すたびに新しいオブジェクトを返す

すべて達成した。
