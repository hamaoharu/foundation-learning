# Unit 15 / Q001 レビュー

## 判定

解説後合格。

## 確認できたこと

- stack traceからエラーの種類と最初に確認する行を特定できた
- `name`ではなく、`name`を読み取ろうとした`user.profile`が`undefined`だと修正できた
- optional chainingで複数階層の欠損を安全に扱えるコードを書けた
- `??`で`undefined`の場合の空文字を設定できた

## 初回に混乱した点

エラーメッセージ中の`reading 'name'`を、`name`自体が`undefined`という意味に捉えた。

```text
Cannot read properties of undefined (reading 'name')
```

これは「`undefined`である値から`name`を読もうとした」という意味で、今回の`undefined`は`user.profile`。

## 補足

回答の「`user.profile`が定義されていない」は、厳密には「`profile`プロパティの値として`undefined`が明示的に設定されている」。

問5は解説を受けて次の形を確認したため、後続問題でoptional chainingの位置を再確認する。

```js
return user?.profile?.name?.trim() ?? "";
```

