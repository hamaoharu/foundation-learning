# Unit 4 / Q002 初回採点結果

## 判定

構文エラーにより実行不可。修正が必要。

## 1. 引数と同名の変数を再宣言している

```js
function createAccountInfo(firstName, lastName, email) {
  const email = email.trim().toLowerCase();
}
```

引数`email`は、関数内ですでに変数として存在します。同じスコープで`const email`をもう一度宣言できません。

```text
SyntaxError: Identifier 'email' has already been declared
```

整形後の値には、別の名前を付けます。

```js
const normalizedEmail = email.trim().toLowerCase();
```

## 2. テンプレートリテラルで式を埋め込めていない

現在のコード：

```js
const displayName = `firstName.trim() lastName.trim()`;
```

バッククォート内へそのまま書いた文字は、コードではなく文字として扱われます。式を評価するには`${}`で囲みます。

```js
const displayName = `${firstName.trim()} ${lastName.trim()}`;
```

## 3. `split()`は配列を返す

```js
const parts = normalizedEmail.split("@");
// ["taro", "example.com"]
```

必要なのは後半の文字列なので、インデックス`1`の要素を取得します。

```js
const domain = parts[1];
```

または次のように直接取得できます。

```js
const domain = normalizedEmail.split("@")[1];
```

## 所見

- 使用する文字列メソッドの選択は概ね合っている
- 変数名とスコープ：再確認が必要
- テンプレートリテラル：`${}`の構文が未定着
- `split()`の戻り値が配列である知識を、実装へ反映する練習が必要
- 関数からプレーンオブジェクトをreturnする構造は書けている

## 修正後

2件のテストに合格。

- `trim()`による姓名の整形：合格
- テンプレートリテラルによる表示名：合格
- メールの`trim()`と`toLowerCase()`：合格
- `split("@")[1]`によるドメイン取得：合格
- プレーンオブジェクトの返却：合格

軽微な残件：関数の引数名は`emailInput`へ変更されたが、JSDocが`@param {string} email`のままなので一致させる。

解説内に実装例が含まれたため、Q003の初見類題で自力定着を確認する。


