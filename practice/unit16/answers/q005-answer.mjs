function getScore(shouldSucceed) {
  if (shouldSucceed) {
    return Promise.resolve(80);
  }

  return Promise.reject(new Error("score unavailable"));
}

/**
 * スコア取得結果を表示用文字列へ変換し、処理ログを残す。
 *
 * @param {boolean} shouldSucceed
 * @param {string[]} logs
 * @returns {Promise<string>}
 */
export function formatScore(shouldSucceed, logs) {
  // getScoreが返すPromiseへthen/catch/finallyをつないでください。
  // Promise chain全体をreturnしてください。
}

// 自己申告:
// 資料を参照したか:
// 確信がない箇所:
// 実行して修正した箇所:
