# Unit 13 / Q008 レビュー

## 判定

解説後合格。

## 確認できたこと

- 継承した`constructor`によって`admin.name`を利用できると判断できている
- 親クラスの`greet()`と子クラスの`canManageUsers()`を利用できると判断できている
- `admin`が`AdminUser`・`User`・`Object`すべてのインスタンスとして判定されると読めている
- 通常の`User`インスタンスは`AdminUser`のインスタンスではないと判断できている
- 継承によって複数のprototypeがつながることを理解できている

## 用語の訂正

回答中の「オプショナルチューン」は「プロトタイプチェーン」の誤記として扱う。

```text
admin
→ AdminUser.prototype
→ User.prototype
→ Object.prototype
```

このチェーンに`AdminUser.prototype`と`User.prototype`の両方が含まれるため、両方の`instanceof`が`true`になる。

## 評価

プロトタイプの初回問題では説明が必要だったが、最終的に「インスタンス自身のデータ」「prototype上の共有メソッド」「継承によるprototypeのつながり」を区別できた。
