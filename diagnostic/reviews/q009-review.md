# Q009 採点結果

## 結果

実装へ着手できなかったため、ブラウザAPIとAPI通信は基礎からの再学習が必要と判断します。

## 実装例

```js
const form = document.querySelector("#user-form");
const userIdInput = document.querySelector("#user-id");
const result = document.querySelector("#result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userId = userIdInput.value;

  try {
    const response = await fetch(
      `https://example.com/api/users/${encodeURIComponent(userId)}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const user = await response.json();
    result.textContent = user.name;
  } catch (error) {
    result.textContent = "ユーザーを取得できませんでした";
  }
});
```

## 各処理の役割

- `querySelector`：DOM要素を取得する
- `addEventListener("submit", ...)`：フォーム送信時の処理を登録する
- `event.preventDefault()`：フォームによるページ再読み込みを止める
- `.value`：入力欄の現在値を取得する
- `fetch`：HTTPリクエストを送り、Promiseを返す
- `response.ok`：HTTPステータスが成功範囲か確認する
- `response.json()`：レスポンス本文をJSONとして非同期に読み取る
- `textContent`：文字列をHTMLとして解釈せず表示する
- `try/catch`：通信、JSON変換、明示的にthrowしたHTTPエラーを処理する

## 暫定所見

- DOM取得・更新：知識不足
- イベント処理：知識不足
- フォームの既定動作：知識不足
- fetch・HTTPレスポンス処理：知識不足
- Web上の安全な文字列表示：知識不足

