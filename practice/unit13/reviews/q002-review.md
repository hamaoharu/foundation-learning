# Unit 13 / Q002 レビュー

## 判定

合格。

## 確認できたこと

- `user.getName()`では`this`が`user`になると判断できている
- 同じ関数でも`aki.getName()`では`this`が`aki`になると判断できている
- メソッドを変数へ取り出して単独で呼ぶとエラーになると判断できている

## 表現の補足

「`this`が機能しなくなる」より、次の説明が正確。

```text
getName()はオブジェクトのメソッドとして呼ばれていない
→ strict modeではthisがundefined
→ this.nameを読もうとしてTypeError
```

呼び出し方によって`this`が変わるという理解は合格水準に達している。
