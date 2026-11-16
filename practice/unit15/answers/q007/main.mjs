// parseActiveUserNamesを名前付きimportしてください。

/**
 * ユーザーJSONの処理結果を成功・失敗オブジェクトで返す。
 *
 * @param {string} jsonText
 * @param {string[]} logs
 * @returns {{ ok: true, names: string[] } | { ok: false, error: string }}
 */
export function createUserResult(jsonText, logs) {
  // try/catch/finallyを使って実装してください。
}

const jsonText = `[
  { "name": "  Haru  ", "active": true },
  { "name": "Aki", "active": false },
  { "name": "  Sora", "active": true }
]`;

const logs = [];
console.log(createUserResult(jsonText, logs));
console.log(logs);

// 期待する出力:
// { ok: true, names: ["Haru", "Sora"] }
// ["start", "end"]

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
